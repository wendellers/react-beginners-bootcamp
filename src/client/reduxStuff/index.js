// @flow

import { createStore } from 'redux'

export const guessHeads = () => ({
  type: 'guessHeads',
})

const randomNum = () => Math.floor(Math.random() * 100) + 1

const initialState = {
  flipScore: 0,
  flipResult: '',
  flipGuessed: '',

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
    case 'guessHeads':
      const flipResult = Math.random() > 0.5 ? 'Heads' : 'Tails'
      const scoreDiff = flipResult === 'Heads' ? 1 : -1
      return {
        flipScore: state.flipScore + scoreDiff,
        flipResult,
      }
    // case 'loseFlip':
    //   return {
    //     score: state.score - 1,
    //   }
    default:
      return state
  }
}

const initStore = () => createStore(reducer)

export default initStore
