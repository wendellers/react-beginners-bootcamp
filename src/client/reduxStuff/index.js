// @flow

import { createStore } from 'redux'

const initialState = {
  score: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'winFlip':
      return {
        score: state.score + 1,
      }
    case 'loseFlip':
      return {
        score: state.score - 1,
      }
    default:
      return state
  }
}

const initStore = () => createStore(reducer)

export default initStore
