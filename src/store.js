import initialAppState from './initialState'
import rootReducer from './containers/Root/reducer'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from './logger'
import { sendMessageEpic } from './containers/Root/epics'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

const epicMiddleware = createEpicMiddleware()

const middlewares = applyMiddleware(logger, epicMiddleware)

const reducers = combineReducers({
	rootState: rootReducer
})

const store = createStore(reducers, initialAppState, composeWithDevTools(middlewares))

const combinedEpics = combineEpics(sendMessageEpic)

epicMiddleware.run(combinedEpics)

export default store