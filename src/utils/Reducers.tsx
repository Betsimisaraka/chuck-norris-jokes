import { State, Action } from './Type'
import { initialState } from './InitialState'

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'GET_JOKES':
      return { ...state, isLoading: false, jokes: action.payload }
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'GET_NAME':
      return {
        ...state,
        name: action.payload,
        firstName: action.payload.split(' ')[0],
        lastName: action.payload.split(' ')[1],
      }
    case 'SAVE_JOKES':
      return { ...state, savedJoke: action.payload }
    case 'ADD_SAVED_JOKES':
      return { ...state, savedJoke: state.savedJoke + 1 }
    case 'REMOVE_SAVED_JOKES': {
      return { ...state, savedJoke: state.savedJoke - 1 }
    }
    case 'GET_SAVED_JOKES': {
      return {
        ...state,
        savedJokeArray: action.payload,
      }
    }
    case 'IS_CLICKED': {
      return { ...state, isClicked: action.payload }
    }
    case 'IS_OPEN': {
      return { ...state, isOpen: action.payload }
    }
    case 'SELECTED_OPTION': {
      return { ...state, selectedOption: action.payload }
    }
    // case 'DOWNLOAD_LINK': {
    //   return { ...state, downloadLink: action.payload }
    // }
    default:
      return state
  }
}
