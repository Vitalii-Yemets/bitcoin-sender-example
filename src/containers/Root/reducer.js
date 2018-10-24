import {
	FROM_INPUT_CHANGE,
	TO_INPUT_CHANGE,
	AMOUNT_INPUT_CHANGE,
	FEE_INPUT_CHANGE,
	SEND_MESSAGE,
	SEND_MESSAGE_SUCCESS,
	SEND_MESSAGE_ERROR
} from './constants'

const rootReducer = (state = null, action) => {
	switch (action.type) {
		case FROM_INPUT_CHANGE: {
			const from = action.from
			return {
				...state,
				from
			}
		}

		case TO_INPUT_CHANGE: {
			const to = action.to
			return {
				...state,
				to
			}
		}

		case AMOUNT_INPUT_CHANGE: {
			const amount = action.amount
			return {
				...state,
				amount
			}
		}

		case FEE_INPUT_CHANGE: {
			const fee = action.fee
			return {
				...state,
				fee
			}
		}

		case SEND_MESSAGE: {
			const isSpinerShow = true
			return {
				...state,
				isSpinerShow
			}
		}

		case SEND_MESSAGE_SUCCESS: {
			const requestDetails = action.requestDetails
			return {
				...state,
				requestDetails
			}
		}

		default:
			return state
	}
}

export default rootReducer