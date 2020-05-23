import React, { FunctionComponent } from 'react'
import { IconButton, useColorMode } from 'theme-ui'
import { Palette } from '../Icons/Palette'

const modes = [
  'default',
  'light',
  'one',
  'sunset',
  'green',
  'midnight',
  'sunshine',
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
        color: 'background',
        zIndex: 11,
        display: 'block',
        p: 0,
        ml: 3,
        mr: [2, 3],
        cursor: 'pointer',
        '&:hover, &:focus': {
          color: 'primary',
        },
        width: '1.2rem',
        height: '1.2rem',
      }}
    >
      <Palette />
    </IconButton>
  )
}
