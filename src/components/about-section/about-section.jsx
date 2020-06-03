import React from 'react';

import './about-section.scss'

import HeadingSecondary from '../heading-secondary/heading-secondary'
import GridAbout from '../grid-about/grid-about'

const About = () => (
    <main>
        <section className='section-about'>
            <div className='u-center-text'>
                <HeadingSecondary>
                    Peacefull holiday home for you
                </HeadingSecondary>
            </div>
            <GridAbout/>
        </section>
    </main>
);

export default About;