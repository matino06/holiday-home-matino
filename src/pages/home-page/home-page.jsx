import React from 'react';

import './home-page.scss';

import { ReactComponent as Logo } from './logo.svg';

import HeadingPrimary from '../../components/heading-primary/heading-primary';
import Button from '../../components/button/button'
import About from '../../components/about-section/about-section'
import InfoSection from '../../components/info-section/info-section'
import SectionOffers from '../../components/section-offers/section-offers'
import Footer from '../../components/footer/footer'
import HouseRules from '../../components/house-rules/house-rules'

const HomePage = () => (
    <div>
        <div className='img-main'>
            <div className='logo-box'>
                <a href='https://holidayhomematino.com'><Logo className='logo'/></a>
            </div>
            <HeadingPrimary/>
            <Button/>
        </div>
        <About/>
        <HouseRules />
        <InfoSection/>
        <SectionOffers/>
        <Footer />
    </div>
);

export default HomePage;