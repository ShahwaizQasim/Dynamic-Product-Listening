import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './pages/allProducts'
import ProductsDetail from './pages/productDetail'
import NotFound from './pages/notFound'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<AllProducts />} />
        <Route path='/ProductDetail/:id' element={<ProductsDetail />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
