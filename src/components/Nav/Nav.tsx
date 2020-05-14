import React, { FunctionComponent } from 'react'
import { Flex, Link } from 'theme-ui'
import { StyledGatsbyLink } from '../StyledGatsbyLink'

export const Nav: FunctionComponent = () => {
  return (
    <Flex>
      <StyledGatsbyLink to={`/#words`} sx={{ variant: 'links.nav' }}>
        Words
      </StyledGatsbyLink>
      <StyledGatsbyLink to={`/#projects`} sx={{ variant: 'links.nav' }}>
        Projects
      </StyledGatsbyLink>
      <StyledGatsbyLink to={`/#feeds`} sx={{ variant: 'links.nav' }}>
        Feeds
      </StyledGatsbyLink>
      <Link href="https://notes.zander.wtf" variant="nav">
        Notes
      </Link>
    </Flex>
  )
}
