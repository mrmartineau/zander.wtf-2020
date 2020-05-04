# StyledGatsbyLink

This should only be used when you need to use Gatsby's `Link` component to look like one of Theme UI's `Link` components.

## Usage

The `as` prop is required even though it is an optional prop.

```jsx
import { Link } from 'gatsby'
;<StyledGatsbyLink
  as={GatsbyLink}
  to="/about"
  sx={{ variant: 'links.inverted' }}
>
  Go to Curve
</StyledGatsbyLink>
```
