import { State, Action } from './Type'
import { initialState } from './InitialState'

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'GET_JOKES':
      return { ...state, isLoading: false, jokes: action.payload }
    case 'GET_CATEGORIES':
      return { ...state, isLoading: false, categories: action.payload }
    case 'GET_CATEGORY':
      return { ...state, isLoading: false, category: action.payload }
    case 'GET_NAME':
      return {
        ...state,
        isLoading: false,
        name: action.payload,
        firstName: action.payload.split(' ')[0],
        lastName: action.payload.split(' ')[1],
      }
    case 'SAVE_JOKES':
      return { ...state, isLoading: false, savedJoke: action.payload }
    case 'ADD_SAVED_JOKES':
      return { ...state, isLoading: false, savedJoke: state.savedJoke + 1 }
    case 'REMOVE_SAVED_JOKES': {
      return { ...state, isLoading: false, savedJoke: state.savedJoke - 1 }
    }
    case 'GET_SAVED_JOKES': {
      return {
        ...state,
        isLoading: false,
        savedJokeArray: action.payload,
      }
    }
    default:
      return state
  }
}
