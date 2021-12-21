import { Box } from '@mui/system'
import React from 'react'
import { ReactElement } from 'react'
import Carousel from '../Carousel/Carousel'
import Patchwok from '../Patchwork/Patchwork'

const RightPanel = (): ReactElement => {
  return (
    <Box
      sx={{
        width: 'calc(40% - 15px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        border: '1px solid black',
        justifyContent: 'space-between'
      }}
    >
      <div>ADVERTISEMENT</div>
      <Patchwok withInput />
      <Carousel />
    </Box>
  )
}

export default RightPanel
