import './App.css';
import Navigation from './customer/components/navigation/navbar.js';
import Homepage from './customer/pages/homepage/Homepage.jsx';
import Footer from './customer/components/footer/footer.jsx';
import Product from './customer/components/product/product.jsx';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        {/* <Homepage/> */}

      <Product/>
      </div>
      
      <Footer/>
    </div>
    
    
  );
}

export default App;
