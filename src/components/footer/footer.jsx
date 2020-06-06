import React from 'react';

import './footer.scss';

import { ReactComponent as Logo } from './logo.svg';

const Footer = () => (
    <footer className='footer'>
        <div className='footer__logo-box'>
            <Logo className='footer__logo'/>
        </div>
        <div className='row'>
            <div className='col-1-of-2'>
                <div className='footer__navigation'>
                    <ul>
                        <li className='footer__item'><a className='footer__link' href='https://holidayhomematino.com'>Home</a></li>
                        <li className='footer__item'><a className='footer__link' href='https://holidayhomematino.com/#/gallery'>Gallery</a></li>
                        <li className='footer__item'><a className='footer__link' href='https://holidayhomematino.com/#/contact-us'>Contact us</a></li>
                    </ul>
                </div>
            </div>
            <div className='col-1-of-2'>
                <p className='footer__copyright'>
                    Built in 2020 by <a className='footer__link' href='mailto:matino0546@gmail.com'>Matino Miličević</a>. 
                    Copyright &copy; by Matino Miličević.
                </p>
            </div>
        </div>
    </footer>
)

export default Footer;
           
     