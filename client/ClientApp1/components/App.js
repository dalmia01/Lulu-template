import React from 'react';
import '../assets/css/comp1app.scss';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header';
import FixedWidgets from './FixedWidgets';
import Home from './Home';
import Footer from './Footer';

export const App = props =>{
  return (
    <BrowserRouter>
    <div className='lulu_page_content'>
      <Header />
      <FixedWidgets />
      <Home />
      <Footer />
    </div>
    </BrowserRouter>
  )
}
