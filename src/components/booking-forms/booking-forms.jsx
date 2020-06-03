import React from 'react';

import './booking-forms.scss'

import DatePicker from '../dare-picker/date-picker'

class BookingForms extends React.Component {
    render() {
        return (
            <section className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form" />
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Start booking now
                                    </h2>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full name" id="name" required />
                                    <label htmlFor="name" className="form__label">Full name</label>
                                </div>

                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email address" id="email" required />
                                    <label htmlFor="email" className="form__label">Email address</label>
                                </div>

                                <div className="form__group">
                                    <input type="tel" className="form__input" placeholder="Telephone number" id="telephone" required />
                                    <label htmlFor="telephone" className="form__label">Telephone number</label>
                                </div>
                                <div className="form__group">
                                    <input type="number" min='1' max='8' className="form__input" placeholder="Number of guests" id="number" required />
                                    <label htmlFor="number" className="form__label">Number of guests</label>
                                </div>

                                <div className="form__group">
                                    <div className="form__group">
                                        <input type="text" className="form-requests__input" placeholder="Special requests for the hoast" id="requests" />
                                        <label htmlFor="requests" className="form-requests__label">Special requests for the hoast</label>
                                    </div>
                                </div>
                                <div className="u-margin-bottom-medium">
                                    <DatePicker className='date-picker'/>
                                </div>
                                <div className='form__group u-margin-bottom-medium'>
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="small" name="size" />
                                        <label htmlFor="small" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Do you need a child crib?
                                        </label>
                                    </div>
                                </div>
                                <div className="form__group">
                                    <button className="btn-popup btn-popup--blue">Next step &rarr;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }

}


export default BookingForms;