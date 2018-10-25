import * as Bitcore from 'bitcore-lib';
import axios from 'axios';
import { BigNumber } from 'bignumber.js';
import * as crypto from 'crypto-browserify';

import { privateKeyObject, password } from './privateKey'

export class SendTransactionBTC {
	getPrivateKeyFromObject() {
		// TODO: need to remove (testnet)
		const passphrase = password
		const keyObject = privateKeyObject
		// =======================
		let dKey, decifer = {};
		decifer = crypto.createDecipher(
			keyObject.calg,
			passphrase);
		dKey = decifer.update(keyObject['cifertext'], 'hex', 'utf8');
		dKey += decifer.final('utf8');

		return {
			privatekey: dKey,
			address: keyObject.address
		}
	}

	signTransaction(privateKey, utx, receiver, amount, change) {
		console.log(utx)
		const tx = Bitcore.Transaction()
		const dec = new BigNumber(1e8)
		const utxos = [];
		utx.forEach(utxo => {
			const uAmount = new BigNumber(utxo.amount)
			console.log(uAmount);
			utxos.push({
				txId: utxo.txid,
				outputIndex: utxo.vout,
				address: utxo.address,
				script: utxo.scriptPubKey,
				satoshis: parseInt(uAmount.multipliedBy(dec).toString(), 10)
			});
		});
		const BitAmount = new BigNumber(amount)
		tx.from(utxos)
		tx.to(receiver, parseInt(BitAmount.multipliedBy(dec).toString(), 10))
		tx.change(change)
		const pKey = Bitcore.PrivateKey.fromWIF(privateKey)
		tx.sign(pKey);
		return tx.serialize()
	}

	getUtxos(walletAddress) {
		const header = new Headers({
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
		})
		const options = { method: 'GET', header };
		const getUtoxsUrl = `http://193.200.173.204/api/v4.2/BTC/getUTXOs/${walletAddress}`

		return fetch(getUtoxsUrl, options)
			.then(response => response.json())
			.then(json => json['utxos'])
	}

	sendTransaction(signedRawTransaction) {
		const header = new Headers({
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
		})
		const options = { method: 'GET', header };
		const sendSignedRawTransactionUrl = `http://193.200.173.204/api/v4.2/BTC/sendRawTransaction/${signedRawTransaction}`

		return fetch(sendSignedRawTransactionUrl, options)
			.then(response => response.json())
			.catch(error => error)
	}
}
