import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { StyledGatsbyLink } from './StyledGatsbyLink'
import { Link } from 'gatsby'

describe('Given a StyledGatsbyLink component', () => {
  describe('when it is rendered', () => {
    test('it should render correctly with no a11y violations', async () => {
      const { container } = render(
        <StyledGatsbyLink
          as={Link}
          to="/about"
          sx={{ variant: 'links.inverted' }}
        >
          Find your Curve
        </StyledGatsbyLink>
      )

      expect(await axe(container)).toHaveNoViolations()
    })
  })
})
