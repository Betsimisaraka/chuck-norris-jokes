import React, { useContext } from 'react'
import { GlobalContext } from '../Context'

const Header = () => {
  const { isLoading } = useContext(GlobalContext)

  return <>{isLoading && <h1>Loading the data</h1>}</>
}

export default Header
