import { AppBar, Box, Tabs, Tab, Typography, useTheme } from '@mui/material'
import React from 'react'
import SwipeableViews from 'react-swipeable-views'

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, minHeight: 300 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  }
}

export default function TabsComp() {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  return (
    <Box>
      <Box sx={{ bgcolor: 'background.paper' }}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
        <AppBar position='static'>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='secondary'
            textColor='inherit'
            variant='fullWidth'
            aria-label='full width tabs example'
          >
            <Tab label='Item One' {...a11yProps(0)} />
            <Tab label='Item Two' {...a11yProps(1)} />
            <Tab label='Item Three' {...a11yProps(2)} />
          </Tabs>
        </AppBar>
      </Box>
    </Box>
  )
}
