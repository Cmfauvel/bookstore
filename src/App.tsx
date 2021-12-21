import { FC, ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Book } from './pages/Book/Book'

const App: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Book />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
