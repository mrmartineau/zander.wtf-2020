import React, { FunctionComponent } from 'react'
import { Flex, Link } from 'theme-ui'
import { StyledGatsbyLink } from '../StyledGatsbyLink'
import { External } from '../Icons/External'
import { ThemeSwitcher } from '../ThemeSwitcher'

export const Nav: FunctionComponent = () => {
  return (
    <Flex
      sx={{
        alignItems: ['flex-end', 'center'],
        flexDirection: ['column', 'row'],
        justifyContent: 'flex-end',
      }}
      role="navigation"
    >
      <Flex>
        <StyledGatsbyLink to={`/blog`} sx={{ variant: 'links.nav' }}>
          Blog
        </StyledGatsbyLink>
        <StyledGatsbyLink to={`/projects`} sx={{ variant: 'links.nav' }}>
          Projects
        </StyledGatsbyLink>
        {/* <StyledGatsbyLink to={`/likes`} sx={{ variant: 'links.nav' }}>
          Likes
        </StyledGatsbyLink> */}
      </Flex>
      <Flex
        sx={{
          alignItems: 'center',
        }}
      >
        <Link
          href="https://notes.zander.wtf"
          variant="nav"
          sx={{ display: 'inline-flex', alignItems: 'center' }}
          target="_black"
          rel="noopener"
        >
          Code Notes{' '}
          <External size="0.7rem" sx={{ ml: 1 }} alt="External link icon" />
        </Link>

        <ThemeSwitcher />
      </Flex>
    </Flex>
  )
}
