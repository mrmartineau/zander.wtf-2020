import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { Tabs, TabList, TabPanel, TabPanels, Tab } from '@reach/tabs'
import { Feed } from '../Feed'

export const Feeds: FunctionComponent = () => {
  return (
    <Box
      sx={{
        '[data-reach-tab-list]': {
          display: 'flex',
        },
        '[data-reach-tab]': {
          flexGrow: '1',
          color: 'mastheadText',
          bg: 'mastheadBackground',
          borderRadius: 0,
          border: 0,
          m: 0,
          p: [2, 4],
          textTransform: 'uppercase',
          '&:hover': {
            color: 'text',
            bg: alpha('text', 0.2),
          },
          '&[data-selected]': {
            color: 'text',
            bg: 'background',
          },
        },
      }}
    >
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>Reading list</Tab>
          <Tab>Bookmarks</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Feed
              tag="Reading"
              title="Reading"
              link="https://airtable.com/shr3JVvWlIA6Bg64o"
            />
          </TabPanel>
          <TabPanel>
            <Feed
              tag="Link"
              title="Bookmarks"
              link="https://airtable.com/shr562fVbWvw728yv"
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
