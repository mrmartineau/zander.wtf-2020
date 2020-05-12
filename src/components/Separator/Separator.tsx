import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'

export const Separator: FunctionComponent<{ sx?: any }> = ({ sx }) => {
  return (
    <Box
      sx={{
        height: '0.4rem',
        width: '30%',
        bg: 'text',
        display: 'block',
        my: 4,
        ...sx,
      }}
    />
  )
}
