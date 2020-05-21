import React, { FunctionComponent } from 'react'
import { Box, Flex } from 'theme-ui'
import { Logo } from '../Logo'
import { Nav } from '../Nav'
import { ThemeSwitcher } from '../ThemeSwitcher'
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
          p: 4,
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
          flexDirection: ['column', 'row'],
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
        <Flex sx={{ alignItems: 'center' }}>
          <Nav />
          <ThemeSwitcher />
        </Flex>
      </Box>
    </Box>
  )
}
