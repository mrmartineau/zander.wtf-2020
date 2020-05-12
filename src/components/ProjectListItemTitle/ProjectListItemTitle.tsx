import React, { FunctionComponent } from 'react'
import { Heading, Box, Text } from 'theme-ui'

interface ProjectListItemTitleProps {
  title: string
  year: string
}

export const ProjectListItemTitle: FunctionComponent<ProjectListItemTitleProps> = ({
  title,
  year,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Text variant="projectListItemTitleYear">{year}</Text>

      <Heading variant="projectListItemTitle" as="h3">
        {title}
      </Heading>
    </Box>
  )
}
