import React from 'react'
import Header from '../partials/Header/Header'
import BookCard from '@/components/BookCard'
import './Book.css'
import BookPanel from '@/components/BookPanel'

export const Book = (): React.ReactElement => {
  return (
    <div>
      <Header />
      <section>
        <div className='column'>
          <BookCard />
          <BookPanel />
        </div>
        <div className='column'></div>
      </section>
    </div>
  )
}
