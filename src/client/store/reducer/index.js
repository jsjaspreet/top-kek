import { combineReducers } from "redux"
import memeLinksReducer from './memeLinksReducer'
import memeThumbnailsLinksReducer from './memeThumbnailsLinksReducer'

// combine and export the reducers
export default combineReducers({
  memeLinks: memeLinksReducer,
  memeThumbnailLinks: memeThumbnailsLinksReducer
})
