import React, { createContext, useReducer } from 'react'

type State = {
  isLoading: boolean
}
type Action = { type: 'LODING' }

const initialState: State = {
  isLoading: true,
}

export const GlobalContext = createContext(initialState)

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'LODING':
      return { ...state, isLoading: true }
    default:
      return state
  }
}

const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const endpoint = 'https://api.icndb.com'

  return (
    <GlobalContext.Provider
      value={{
        isLoading: state.isLoading,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider
