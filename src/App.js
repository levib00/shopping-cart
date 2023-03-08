import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from './components/nav-bar'
import { Footer } from './components/footer';
import { Main } from "./components/main";
import { Shop } from './components/shop'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
