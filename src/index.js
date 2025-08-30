import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/About';
import ProductPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/signup/Login';
import Logout from './landing_page/home/Logout';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
  <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer />
  </BrowserRouter>
  </CookiesProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
