import React, { FunctionComponent } from 'react'
import { Box, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import { Logo } from '../Logo'
import { Nav } from '../Nav'
import { ThemeSwitcher } from '../ThemeSwitcher'

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
        }}
      >
        <Link to="/" aria-label="Go to the home page">
          <Logo
            size="3rem"
            sx={{ width: ['1.5rem', '2rem'], height: ['1.5rem', '2rem'] }}
          />
        </Link>
        <Flex>
          <Nav />
          <ThemeSwitcher />
        </Flex>
      </Box>
    </Box>
  )
}
