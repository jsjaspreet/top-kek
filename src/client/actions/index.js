import axios from 'axios'
import {
  GET_MEME_LINKS
} from './types'

export function getMemeLinks() {
  const promise = axios.get("/api/memes")
  return {
    type: GET_MEME_LINKS,
    payload: promise
  }
}

