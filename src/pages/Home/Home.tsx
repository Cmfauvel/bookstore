import React, { useState } from 'react'
import Header from '../partials/Header/Header'
import TabsComp from '@/components/Tabs/Tabs'
import Carousel from '@/components/Carousel/Carousel'
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import RightPanel from '@/components/RightPanel/RightPanel'

export const Home = () => {
  return (
    <div>
      <Header />
      <Box component='div' sx={{ display: 'flex', padding: '10px 2px', gap: '15px' }}>
        <Box component='div' sx={{ width: '60%' }}>
          <TabsComp />
          <Box sx={{ paddingTop: 5 }}>
            <BasicSelect />
            <Carousel />
          </Box>
        </Box>
        <RightPanel />
      </Box>
    </div>
  )
}

export default function BasicSelect() {
  const [filter, setFilter] = useState('just_arrived')

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant='standard' sx={{ width: '150px' }}>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={filter}
          label='filter'
          onChange={handleChange}
          defaultValue={filter}
        >
          <MenuItem value={'just_arrived'}>Just arrived</MenuItem>
          <MenuItem value={'coming_soon'}>Coming soon</MenuItem>
          <MenuItem value={'last_chance'}>Last chance</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
