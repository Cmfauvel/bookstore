import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const buttons = [<Button key='one'>Add to card</Button>, <Button key='two'>Add to wishlist</Button>]

const BookCard = (): JSX.Element => {
  return (
    <Card sx={{ display: 'flex', margin: '2rem', width: '100%', minHeight: '300px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <CardMedia
          sx={{
            width: '40%',
            border: '1px solid black',
            margin: '5%',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Book Cover
        </CardMedia>
        <CardContent sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <div>
            <Typography component='div' variant='h5'>
              TITLE OF BOOK
            </Typography>
            <Typography variant='subtitle1' color='text.secondary' component='div'>
              Book Author
            </Typography>
          </div>

          <Typography variant='subtitle1' color='red' component='div'>
            PRICE 19.95$
          </Typography>

          <ButtonGroup orientation='vertical' aria-label='vertical outlined button group'>
            {buttons}
          </ButtonGroup>
        </CardContent>
      </Box>
    </Card>
  )
}
{
  /* <Box sx={{ display: 'flex', '& > *': { m: 1,}, }}> */
}
export default BookCard
