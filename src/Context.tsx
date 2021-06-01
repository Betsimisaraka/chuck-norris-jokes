import React, { createContext, useEffect, useReducer } from 'react'
import { reducer } from '../src/utils/Reducers'
import { initialState } from '../src/utils/InitialState'

export const GlobalContext = createContext(initialState)

const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const categoriesEndpoint = 'http://api.icndb.com/categories'
  let endpoint = ''
  if (state.selectedOption === '') {
    endpoint += `https://api.icndb.com/jokes/random?firstName=${state.firstName}&lastName=${state.lastName}&escape=javascript`
  } else {
    endpoint += `https://api.icndb.com/jokes/random?firstName=${state.firstName}&lastName=${state.lastName}&escape=javascript&limitTo=[${state.selectedOption}]`
  }

  const multiJokes = `http://api.icndb.com/jokes/random/${state.savedJoke}`

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

  async function fetchSavedJokes() {
    const res = await fetch(multiJokes)
    const result = await res.json()
    dispatch({ type: 'GET_SAVED_JOKES', payload: result })
  }

  useEffect(() => {
    fetchData()
    fetchCategories()
    fetchSavedJokes()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        isLoading: state.isLoading,
        jokes: state.jokes,
        categories: state.categories,
        category: state.category,
        name: state.name,
        firstName: state.firstName,
        lastName: state.lastName,
        savedJoke: state.savedJoke,
        savedJokeArray: state.savedJokeArray,
        isClicked: state.isClicked,
        isOpen: state.isOpen,
        selectedOption: state.selectedOption,
        getName: (e) =>
          dispatch({
            type: 'GET_NAME',
            payload: e.target.value,
          }),
        dispatch,
        onSubmitJoke: (e) => {
          e.preventDefault()
          fetchData()
          dispatch({ type: 'IS_CLICKED', payload: true })
        },
        savedJokeInput: (e) =>
          dispatch({ type: 'SAVE_JOKES', payload: Number(e.target.value) }),
        addSavedJoke: () => dispatch({ type: 'ADD_SAVED_JOKES' }),
        removeSavedJoke: () => {
          if (state.savedJoke > 0) {
            dispatch({ type: 'REMOVE_SAVED_JOKES' })
          } else {
            return null
          }
        },
        getSavedJoke: () => {
          fetchSavedJokes()
        },
        toggling: () => {
          dispatch({ type: 'IS_OPEN', payload: !state.isOpen })
        },
        onOptionClicked: (value) => {
          dispatch({ type: 'SELECTED_OPTION', payload: value })
          dispatch({ type: 'IS_OPEN', payload: false })
        },
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider
