import './App.css';
import Navigation from './customer/components/navigation/navbar.js';
import Homepage from './customer/pages/homepage/Homepage.jsx';
import Footer from './customer/components/footer/footer.jsx';
import Product from './customer/components/product/product.jsx';
import {Route, Routes } from 'react-router-dom';
import ProductDetail from './customer/components/productDetail/ProductDetail.jsx';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/products" element={<Product />}/>
        <Route path="/productDetail" element={<ProductDetail />}/>
      </Routes>
{/* 
      <div>
        </>
      </div> */}
      
      <Footer/>
    </div>
    
    
  );
}

export default App;
