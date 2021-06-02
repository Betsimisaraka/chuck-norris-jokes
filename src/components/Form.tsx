import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import {
  FormFeild,
  Button,
  LabelPlaceholder,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from '../styles/styles'

const Form = () => {
  const {
    categories,
    onSubmitJoke,
    name,
    getName,
    firstName,
    lastName,
    isOpen,
    selectedOption,
    toggling,
    onOptionClicked,
  } = useContext(GlobalContext)

  return (
    <FormFeild className='form' onSubmit={onSubmitJoke}>
      <DropDownContainer>
        <DropDownHeader
          onClick={toggling}
          className={
            isOpen ? 'focused' : selectedOption ? 'optionSlected' : 'notfocused'
          }>
          <span className={selectedOption ? 'options' : 'notOptions'}>
            {isOpen
              ? selectedOption || 'Select category'
              : selectedOption || 'Category'}
          </span>
          <svg viewBox='0 0 24 24'>
            <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
          </svg>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {categories.map((item) => (
                <ListItem
                  onClick={() => onOptionClicked(item)}
                  key={Math.random()}>
                  {item}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <LabelPlaceholder
        className={name !== '' ? 'addBorder' : 'removeBorder'}
        htmlFor='fullname'>
        <input
          className='form__input'
          type='text'
          id='fullname'
          value={name}
          onChange={getName}
          autoComplete='off'
        />
        <span className={name !== '' ? 'stayup' : 'staydown'}>
          Impersonate Chuck Norris
        </span>
      </LabelPlaceholder>
      <Button className='form__button'>
        {name === ''
          ? `Draw a random ${firstName ? firstName : 'Chuck'} ${
              lastName ? lastName : 'Norris'
            } Joke`
          : `Draw a random ${name} Joke`}
      </Button>
    </FormFeild>
  )
}

export default Form
