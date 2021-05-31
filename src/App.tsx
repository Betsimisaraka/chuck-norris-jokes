import React from 'react'
import Header from './components/Header'
import ContextProvider from './Context'
import styled from 'styled-components'
import Form from './components/Form'
import SaveJokes from './components/SaveJokes'

const AppStyle = styled.div`
  max-width: 555px;
  height: 704px;
  padding: 48px 58px 72px;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  background-color: white;
  margin-left: auto;
  margin-right: auto;
`

const App = () => {
  return (
    <ContextProvider>
      <AppStyle>
        <Header />
        <Form />
        <SaveJokes />
      </AppStyle>
    </ContextProvider>
  )
}

export default App
