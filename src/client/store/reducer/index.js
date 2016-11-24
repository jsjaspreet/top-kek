import { combineReducers } from "redux"
import memeLinksReducer from './memeLinksReducer'

// combine and export the reducers
export default combineReducers({
  memeLinks: memeLinksReducer
})
