import React from 'react';

import './section-offers.scss'

import Cards from '../cards/cards'

const SectionOffers = () => (
    <div class="section-tours" id="section-tours">
        <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
                The best offers
            </h2>
            <Cards/>
        </div>
    </div>
);

export default SectionOffers;