import React, { FunctionComponent } from 'react'
import { StyledGatsbyLinkProps } from './StyledGatsbyLink.models'
import { Link } from 'theme-ui'

export const StyledGatsbyLink: FunctionComponent<StyledGatsbyLinkProps> = ({
  sx,
  ...rest
}) => <Link {...rest} sx={sx} />
