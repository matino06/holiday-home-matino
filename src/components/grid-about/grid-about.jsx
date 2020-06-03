import React from 'react';

import './grid-about.scss'

import GridImg from '../grid-img/grid-img'

const GridAbout = () => (
    <div>
        <div className="row">
            <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">the perfect choice for you</h3>
                <p className="paragraph">
                The villa has 3 bedrooms, a flat-screen TV with satellite channels, an equipped kitchen with a 
                dishwasher and a microwave, a washing machine, and 3 bathrooms with a shower.
                </p>

                <h3 className="heading-tertiary u-margin-bottom-small">experience a peaceful holiday</h3>
                <p className="paragraph">
                Boasting a balcony with garden views, a garden and a terrace, Holiday home Matino can be found in 
                Makarska, close to Ratac Beach and 1.4 km from Beach St. Peter. The air-conditioned accommodation 
                is less than 1 km from Makarska Beach, and guests benefit from complimentary WiFi and private 
                parking available on site.
                </p>

                <a href="#popup" className="btn-text">House rules &rarr;</a>
            </div>
            <GridImg>
            </GridImg>
        </div>
    </div>
);

export default GridAbout;