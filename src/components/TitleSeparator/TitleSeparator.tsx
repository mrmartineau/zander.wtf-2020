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
      p={4}
      pt="12rem"
      sx={{ textTransform: 'uppercase' }}
      id={encodeURI(title.toLowerCase())}
    >
      {title}
    </Box>
  )
}
