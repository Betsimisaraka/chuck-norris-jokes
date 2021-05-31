import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import styled from 'styled-components'
import chuckNorris from '../assets/chuck-norris.png'
import randomPhoto from '../assets/random-photo.jpg'

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

  return (
    <>
      {isLoading && <h1>Loading the data</h1>}
      <Image src={chuckNorris} alt='Chuck Norris' />
      {!isLoading &&
        jokes.map((item) => (
          <Joke key={item.id}>
            <q dangerouslySetInnerHTML={{ __html: item.joke }} />
          </Joke>
        ))}
    </>
  )
}

export default Header
