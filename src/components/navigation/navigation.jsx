import React from 'react';

import './navigation.scss';

const Navigation = () => (
    <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

        <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item"><a href="https://matino06.github.io/holiday-home-matino" className="navigation__link"><span>01</span>Home Page</a></li>
                <li className="navigation__item"><a href="https://matino06.github.io/holiday-home-matino/contact-us" className="navigation__link"><span>02</span>Contact Us</a></li>
                <li className="navigation__item"><a href="https://matino06.github.io/holiday-home-matino/gallery" className="navigation__link"><span>03</span>Gallery</a></li>
            </ul>
        </nav>
    </div>
)

export default Navigation;