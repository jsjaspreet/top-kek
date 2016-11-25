import axios from 'axios'
import {
  GET_MEME_LINKS
} from './types'

export function getMemeLinks() {
  let promise;
  if(window.location.hostname.indexOf("localhost") > -1) {
    promise = axios.get(`/api/memes`)
  }
  else {
    promise = axios.get(`https://topkekkle:5050/api/memes`)
  }
  return {
    type: GET_MEME_LINKS,
    payload: promise
  }
}

