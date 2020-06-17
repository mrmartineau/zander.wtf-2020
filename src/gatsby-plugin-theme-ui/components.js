/** @jsx jsx */
import Prism from '@theme-ui/prism'
import { toClipboard } from 'copee'
import { useState } from 'react'
import { FaAnchor } from 'react-icons/fa'
import { Box, Button, jsx } from 'theme-ui'
import { getColourFromString } from '../utils/getColourFromString'

const heading = Tag => props => {
  if (!props.id) return <Tag {...props} />

  return (
    <Tag
      {...props}
      sx={{
        '&:hover .slug': {
          opacity: 0.6,
        },
      }}
    >
      {props.children}
      <a
        className="slug"
        href={`#${props.id}`}
        sx={{
          fontSize: 3,
          textDecoration: 'none',
          pr: 3,
          pl: 3,
          display: 'inline-block',
          color: 'text',
          opacity: 0.2,
          transition: 'all 200ms ease-in-out ',
          '&:hover,&:focus': {
            opacity: 1,
            color: 'primary',
          },
        }}
      >
        <FaAnchor size="0.8em" fill="currentColor" title="" />
      </a>
    </Tag>
  )
}

const CopyCode = ({ code }) => {
  const [notificationActive, setNotificationActive] = useState(false)

  const handleCopy = () => {
    toClipboard(code)
    setNotificationActive(true)

    setTimeout(() => {
      setNotificationActive(false)
    }, 3000)
  }

  return (
    <Button onClick={() => handleCopy()} variant="copyCode">
      {notificationActive ? 'Copied' : 'Copy'}
    </Button>
  )
}

const CodeLabel = ({ label }) => {
  if (!label.includes('language')) {
    return null
  }

  const classes = label.split(' ')
  const langIndex = classes.findIndex(item => {
    return item.includes('language')
  })
  const language = classes[langIndex].replace('language-', '')

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 3,
        fontFamily: 'mono',
        fontSize: 0,
        bg: getColourFromString(language), //'contentBg',
        textTransform: 'uppercase',
        px: 2,
        py: 1,
        lineHeight: 1,
        borderRadius: '0 0 0.2rem 0.2rem',
        userSelect: 'none',
        height: 'auto',
      }}
    >
      {language}
    </Box>
  )
}

const Code = ({ children, classes, code }) => {
  return (
    <Box sx={{ position: 'relative', my: 4 }}>
      <Box
        sx={{
          borderRadius: '0.25rem 0.25rem 0 0',
          bg: 'codeBackground',
          p: 2,
          pb: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CodeLabel label={classes} />
        <CopyCode code={code} />
      </Box>
      {children}
    </Box>
  )
}

const ScreenGrab = ({ children, ...rest }) => (
  <Box
    sx={{
      my: 4,
      textAlign: 'center',
      img: {
        p: 3,
        border: theme => `1px solid ${theme.colors.codeBackground}`,
        mx: 'auto',
        // bg: 'codeBackground',
        // boxShadow: 'inset 0 0 30px rgba(0,0,0,0.2)',
        display: 'block',
        borderRadius: 'default',
      },
    }}
    {...rest}
  >
    {children}
  </Box>
)

const ImageGrid = ({ children }) => (
  <Box
    sx={{
      display: 'grid',
      my: 4,
      gridTemplateColumns: 'repeat(auto-fill, minmax(40%, 1fr))',
      gap: 4,
      div: {
        my: 0,
      },
    }}
  >
    {children}
  </Box>
)

const components = {
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  pre: props => props.children,
  code: props => (
    <Code code={props.children} classes={props.className}>
      <Prism {...props} />
    </Code>
  ),
  ScreenGrab,
  ImageGrid,
}

export default components
