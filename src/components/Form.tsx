import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../Context'

const FormFeild = styled.form`
  display: flex;
  flex-direction: column;
`

const FormInput = styled.input`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  color: gray-1;
  width: 439px;
  height: 58px;
  border: solid 1px gray-1;
  background-color: white;
  width: 100%;
`

const FormSelect = styled.select`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  color: gray-1;
  width: 439px;
  height: 58px;
  border: solid 1px gray-1;
  background-color: white;
  width: 100%;
`

const Button = styled.button`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  color: white;
  width: 439px;
  height: 58px;
  margin: 32px 0 52px;
  padding: 16.8px 93.4px 15.2px 93.4px;
  border-radius: 6px;
  background-color: black;
  border: 0;
  width: 100%;
`

const Form = () => {
  const { categories, onSubmitJoke, getCategory, name, getName } =
    useContext(GlobalContext)

  return (
    <FormFeild className='form' onSubmit={onSubmitJoke}>
      <label className='form__label' htmlFor='jokeCategories'>
        <FormSelect
          name='categories'
          id='jokeCategories'
          onChange={getCategory}>
          <option value='' hidden>
            Category
          </option>
          {categories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </FormSelect>
      </label>
      <label className='form__label' htmlFor='fullname'>
        <FormInput
          className='form__input'
          type='text'
          id='fullname'
          value={name}
          onChange={getName}
          placeholder='Impersonate Chuck Norris'
        />
      </label>
      <Button className='form__button'>
        {name === ''
          ? 'Draw a random Chuck Norris Joke'
          : `Draw a random ${name} Joke`}
      </Button>
    </FormFeild>
  )
}

export default Form
