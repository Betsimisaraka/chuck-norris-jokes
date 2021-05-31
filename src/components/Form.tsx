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
  color: #c4c4c4;
  height: 58px;
  border: solid 1px #c4c4c4;
  background-color: white;
  width: 100%;
  padding: 0;
  margin: 16px 0 32px;
`

const FormSelect = styled.select`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  color: #c4c4c4;
  height: 58px;
  border: solid 1px #c4c4c4;
  background-color: white;
  width: 100%;
  margin: 32px 0 16px;
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
  height: 58px;
  border-radius: 6px;
  background-color: #34394f;
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
