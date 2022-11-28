import React from 'react'
import { Home } from './pages/Home'
import { globalStyles } from './styles/global'

export const App: React.FunctionComponent = () => {
  globalStyles()
  return <Home />
}
