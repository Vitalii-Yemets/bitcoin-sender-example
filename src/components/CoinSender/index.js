import React from 'react'
import { Input, Button } from 'mdbreact'

import './CoinSender.css'

const CoinSender = ({	
	onFromChange,
	onToChange,
	onAmountChange,
	onFeeChange,
	onSendMessage
}) => {

	return (
		<div className='CoinSender'>
			<Input id='From' label='From' name='From' size='sm' onChange={onFromChange} />
			<Input id='To' label='To' name='To' size='sm' onChange={onToChange} />
			<Input id='Amount' label='Amount' name='Amount' size='sm' onChange={onAmountChange} />
			<Input id='Fee' label='Fee' name='Fee' size='sm' onChange={onFeeChange} />
			<Button onClick={onSendMessage}>
				send
			</Button>
		</div>
	)
}

export default CoinSender