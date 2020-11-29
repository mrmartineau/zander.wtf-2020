import React, { FunctionComponent } from 'react'
import { Heading, Box, Text, Grid } from 'theme-ui'

interface ProjectListItemTitleProps {
  title: string
  year: string
}

export const ProjectListItemTitle: FunctionComponent<ProjectListItemTitleProps> = ({
  title,
  year,
}) => {
  return (
    <Grid columns="1rem 1fr" gap="padding">
      <Box sx={{ position: 'relative' }}>
        <Text variant="verticalTag">{year}</Text>
      </Box>

      <Heading variant="projectListItemTitle" as="h3">
        {title}
      </Heading>
    </Grid>
  )
}
