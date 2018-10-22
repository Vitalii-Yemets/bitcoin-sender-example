import {
	FROM_INPUT_CHANGE,
	TO_INPUT_CHANGE,
	FEE_INPUT_CHANGE,
	AMOUNT_INPUT_CHANGE,
	SEND_MESSAGE,
	SEND_MESSAGE_SUCCESS,
	SEND_MESSAGE_ERROR
} from './constants'

export const setFrom = from => ({
	type: FROM_INPUT_CHANGE,
	from
})

export const setTo = to => ({
	type: TO_INPUT_CHANGE,
	to
})

export const setFee = fee => ({
	type: FEE_INPUT_CHANGE,
	fee
})

export const setAmount = amount => ({
	type: AMOUNT_INPUT_CHANGE,
	amount
})

export const sendMessage = () => ({
	type: SEND_MESSAGE
})


export const sendMessageSuccess = requetsInfo => ({
	type: SEND_MESSAGE_SUCCESS,
	requetsDetails: requetsInfo
})


export const sendMessageError = requestErrorInfo => ({
	type: SEND_MESSAGE_ERROR,
	requetsDetails: requestErrorInfo
})