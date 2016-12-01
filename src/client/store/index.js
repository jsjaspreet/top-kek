// third party imports
import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import promiseMiddleware from "redux-promise"
import {responsiveStoreEnhancer} from 'redux-responsive'
// local imports
import reducer from "./reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    responsiveStoreEnhancer,
    applyMiddleware(thunk, promiseMiddleware)
  )
)

export default store
