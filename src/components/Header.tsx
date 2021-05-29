import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import styled from 'styled-components'
import Form from './Form'
import image from '../chuck-norris.png'

const Joke = styled.h2`
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: normal;
  color: #34394f;
  margin: 24px 0 32px;
`

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`

const Header = () => {
  const { isLoading, jokes } = useContext(GlobalContext)
  console.log(jokes)

  return (
    <div>
      {isLoading && <h1>Loading the data</h1>}
      <Image src={image} alt='Chuck Norris' />
      {!isLoading &&
        jokes.map((item) => (
          <Joke key={item.id}>
            <q dangerouslySetInnerHTML={{ __html: item.joke }} />
          </Joke>
        ))}
      <Form />
    </div>
  )
}

export default Header
