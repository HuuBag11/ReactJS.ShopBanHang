import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/product/:id" element={<Product/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
