import { styled } from '../../stitches.config'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '$5',
  width: '100%',
  marginBottom: '20px'
})

export const HeaderTitle = styled('h1', {
  fontSize: '$5',
  fontWeight: '500'
})