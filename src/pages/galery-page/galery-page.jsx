import React from 'react';

import './galery-page.scss';

import { ReactComponent as Logo } from './logo.svg';

import Footer from '../../components/footer/footer';
import GallerySection from '../../components/gallery-section/gallery-section';
import HeadingGallery from '../../components/booking-header/booking-header';
const GalleryPage = () => (
  <div>
    <div className='img-main'>
        <div className='logo-box'>
          <a href='https://matino06.github.io/holiday-home-matino/#/'><Logo className='logo' href='http://localhost:3000/'/></a>
        </div>
        <HeadingGallery/>
    </div>
    <GallerySection />
    <Footer />
  </div>
);

export default GalleryPage;