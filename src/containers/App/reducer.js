import {
	FROM_INPUT_CHANGE
} from './constants'

const appReducer = (state = null, action) => {
	switch (action.type) {
		case FROM_INPUT_CHANGE: {
			return state
		}

		default:
			return state
	}
}

export default appReducer