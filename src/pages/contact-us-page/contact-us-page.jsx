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
                <a href='https://holidayhomematino.com'><Logo className='logo'/></a>
            </div>
            <HeadingPrimary />
        </div>
        <ContactSection />
        <Footer />
    </div>
);

export default ContactUs;