export type ValueType = {
  id: number
  joke: string
  categories: []
}

export type State = {
  isLoading: boolean
  jokes: ValueType[]
  categories: string[]
  category: string
  name: string
  firstName: string
  lastName: string
  savedJoke: number
  savedJokeArray: string
  dispatch: React.Dispatch<any>
  getCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void
  getName: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmitJoke: (e: React.FormEvent<HTMLFormElement>) => void
  savedJokeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  addSavedJoke: () => void
  removeSavedJoke: () => void
  getSavedJoke: () => void
}

export type Action =
  | { type: 'GET_JOKES'; payload: ValueType[] }
  | { type: 'GET_CATEGORIES'; payload: string[] }
  | { type: 'GET_CATEGORY'; payload: string }
  | { type: 'GET_NAME'; payload: string }
  | { type: 'SAVE_JOKES'; payload: number }
  | { type: 'ADD_SAVED_JOKES' }
  | { type: 'REMOVE_SAVED_JOKES' }
  | { type: 'GET_SAVED_JOKES'; payload: string }
