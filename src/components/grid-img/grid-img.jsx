import React from 'react';

import '../grid-img/grid-img.scss'
import '../grid-about/grid-about.scss'

const GridImg = () => (
    <div className='col-1-of-2'>
        <div className="composition">
            <img src="./assets/dnevni.jpg" alt="Photo 1" className="composition__photo composition__photo--p1"/>
            <img src="../../assets/soba.jpg" alt="Photo 2" className="composition__photo composition__photo--p2"/>
            <img src="../../assets/vrt.jpg" alt="Photo 3" className="composition__photo composition__photo--p3"/>
        </div>
    </div>
);

export default GridImg;