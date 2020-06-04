import React from 'react';

import './contact-us-page.scss';

import { ReactComponent as Logo } from './logo.svg';

import Footer from '../../components/footer/footer';
import HeadingPrimary from '../../components/heading-contact/heading-contact';
import ContactSection from '../../components/contact-info-section/contact-info-section';

const ContactUs = () => (
    <div>
        <div className='img-contact-us'>
            <div className='logo-box'>
                <a href='https://matino06.github.io/holiday-home-matino/#/'><Logo className='logo' href='http://localhost:3000/'/></a>
            </div>
            <HeadingPrimary />
        </div>
        <ContactSection />
        <Footer />
    </div>
);

export default ContactUs;