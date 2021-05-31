import { State } from './Type'

export const initialState: State = {
  isLoading: true,
  jokes: [],
  categories: [],
  category: '',
  name: '',
  firstName: 'Chuck',
  lastName: 'Norris',
  savedJoke: 0,
  savedJokeArray: '',
  dispatch: () => {},
  getCategory: () => {},
  getName: () => {},
  onSubmitJoke: () => {},
  savedJokeInput: () => {},
  addSavedJoke: () => {},
  removeSavedJoke: () => {},
  getSavedJoke: () => {},
}
