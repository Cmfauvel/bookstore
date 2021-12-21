import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ReactElement } from 'react'

const ListItems = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
interface propsTypes {
  withInput: boolean
}
const Patchwok = ({ withInput }: propsTypes): ReactElement => {
  return (
    <Box>
      <div>
        <Typography component='div' variant='h5'>
          TITLE
        </Typography>
        <Typography variant='subtitle1' color='text.secondary' component='div'>
          for this...
        </Typography>
      </div>
      <Box sx={{ border: '1px dashed black', padding: '1rem' }}>
        <div>
          {ListItems.map(item => (
            <span>{item} </span>
          ))}
        </div>
        <div>
          {' '}
          {withInput && (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <label>Add your own tags :</label>
              <TextField placeholder='Type something' />
            </Box>
          )}
        </div>
      </Box>
    </Box>
  )
}

export default Patchwok
