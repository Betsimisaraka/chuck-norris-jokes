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
        <AddRemoveBtn
          className={savedJoke > 0 ? 'addJoke' : 'removeJoke'}
          onClick={removeSavedJoke}>
          {savedJoke > 0 ? (
            <span className='minus'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={8}
                  d='M20 12H4'
                />
              </svg>
            </span>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                fill='#34394F'
                d='M6.387 12.871c-.32 0-.58-.261-.58-.58v-.581c0-.32.26-.581.58-.581h11.226c.32 0 .58.261.58.58v.581c0 .32-.26.581-.58.581H6.387zM24 12c0 6.629-5.371 12-12 12S0 18.629 0 12 5.371 0 12 0s12 5.371 12 12zm-1.548 0c0-5.802-4.709-10.452-10.452-10.452C6.198 1.548 1.548 6.256 1.548 12c0 5.802 4.708 10.452 10.452 10.452 5.802 0 10.452-4.709 10.452-10.452z'
              />
            </svg>
          )}
        </AddRemoveBtn>
        <InputNumber
          type='number'
          min='0'
          max='100'
          value={savedJoke}
          onChange={savedJokeInput}
        />
        <AddRemoveBtn
          className={savedJoke > 0 ? 'addJoke' : 'removeJoke'}
          onClick={addSavedJoke}>
          {savedJoke > 0 ? (
            <span className='plus'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={8}
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                />
              </svg>
            </span>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                fill='#34394F'
                d='M18.194 11.71v.58c0 .32-.262.581-.581.581H12.87v4.742c0 .32-.261.58-.58.58h-.581c-.32 0-.581-.26-.581-.58V12.87H6.387c-.32 0-.58-.261-.58-.58v-.581c0-.32.26-.581.58-.581h4.742V6.387c0-.32.261-.58.58-.58h.581c.32 0 .581.26.581.58v4.742h4.742c.32 0 .58.261.58.58zM24 12c0 6.629-5.371 12-12 12S0 18.629 0 12 5.371 0 12 0s12 5.371 12 12zm-1.548 0c0-5.802-4.709-10.452-10.452-10.452C6.198 1.548 1.548 6.256 1.548 12c0 5.802 4.708 10.452 10.452 10.452 5.802 0 10.452-4.709 10.452-10.452z'
              />
            </svg>
          )}
        </AddRemoveBtn>
      </LabelInput>
      <SavejokeBtn
        className={savedJoke > 0 ? 'savedjoked' : 'notsavedJoke'}
        onClick={getSavedJoke}>
        Save Jokes
      </SavejokeBtn>
    </SaveJoke>
  )
}

export default SaveJokes
