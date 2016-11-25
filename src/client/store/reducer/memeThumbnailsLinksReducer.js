import { GET_MEME_THUMBNAIL_LINKS} from '../../actions/types'

export default function(state = [], { type, payload }) {
  switch (type) {
  case GET_MEME_THUMBNAIL_LINKS:
    return payload.data
  default:
    return state
  }
}