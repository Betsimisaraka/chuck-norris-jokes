import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import { Joke, Image } from '../styles/styles'
import chuckNorris from '../assets/chuck-norris.png'
import randomPhoto from '../assets/random-photo.jpg'

const Header = () => {
  const { isLoading, jokes, isClicked, name, firstName, lastName } =
    useContext(GlobalContext)

  return (
    <>
      {isClicked &&
      name !== '' &&
      firstName !== 'Chuck' &&
      lastName !== 'Norris' ? (
        <Image src={randomPhoto} alt='Random photo' />
      ) : (
        <Image src={chuckNorris} alt='Chuck Norris' />
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        jokes.map((item) => (
          <Joke key={item.id}>
            <q dangerouslySetInnerHTML={{ __html: item.joke }} />
          </Joke>
        ))
      )}
    </>
  )
}

export default Header
