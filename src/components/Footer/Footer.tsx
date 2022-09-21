import React, { FunctionComponent } from 'react'
import { Box, Link, Image, Flex, Text } from 'theme-ui'
import { Logo } from '../Logo'
import { FiRss } from 'react-icons/fi'

const links = [
  {
    text: 'Hire me',
    url:
      'mailto:hi+jobs@zander.wtf?subject=I%20would%20like%20to%20hire%20you&body=Hi%20Zander%2C%0D%0A%0D%0A%F0%9F%91%8B',
  },
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
    icon: <FiRss size="1.3rem" style={{ display: 'block' }} title="RSS" />,
  },
]

export const Footer: FunctionComponent = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Flex
        sx={{
          alignItems: 'center',
          gap: 2,
          flexDirection: 'column',
          mb: 3,
          maxWidth: 200,
          mx: 'auto',
        }}
      >
        <Image src="/avatar.jpg" sx={{ borderRadius: '999em', width: 100 }} />
        <Text>Zander Martineau</Text>
        <Text sx={{ opacity: 0.7 }}>@MrMartineau</Text>
        <Text>🏌️‍♂️ • 🚵‍♂️ • 🍖🔥 • 🥁</Text>
        <Box sx={{ fontSize: 1 }}>mister martin-oh</Box>
      </Flex>
      <Box
        sx={{
          p: 'padding',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
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
            {item.icon ? item.icon : item.text}
          </Link>
        ))}
      </Box>

      <Logo
        sx={{
          mt: '10vw',
          mb: '10vw',
          mx: 'auto',
          width: '50vmin',
          height: '50vmin',
        }}
      />
    </Box>
  )
}
