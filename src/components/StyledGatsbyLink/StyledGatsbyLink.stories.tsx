import React, { FunctionComponent } from 'react'
import { text } from '@storybook/addon-knobs'
import { Link } from 'gatsby'
import { StyledGatsbyLink } from './StyledGatsbyLink'

export default {
  title: 'Components|StyledGatsbyLink',
  component: StyledGatsbyLink,
}

export const standard: FunctionComponent = () => (
  <StyledGatsbyLink as={Link} to="/about">
    {text('text', 'Go to the about page')}
  </StyledGatsbyLink>
)
