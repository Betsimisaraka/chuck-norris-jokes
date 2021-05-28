import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import styled from 'styled-components'
import Form from './Form'
import image from '../chuck-norris.png'

const Joke = styled.q`
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: normal;
  color: black;
`

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`

const Header = () => {
  const { isLoading, jokes } = useContext(GlobalContext)

  return (
    <div>
      {isLoading && <h1>Loading the data</h1>}
      <Image src={image} alt='Chuck Norris' />
      {!isLoading &&
        jokes.map((item) => <Joke key={item.id}>{item.joke}</Joke>)}
      <Form />
    </div>
  )
}

export default Header
