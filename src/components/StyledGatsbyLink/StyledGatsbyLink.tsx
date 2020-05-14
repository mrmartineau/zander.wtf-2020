import React, { FunctionComponent } from 'react'
import { StyledGatsbyLinkProps } from './StyledGatsbyLink.models'
import { Link } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

export const StyledGatsbyLink: FunctionComponent<StyledGatsbyLinkProps> = ({
  sx,
  ...rest
}) => <Link {...rest} sx={sx} as={GatsbyLink} />
