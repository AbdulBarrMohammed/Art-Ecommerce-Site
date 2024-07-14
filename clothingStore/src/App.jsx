import { useState } from 'react'
import './App.css'
import { Navbar } from './HomePage/Navbar'
import { Home } from './HomePage/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Store } from './Store'
import { Cart } from './Cart'
import { Footer } from './HomePage/Footer'
import { Likes } from './Likes'
import { SelectedProduct } from './SelectedProduct'




function App() {
   const [cart,  setCart] = useState([]);
   const [likes, setLikes] = useState([]);

  return (
    <>
      <Navbar cart={cart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store cart={cart} setCart={setCart} likes={likes} setLikes={setLikes}/>} />
          <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/Likes" element={<Likes likes={likes} setLikes={setLikes} />} />
          <Route element={<SelectedProduct cart={cart} setCart={setCart} />} path="/Store/product/:productid" />
        </Routes>
      <Footer />

    </>
  )
}

export default App
