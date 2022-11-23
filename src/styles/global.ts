import { globalCss } from '../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  'body': {
    backgroundColor: '$gray1',
    color: '$gray11',
    fontFamily: 'Roboto, sans-serif'
  }
})