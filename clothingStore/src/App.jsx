import { useState } from 'react'
import './App.css'
import { Navbar } from './Navbar'
import { Home } from './Home'
import { Route, Routes } from 'react-router-dom'
import { Store } from './Store'
import { Cart } from './Cart'
import { Footer } from './Footer'
import { SelectedProduct } from './SelectedProduct'



function App() {
   const [cart,  setCart] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store cart={cart} setCart={setCart}  />} />
        <Route path="/Cart" element={<Cart />} />
        <Route element={<SelectedProduct />} path="/Store/product/:productid" />
      </Routes>
      <Footer />



    </>
  )
}

export default App
