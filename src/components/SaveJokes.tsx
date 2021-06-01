import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import {
  SaveJoke,
  SavejokeBtn,
  LabelInput,
  InputNumber,
  AddRemoveBtn,
} from '../styles/styles'

const SaveJokes = () => {
  const {
    savedJoke,
    savedJokeInput,
    addSavedJoke,
    removeSavedJoke,
    getSavedJoke,
  } = useContext(GlobalContext)

  return (
    <SaveJoke>
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
    </SaveJoke>
  )
}

export default SaveJokes
