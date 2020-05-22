import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'

export const Separator: FunctionComponent<{ sx?: any }> = ({ sx }) => {
  return (
    <Box
      as="hr"
      sx={{
        height: '0.4rem',
        width: '20%',
        bg: 'text',
        display: 'block',
        my: 'padding',
        border: 0,
        ...sx,
      }}
    />
  )
}
