import React from 'react';

import './cards.scss'

import ButtonOffers from '../button-offers/button-offers'

const Cards = () => (
    <div className="row">
        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">May</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>7 days</li>
                            <li>Up to 8 people</li>
                            <li>Free parking</li>
                            <li>Garage</li>
                            <li>Garden </li>
                        </ul>
                    </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">€150</p>
                        </div>
                        <ButtonOffers/>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--2">June</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>7 days</li>
                            <li>Up to 8 people</li>
                            <li>Free parking</li>
                            <li>Garage</li>
                            <li>Garden </li>
                        </ul>
                    </div>

                </div>
                <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">€200</p>
                        </div>
                        <ButtonOffers/>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--3">July</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>7 days</li>
                            <li>Up to 8 people</li>
                            <li>Free parking</li>
                            <li>Garage</li>
                            <li>Garden </li>
                        </ul>
                    </div>

                </div>
                <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">€220</p>
                        </div>
                        <ButtonOffers/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Cards;