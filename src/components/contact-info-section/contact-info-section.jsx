import React from 'react';

import './contact-info-section.scss'

const ContactSection = () => (
    <div className='contact-section-info'>
        <div class="row">
            <div class="col-1-of-3">
                <div class="feature-box">
                    <i class="feature-box-contact__icon icon-basic-smartphone"></i>
                    <h3 class="heading-tertiary u-margin-bottom-medium u-center-text">PHONE</h3>
                    <p class="feature-box__text u-margin-bottom-medium">
                    Please fill free to contact us over phone at the following number:
                    +385 98 1873 675
                    </p>
                </div>
            </div>

            <div class="col-1-of-3">
                <div class="feature-box">
                    <i class="feature-box-contact__icon icon-basic-mail"></i>
                    <h3 class="heading-tertiary u-margin-bottom-medium u-center-text">EMAIL</h3>
                    <p class="feature-box__text u-margin-bottom-medium">
                    Please fill free to email us your questions and requests:
                    andelapanzic@gmail.com
                    </p>
                </div>
            </div>

            <div class="col-1-of-3">
                <div class="feature-box">
                    <i class="feature-box-contact__icon icon-basic-geolocalize-01"></i>
                    <h3 class="heading-tertiary u-margin-bottom-medium u-center-text">LOCATION</h3>
                        <p class="feature-box__text u-margin-bottom-medium">
                        You can find us at the following location:
                        Nikole Tesla 32 Makarska.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default ContactSection;