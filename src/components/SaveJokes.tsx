import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../Context'

const Container = styled.div`
  display: flex;
`

const SavejokeBtn = styled.button`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  text-align: center;
  color: #34394f;
  width: 285px;
  height: 58px;
  margin: 52px 0 0 8px;
  border-radius: 6px;
  background-color: #f5f6f8;
  border: none;
`

const LabelInput = styled.div`
  width: 146px;
  height: 58px;
  margin: 52px 8px 0 0;
  border-radius: 6px;
  background-color: #f5f6f8;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const InputNumber = styled.input`
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  :focus {
    outline: none;
  }
  font-family: 'Inter';
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.52px;
  color: #34394f;
  border: none;
  background-color: transparent;
  width: 10px;
`

const AddRemoveBtn = styled.button`
  font-family: 'Inter';
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.52px;
  color: #34394f;
  border: 1px solid #34394f;
  background-color: transparent;
  width: 24px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
`

const SaveJokes = () => {
  const {
    savedJoke,
    savedJokeInput,
    addSavedJoke,
    removeSavedJoke,
    getSavedJoke,
  } = useContext(GlobalContext)

  return (
    <Container>
      <LabelInput>
        <AddRemoveBtn onClick={removeSavedJoke}>-</AddRemoveBtn>
        <InputNumber
          type='number'
          min='0'
          max='100'
          value={savedJoke}
          onChange={savedJokeInput}
        />
        <AddRemoveBtn onClick={addSavedJoke}>+</AddRemoveBtn>
      </LabelInput>
      <SavejokeBtn onClick={getSavedJoke}>Save Jokes</SavejokeBtn>
    </Container>
  )
}

export default SaveJokes
