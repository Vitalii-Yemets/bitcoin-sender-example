import * as Bitcore from 'bitcore-lib';
import axios from './axios';
import * as Big from 'bignumber.js';
import * as crypto from 'crypto-browserify';

import { privateKeyObject, password } from './privateKey'

export class SendTransactionBTC {
	getPrivateKeyFromObject() {
		// TODO: need to remove
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
		console.log(utx);
		const tx = Bitcore.Transaction();
		const dec = new Big(1e8);
		const utxos = [];
		utx.forEach(utxo => {
			const uAmount = new Big(utxo.amount);
			console.log(uAmount);
			utxos.push({
				txId: utxo.txid,
				outputIndex: utxo.vout,
				address: utxo.address,
				script: utxo.scriptPubKey,
				satoshis: parseInt(uAmount.mul(dec).toString(), 10)
			});
		});
		const BitAmount = new Big(amount);
		tx.from(utxos);
		tx.to(receiver, parseInt(BitAmount.mul(dec).toString(), 10));
		tx.change(change);
		const pKey = Bitcore.PrivateKey.fromWIF(privateKey);
		tx.sign(pKey);
		return tx.serialize();
	}
	getUtxos(address) {
		return new Promise((resolve, reject) => {
			try {
				axios.get(`v4.2/BTC/getUTXOs/${address}`)
					.then(resp => {
						resolve(resp.data.utxos);
					})
			} catch (error) {
				reject(error);
			}
		})
	}
	sendTransaction(raw) {
		return new Promise((resolve, reject) => {
			try {
				axios.get(`v4.2/BTC/sendRawTransaction/${raw}`)
					.then(resp => {
						resolve(resp.data);
					})
			} catch (error) {
				reject(error);
			}
		})
	}
	getTransactionByHash(hash) {
		return new Promise((resolve, reject) => {
			try {
				axios.get(`v4.2/BTC/getTransactionById/${hash}`)
					.then(resp => {
						resolve(resp.data);
					})
			} catch (error) {
				reject(error);
			}
		})
	}
}
