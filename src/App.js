import React from 'react';

import './App.css';

import HomePage from './pages/home-page/home-page';
import ContactUs from './pages/contact-us-page/contact-us-page';
import GalleryPage from './pages/galery-page/galery-page';
 
import { Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation';


function App() {
  return (
    <div>
      <Navigation/>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/contact-us' component={ContactUs} />
      <Route exact path='/gallery' component={GalleryPage} />
    </div>
  )
}

export default App;
