import React from 'react'
import { Input, Button } from 'mdbreact'
import './CoinSender.css'

const CoinSender = () => {
	return (
		<div className='CoinSender'>
			<Input id='From' label='From' name='From' size='sm' />
			<Input id='To' label='To' name='To' size='sm' />
			<Input id='Amount' label='Amount' name='Amount' size='sm' />
			<Input id='Fee' label='Fee' name='Fee' size='sm' />
			<Button onClick={evt => {

			}}>
				send
			</Button>
		</div>
	)
}

export default CoinSender