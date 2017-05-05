// @flow

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const isProd = process.env.NODE_ENV === 'production'

const loggerMiddleware = createLogger({
  predicate: () => !isProd,
  collapsed: true,
})

const guessHeadsRequest = () => ({
  type: 'guessHeads',
})

const guessHeadsSuccess = (flipResult: string) => ({
  type: 'guessHeadsSuccess',
  payload: flipResult,
})

export const guessHeads = () => (dispatch: Function) => {
  // display user something is going on ...
  dispatch(guessHeadsRequest())
  // call server
  setTimeout(() => {
    const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
    dispatch(guessHeadsSuccess(flipResult))
  }, 1500)

  // display user success


  // display user failure
}

export const guessTails = () => ({
  type: 'guessTails',
})

export const guessnumberInputChange = (number: number) => ({
  type: 'guessnumberInputChange',
  payload: number,
})

const randomNum = () => Math.floor(Math.random() * 100) + 1

const initialState = {
  flipScore: 0,
  flipResult: '',
  flipGuessed: '',
  isFlipProcessing: false,

  guessnumberNumber: randomNum(),
  guessnumberGuessed: 0,
  guessnumberGuessInput: '',

  fizzbuzzStartingNumber: 1,
  fizzbuzzEndingNumber: 15,
  fizzbuzzDivisibleNumber1: 3,
  fizzbuzzDivisibleWord1: 'Fizz',
  fizzbuzzDivisibleNumber2: 5,
  fizzbuzzDivisibleWord2: 'Buzz',
  fizzbuzzResult: [],

  emailInput: '',
  nameInput: '',
  passwordInput: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'guessHeads': {
      return {
        ...state,
        isFlipProcessing: true,
      }
    }

    case 'guessHeadsSuccess': {
      const scoreDiff = action.payload === 'Heads' ? 1 : -1
      return {
        ...state,
        isFlipProcessing: false,
        flipResult: action.payload,
        flipScore: state.flipScore + scoreDiff,
      }
    }

    // case 'guessHeads': {
    //   const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
    //   const scoreDiff = flipResult === 'Heads' ? 1 : -1
    //   return {
    //     ...state,
    //     flipScore: state.flipScore + scoreDiff,
    //     flipResult,
    //   }
    // }

    case 'guessTails': {
      const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
      const scoreDiff = flipResult === 'Tails' ? 1 : -1
      return {
        ...state,
        flipScore: state.flipScore + scoreDiff,
        flipResult,
      }
    }

    case 'guessnumberInputChange': {
      return {
        ...state,
        guessnumberGuessInput: action.payload,
      }
    }

    default:
      return state
  }
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const initStore = () => createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))

export default initStore
