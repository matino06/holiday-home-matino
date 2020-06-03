import React from 'react';

import './heading-secondary.scss'

const HeadingSecondary = ({children}) => (
    <h2 className='heading'>
        {children}
    </h2>
);

export default HeadingSecondary;