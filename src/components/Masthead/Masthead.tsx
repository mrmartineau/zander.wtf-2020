import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import { Logo } from '../Logo'
import { Nav } from '../Nav'
import { StyledGatsbyLink } from '../StyledGatsbyLink'

export const Masthead: FunctionComponent = () => {
  return (
    <Box
      sx={
        {
          /* height: '6rem' */
        }
      }
    >
      <Box
        sx={{
          p: 'padding',
          // position: 'fixed',
          // top: 0,
          // right: 0,
          // left: 0,
          // zIndex: 'high',
          // mixBlendMode: 'exclusion',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexDirection: 'row', ///['column', 'row'],
          bg: 'text',
          color: 'background',
        }}
      >
        <StyledGatsbyLink
          to="/"
          aria-label="Go to the home page"
          sx={{
            display: 'block',
            borderBottom: '0 !important',
            my: [2, null],
          }}
          variant="inverted"
        >
          <Logo
            sx={{
              width: '3rem',
              height: '3rem',
              color: 'inherit',
            }}
          />
        </StyledGatsbyLink>

        <Nav />
      </Box>
    </Box>
  )
}
