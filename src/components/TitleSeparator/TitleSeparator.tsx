import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'

interface TitleSeparatorProps {
  title: string
}

export const TitleSeparator: FunctionComponent<TitleSeparatorProps> = ({
  title,
}) => {
  return (
    <Box
      bg="text"
      color="background"
      p={'padding'}
      pt="12rem"
      sx={{ position: 'relative', textTransform: 'uppercase' }}
      id={encodeURI(title.toLowerCase())}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '100%',
          left: 'padding',
          marginTop: '-2rem',
          display: 'inline-flex',
          alignItems: 'center',
          textTransform: 'uppercase',
          color: 'background',
          transform: 'rotate(-90deg)',
          transformOrigin: '0 0',
          userSelect: 'none',
        }}
      >
        {title}
      </Box>
    </Box>
  )
}
