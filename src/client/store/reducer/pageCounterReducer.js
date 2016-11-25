import { DECREASE_PAGE_COUNTER, INCREASE_PAGE_COUNTER } from '../../actions/types'

export default function(state = 0, { type }) {
  switch (type) {
  case DECREASE_PAGE_COUNTER:
    return state - 9
  case INCREASE_PAGE_COUNTER:
    return state + 9
  default:
    return state
  }
}
