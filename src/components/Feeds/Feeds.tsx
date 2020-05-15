import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { Tabs, TabList, TabPanel, TabPanels, Tab } from '@reach/tabs'
import { PinboardFeed } from '../PinboardFeed'

export const Feeds: FunctionComponent = () => {
  return (
    <Box
      sx={{
        '[data-reach-tab-list]': {
          display: 'flex',
        },
        '[data-reach-tab]': {
          flexGrow: '1',
          color: 'text',
          bg: 'background',
          borderRadius: 0,
          border: 0,
          p: [2, 4],
          textTransform: 'uppercase',
          '&:hover': {
            color: 'text',
            bg: alpha('text', 0.2),
          },
          '&[data-selected]': {
            color: 'background',
            bg: 'text',
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
            <PinboardFeed tag="zm:reading" title="Reading" />
          </TabPanel>
          <TabPanel>
            <PinboardFeed tag="zm:link" title="Bookmarks" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
