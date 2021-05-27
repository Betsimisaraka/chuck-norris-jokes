import React, { useContext } from 'react'
import Header from './components/Header'
import ContextProvider from './Context'

const App = () => {
  return (
    <ContextProvider>
      <Header />
    </ContextProvider>
  )
}

export default App
