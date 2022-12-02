import * as Label from '@radix-ui/react-label'
import { styled } from '../../stitches.config'

export const SearchContainer = styled('form', {
  width: '100%',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  gap: '$3'
})

export const LabelContainer = styled(Label.Root, {
  width: '100%',
  fontSize: '$5',
  display: 'flex'
})

export const InputContent = styled('input', {
  width: '100%',
  backgroundColor: '$gray2',
  flex: 1,
  border: 0,
  padding: '0 $5',
  fontSize: '$4',
  color: '$gray11',
  borderRadius: '$sm',
 '&::placeholder': {
    fontSize: '$4',
    color: '$gray11'
  }
})

export const ButtonSubmit = styled('button', {
  color: '$blue11',
  backgroundColor: '$blue3',
  fontSize: '$4',
  fontWeight: 'bold',
  border: 0,
  padding: '$5 $7',
  borderRadius: '$sm',
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: '$blue5',
  }
})