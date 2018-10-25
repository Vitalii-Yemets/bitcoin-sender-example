import {
	FROM_INPUT_CHANGE,
	TO_INPUT_CHANGE,
	AMOUNT_INPUT_CHANGE,
	FEE_INPUT_CHANGE,

	SEND_MESSAGE,
	SEND_MESSAGE_SUCCESS,
	SEND_MESSAGE_ERROR,

	CLOSE_ERROR_MODAL,
	CLOSE_SUCCESS_MODAL

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
			debugger
			const requestDetails = action.requestDetails
			const isShowSuccessModal = true
			const isSpinerShow = false
			return {
				...state,
				requestDetails,
				isShowSuccessModal,
				isSpinerShow
			}
		}

		case SEND_MESSAGE_ERROR: {
			debugger
			const requestDetails = action.requestErrorInfo
			const isShowErrorModal = true
			const isSpinerShow = false
			return {
				...state,
				requestDetails,
				isShowErrorModal,
				isSpinerShow
			}
		}

		case CLOSE_SUCCESS_MODAL: {
			const isShowSuccessModal = false
			const requestDetails = null
			return {
				...state,
				isShowSuccessModal,
				requestDetails
			}
		}

		case CLOSE_ERROR_MODAL: {
			const isShowErrorModal = false
			const requestDetails = null
			return {
				...state,
				isShowErrorModal,
				requestDetails
			}
		}

		default:
			return state
	}
}

export default rootReducer