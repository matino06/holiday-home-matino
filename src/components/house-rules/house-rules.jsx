import React from 'react';

import './house-rules.scss'

//import GridImg from '../grid-img/grid-img'

const HouseRules = () => (
    <div className="popup" id="popup">
        <div className="popup__content">
            <div className="popup__left">
                <img src="./assets/dnevni.jpg" alt="Tour photo" className="popup__img"/>
                <img src="./assets/vrt.jpg" alt="Tour photo" className="popup__img"/>
            </div>
            <div className="popup__right">
                <a href="#" className="popup__close">&times;</a>
                <h2 className="heading-secondary ">House rules</h2>
                <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                <ul className="popup__text u-margin-bottom-small">
                    <li>Check-in 3:00 PM - 10:00 PM</li>
                    <li>Check-out 7:00 AM - 10:00 AM</li>
                    <li>A EUR200 damage deposit is required on arrival. This deposit will be fully refunded at check-out, as long as there isn't any damage to the property.</li>
                    <li>Smoking is not allowed</li>
                    <li>There's no age requirement for check-in</li>
                    <li>Parties/events are not allowed</li>
                    <li>Guests need be quiet between 10:00 PM and 8:00 AM</li>
                    <li>Parties/events are not allowed</li>
                    <li>Pets are not allowed.</li>
                    <li>Child policies: Crib by request (Free)</li>
                </ul>
                <a href="#" className="btn-popup btn-popup--blue">Book now</a>
            </div>
        </div>
    </div>
);

export default HouseRules;