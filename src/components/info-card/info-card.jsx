import React from 'react';

import './info-card.scss';
import '../grid-about/grid-about.scss'

const InfoCard = () => (
    <section>
        <div class="row">
            <div class="col-1-of-4">
                <div class="feature-box">
                    <i class="feature-box__icon icon-basic-home"></i>
                    <h3 class="heading-tertiary u-margin-bottom-medium u-center-text">The whole house</h3>
                    <p class="feature-box__text u-margin-bottom-small">
                        You get a whole 290 m² house.
                    </p>
                </div>
            </div>

            <div class="col-1-of-4">
                <div class="feature-box">
                    <i class="feature-box__icon icon-basic-rss"></i>
                    <h3 class="heading-tertiary u-margin-bottom-medium u-center-text">Free wi-fi</h3>
                    <p class="feature-box__text u-margin-bottom-small">
                        We include fast and free internet connection.
                    </p>
                </div>
            </div>

            <div class="col-1-of-4">
                <div class="feature-box">
                    <i class="feature-box__icon icon-basic-clockwise"></i>
                    <h3 class="heading-tertiary u-margin-bottom-medium u-center-text">Free 24h parking</h3>
                        <p class="feature-box__text u-margin-bottom-small">
                            Includes a free 24h parking space and a garage.
                    </p>
                </div>
            </div>

            <div class="col-1-of-4">
                <div class="feature-box">
                    <i class="feature-box__icon icon-basic-picture"></i>
                    <h3 class="heading-tertiary u-margin-bottom-medium u-center-text">Beautiful view</h3>
                    <p class="feature-box__text u-margin-bottom-small">
                    House boasts a beautiful sea sight view.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default InfoCard;