import axios from 'axios'
import {
  GET_MEME_LINKS,
  GET_MEME_THUMBNAIL_LINKS,
  INCREASE_PAGE_COUNTER,
  DECREASE_PAGE_COUNTER,
} from './types'

export function getMemeLinks() {
  let promise;
  if (window.location.hostname.indexOf("localhost") > -1) {
    promise = axios.get(`/api/memes`)
  }
  else {
    promise = axios.get(`https://www.topkekkle.com:5050/api/memes`)
  }
  return {
    type: GET_MEME_LINKS,
    payload: promise
  }
}

export function increasePageCounter() {
  return {
    type: INCREASE_PAGE_COUNTER,
    payload: 1
  }
}

export function decreasePageCounter() {
  return {
    type: DECREASE_PAGE_COUNTER,
    payload: 1
  }
}


export function getMemeThumbnails() {
  let promise;
  if (window.location.hostname.indexOf("localhost") > -1) {
    promise = axios.get(`/api/memes-thumbnails`)
  }
  else {
    promise = axios.get(`https://www.topkekkle.com:5050/api/memes-thumbnails`)
  }
  return {
    type: GET_MEME_THUMBNAIL_LINKS,
    payload: promise
  }
}


