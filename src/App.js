import React, { useState }from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from './components/nav-bar'
import { Footer } from './components/footer';
import { Main } from "./components/main";
import { Shop } from './components/shop';
import '../src/styles/styles.css'

const App = () => {
  const [cartQuantity, setCartQuantity] = useState(0)
  const [cartItems,  setCartItems] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <Nav cartQuantity={cartQuantity} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/shop" element={<Shop setCartQuantity={setCartQuantity} cartItems={cartItems} setCartItems={setCartItems}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
