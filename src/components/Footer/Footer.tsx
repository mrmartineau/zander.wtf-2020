import React, { FunctionComponent } from 'react'
import { Box, Link } from 'theme-ui'
import { Logo } from '../Logo'

const links = [
  {
    text: 'GitHub',
    url: 'https://github.com/mrmartineau',
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/mrmartineau',
  },
  {
    text: 'npm',
    url: 'https://www.npmjs.com/~mrmartineau',
  },
  {
    text: 'RSS',
    url: '/atom.xml',
  },
]

export const Footer: FunctionComponent = () => {
  return (
    <Box>
      <Box
        sx={{
          p: 'padding',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 8,
        }}
        as="header"
        role="banner"
      >
        <Box sx={{ px: [2, 3], py: 1 }}>&copy; {new Date().getFullYear()}</Box>
        {links.map(item => (
          <Link
            href={item.url}
            sx={{ variant: 'links.footerNav' }}
            key={item.text}
          >
            {item.text}
          </Link>
        ))}
      </Box>

      <Logo
        sx={{
          mt: '50vw',
          mb: '10vw',
          mx: 'auto',
          width: '50vw',
          height: '50vw',
        }}
      />
    </Box>
  )
}
