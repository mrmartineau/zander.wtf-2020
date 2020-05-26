import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import { Logo } from '../Logo'
import { Nav } from '../Nav'
import { StyledGatsbyLink } from '../StyledGatsbyLink'

export const Masthead: FunctionComponent = () => {
  return (
    <Box
      sx={{
        p: 'padding',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row', ///['column', 'row'],
        bg: 'mastheadBackground',
        color: 'mastheadText',
      }}
      as="header"
      role="banner"
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
          alt="Zander's logo - a letter Z"
        />
      </StyledGatsbyLink>

      <Nav />
    </Box>
  )
}
