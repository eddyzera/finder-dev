import { createStitches } from '@stitches/react'
import {
  gray,
  grayDark,
  grayDarkA,
  yellow,
  yellowDark,
  yellowDarkA,
  red,
  redDark,
  redDarkA
} from '@radix-ui/colors'

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...grayDark,
      ...grayDarkA,
      ...yellow,
      ...yellowDark,
      ...yellowDarkA,
      ...red,
      ...redDark,
      ...redDarkA,
    },
    fontSizes: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.5rem',
      6: '2rem',
      7: '2.5rem',
      8: '3rem',
      9: '3.5rem',
      10: '4rem',
      11: '4.5rem',
      12: '5rem'
    },
    sizes: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.5rem',
      6: '2rem',
      7: '2.5rem',
      8: '3rem',
      9: '3.5rem',
      10: '4rem',
      11: '4.5rem',
      12: '5rem'
    },
    radii: {
      sm: '8px',
      md: '16px',
      lg: '100%'
    }
  }
})