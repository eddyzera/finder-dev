import React from 'react'
import { Header } from '../../components/Header'
import { Search } from '../../components/Search/Search'
import { HomeContainer } from './styles'

export const Home: React.FunctionComponent = () => {
  return (
    <HomeContainer>
      <Header />
      <Search />
      <p>card</p>
    </HomeContainer>
  )
}