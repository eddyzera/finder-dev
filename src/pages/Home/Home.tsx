import React from 'react'
import { Header } from '../../components/Header'
import { HomeContainer } from './styles'

export const Home: React.FunctionComponent = () => {
  return (
    <HomeContainer>
      <Header />
      <p>search</p>
      <p>card</p>
    </HomeContainer>
  )
}