import React from 'react'
import { Input, Button } from 'mdbreact'

import './CoinSender.css'

const CoinSender = ({
	from,
	to,
	amount,

	onFromChange,
	onToChange,
	onAmountChange,
	onFeeChange,
	onSendMessage
}) => {

	return (
		<div className='CoinSender'>
			<Input id='From' label='From' name='From' size='sm' value={from} onChange={onFromChange} />
			<Input id='To' label='To' name='To' size='sm' value={to} onChange={onToChange} />
			<Input id='Amount' label='Amount' name='Amount' size='sm' value={amount} onChange={onAmountChange} />
			<Input id='Fee' label='Fee' name='Fee' size='sm' onChange={onFeeChange} />
			<Button onClick={onSendMessage}>
				send
			</Button>
		</div>
	)
}

export default CoinSender