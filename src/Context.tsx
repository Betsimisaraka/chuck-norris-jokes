import React, { createContext, useEffect, useReducer } from 'react'

type ValueType = {
  id: number
  joke: string
  categories: []
}

type State = {
  isLoading: boolean
  jokes: ValueType[]
  categories: string[]
  category: string
  name: string
  dispatch: React.Dispatch<any>
  getCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void
  getName: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmitJoke: (e: React.FormEvent<HTMLFormElement>) => void
}
type Action =
  | { type: 'GET_JOKES'; payload: ValueType[] }
  | { type: 'GET_CATEGORIES'; payload: string[] }
  | { type: 'GET_CATEGORY'; payload: string }
  | { type: 'GET_NAME'; payload: string }

const initialState: State = {
  isLoading: true,
  jokes: [],
  categories: [],
  category: '',
  name: '',
  dispatch: () => {},
  getCategory: () => {},
  getName: () => {},
  onSubmitJoke: () => {},
}

export const GlobalContext = createContext(initialState)

function reducer(state: State = initialState, action: Action) {
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
      }

    default:
      return state
  }
}

const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const endpoint = 'http://api.icndb.com/jokes/random'
  const categoriesEndpoint = 'http://api.icndb.com/categories'

  async function fetchData() {
    const res = await fetch(endpoint)
    const result = await res.json()
    const data = result.value
    dispatch({ type: 'GET_JOKES', payload: [data] })
  }

  async function fetchCategories() {
    const res = await fetch(categoriesEndpoint)
    const result = await res.json()
    const data = result.value
    dispatch({ type: 'GET_CATEGORIES', payload: data })
  }

  useEffect(() => {
    fetchData()
    fetchCategories()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        isLoading: state.isLoading,
        jokes: state.jokes,
        categories: state.categories,
        category: state.category,
        name: state.name,
        getCategory: (e) =>
          dispatch({ type: 'GET_CATEGORY', payload: e.target.value }),
        getName: (e) => dispatch({ type: 'GET_NAME', payload: e.target.value }),
        dispatch,
        onSubmitJoke: (e) => {
          e.preventDefault()
          fetchData()
        },
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider
