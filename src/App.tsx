import React from 'react'
import ContextProvider from './Context'
import { AppStyle } from '../src/styles/styles'
import Container from './container/Container'

const App = () => {
  return (
    <ContextProvider>
      <AppStyle>
        <Container />
      </AppStyle>
    </ContextProvider>
  )
}

export default App
