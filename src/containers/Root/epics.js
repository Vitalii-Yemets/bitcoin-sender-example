import { ofType } from 'redux-observable'
// import { from as ObservableFrom, of as ObservableOf } from 'rxjs'
import { withLatestFrom, mergeMap, map, switchMap, reduce } from 'rxjs/operators'
import { SEND_MESSAGE } from './constants'
import { sendMessageError, sendMessageSuccess } from './actions'
import { SendTransactionBTC } from '../../utils/bitcoin'


export const sendMessageEpic = (action$, state$) => action$.pipe(
	ofType(SEND_MESSAGE),
	switchMap(state$),
	map(({ from, to, amount, fee }) => {

		// //1 получаем приватный ключь
		// const SendTransaction = new SendTransactionBTC();
		// const privateKeyBTC = await SendTransaction.getPrivateKeyFromObject(this.keyObjectPassBTC, this.keyObjectBTC);
		// console.log(privateKeyBTC);
		// const to = document.querySelector('#to').value;
		// const quantity = document.querySelector('#quantity').value;
		// const fee = document.querySelector('#fees').value;
		// //2 получаем utxo
		// let utxo = await SendTransaction.getUtxos(this.keyObjectBTC.address);
		// //3 подписываем транзакцию
		// let rawTransactionBTC = SendTransaction.signTransaction(privateKeyBTC.privatekey, utxo, to, quantity, this.keyObjectBTC.address);
		// //4 отправляем транзакцию
		// SendTransaction.sendTransaction(rawTransactionBTC);


	})
)