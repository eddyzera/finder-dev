import React from 'react'
import { ButtonSubmit, InputContent, LabelContainer, SearchContainer } from './styles'

export const Search: React.FunctionComponent = () => {
  return (
    <SearchContainer>
      <LabelContainer htmlFor="firstName">
        <InputContent placeholder="Pesquise pelo o GitHub username..." />
      </LabelContainer>
      <ButtonSubmit type="submit">
        Pesquisar
      </ButtonSubmit>
    </SearchContainer>
  )
}