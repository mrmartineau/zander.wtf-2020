import React, { FunctionComponent } from 'react'
import { IconButton, useColorMode } from 'theme-ui'
import { Palette } from '../Icons/Palette'

const modes = [
  'default',
  'inverted',
  'dark',
  // 'sunshine',
  'sunset',
  // 'midnight',
  'cultured',
  // 'green',
  // 'one',
]

export const ThemeSwitcher: FunctionComponent = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <IconButton
      onClick={() => {
        const index = modes.indexOf(colorMode)
        const next = modes[(index + 1) % modes.length]
        console.log('ThemeSwitcher:FunctionComponent -> next', next)
        setColorMode(next)
      }}
      aria-label="Cycle colour modes"
      sx={{
        color: 'mastheadText',
        zIndex: 11,
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        textTransform: 'uppercase',
        px: [2, 3],
        py: 1,
        cursor: 'pointer',
        width: 'auto',
        height: 'auto',
        '&:hover, &:focus': {
          color: 'primary',
        },
      }}
    >
      {colorMode}{' '}
      <Palette width="1.2rem" height="1rem" sx={{ flexShrink: 0, ml: 2 }} />
    </IconButton>
  )
}
