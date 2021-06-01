import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import SaveJokes from '../components/SaveJokes'
import { ContainerStyle } from '../styles/styles'

const Container = () => {
  return (
    <ContainerStyle>
      <Header />
      <Form />
      <SaveJokes />
    </ContainerStyle>
  )
}

export default Container
