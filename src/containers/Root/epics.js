import { ofType } from 'redux-observable'
import { from as ObservableFrom, of as ObservableOf } from 'rxjs'
import { withLatestFrom, mergeMap, map, switchMap, catchError } from 'rxjs/operators'
import { SEND_MESSAGE } from './constants'
import { sendMessageError, sendMessageSuccess } from './actions'
import { SendTransactionBTC } from '../../utils/bitcoin'

export const sendMessageEpic = (action$, state$) => action$.pipe(
	ofType(SEND_MESSAGE),
	withLatestFrom(state$),
	mergeMap(([{ }, { rootState }]) => {
		const { from, to, amount } = rootState
		const bitcoin = new SendTransactionBTC()
		const privateKeyBTC = bitcoin.getPrivateKeyFromObject()
		return ObservableFrom(bitcoin.getUtxos(from)).pipe(
			switchMap(utxo => {
				const rawTransactionBTC = bitcoin.signTransaction(
					privateKeyBTC.privatekey,
					utxo,
					to,
					amount,
					from
				)
				return ObservableFrom(bitcoin.sendTransaction(rawTransactionBTC))
			}),
			catchError(error => {
				return ObservableOf(sendMessageError(error))
			}),
			map(result => {
				if (result.code === 500) {
					return sendMessageError({ message: `Code: ${result.code}, ${result.error}` })
				}
				return sendMessageSuccess(result)
			})
		)
	})
)