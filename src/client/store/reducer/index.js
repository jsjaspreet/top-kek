import { combineReducers } from "redux"
import memeLinksReducer from './memeLinksReducer'
import pageCounterReducer from './pageCounterReducer'
import memeThumbnailsLinksReducer from './memeThumbnailsLinksReducer'

// combine and export the reducers
export default combineReducers({
  memeLinks: memeLinksReducer,
  pageCounter: pageCounterReducer,
  memeThumbnailLinks: memeThumbnailsLinksReducer
})
