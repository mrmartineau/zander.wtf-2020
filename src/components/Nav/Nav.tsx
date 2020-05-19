import React, { FunctionComponent } from 'react'
import { Flex, Link } from 'theme-ui'
import { StyledGatsbyLink } from '../StyledGatsbyLink'
import { External } from '../Icons/External'

export const Nav: FunctionComponent = () => {
  return (
    <Flex>
      <StyledGatsbyLink to={`/blog`} sx={{ variant: 'links.nav' }}>
        Blog
      </StyledGatsbyLink>
      <StyledGatsbyLink to={`/projects`} sx={{ variant: 'links.nav' }}>
        Projects
      </StyledGatsbyLink>
      <StyledGatsbyLink to={`/feeds`} sx={{ variant: 'links.nav' }}>
        Feeds
      </StyledGatsbyLink>
      <Link
        href="https://notes.zander.wtf"
        variant="nav"
        sx={{ display: 'inline-flex', alignItems: 'center' }}
        target="_black"
        rel="noopener"
      >
        Code Notes <External size="0.7rem" sx={{ ml: 1 }} />
      </Link>
    </Flex>
  )
}
