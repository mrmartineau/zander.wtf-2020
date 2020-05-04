import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'

export const TitleSeparator: FunctionComponent = ({ children }) => {
  return (
    <Box bg="text" color="background" p={4} sx={{ height: '15rem' }}>
      {children}
    </Box>
  )
}
