import { State } from './Type'

export const initialState: State = {
  isLoading: true,
  jokes: [],
  categories: [],
  category: '',
  name: '',
  firstName: '',
  lastName: '',
  savedJoke: 0,
  savedJokeArray: [],
  isClicked: false,
  isOpen: false,
  selectedOption: '',
  dispatch: () => {},
  getName: () => {},
  onSubmitJoke: () => {},
  savedJokeInput: () => {},
  addSavedJoke: () => {},
  removeSavedJoke: () => {},
  getSavedJoke: () => {},
  toggling: () => {},
  onOptionClicked: () => {},
}
