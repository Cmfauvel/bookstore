import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box } from '@mui/material'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Carousel = () => {
  return (
    <Box>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        pagination={{ clickable: true }}
        style={{
          padding: '5px 0px',
          height: '100px'
        }}
      >
        <SwiperSlide>
          <Box
            sx={{
              minHeight: '90px',
              minWidth: '30px',
              border: '1px solid black',
              display: 'grid',
              placeItems: 'center'
            }}
          >
            Book cover
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              minHeight: '90px',
              minWidth: '30px',
              border: '1px solid black',
              display: 'grid',
              placeItems: 'center'
            }}
          >
            Book cover
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              minHeight: '90px',
              minWidth: '30px',
              border: '1px solid black',
              display: 'grid',
              placeItems: 'center'
            }}
          >
            Book cover
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              minHeight: '90px',
              minWidth: '30px',
              border: '1px solid black',
              display: 'grid',
              placeItems: 'center'
            }}
          >
            Book cover
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default Carousel
