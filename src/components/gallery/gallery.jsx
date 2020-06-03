import React from 'react';

import './gallery.scss';

const Gallery = () => (
  <div className="slidershow middle">

    <div className="slides">
      <input type="radio" name="r" id="r1" />
      <input type="radio" name="r" id="r2"/>
      <input type="radio" name="r" id="r3"/>
      <input type="radio" name="r" id="r4"/>
      <input type="radio" name="r" id="r5"/>
      <input type="radio" name="r" id="r6"/>
      <input type="radio" name="r" id="r7"/>
      <input type="radio" name="r" id="r8"/>
      <input type="radio" name="r" id="r9"/>
      <input type="radio" name="r" id="r10"/>
      <div className="slide s1" id='r1'>
        <img src="./assets/soba.jpg" alt=""/>
      </div>
      <div className="slide" id='r2'>
        <img src="./assets/dnevni.jpg" alt=""/>
      </div>
      <div className="slide" id='r3'>
        <img src="./assets/vrt.jpg" alt=""/>
      </div>
      <div className="slide" id='r4'>
        <img src="./assets/vrt2.jpg" alt=""/>
      </div>
      <div className="slide" id='r5'>
        <img src="./assets/dvorste2.jpg" alt=""/>
      </div>
      <div className="slide" id='r6'>
        <img src="./assets/vrt3.jpg" alt=""/>
      </div>
      <div className="slide" id='r7'>
        <img src="./assets/vrt4.jpg" alt=""/>
      </div>
      <div className="slide" id='r8'>
        <img src="./assets/terasa.jpg" alt=""/>
      </div>
      <div className="slide" id='r9'>
        <img src="./assets/kuca.jpg" alt=""/>
      </div>
      <div className="slide" id='r10'>
        <img src="./assets/dvoriste.jpg" alt=""/>
      </div>
      <div className="navigation2">
      <label htmlFor="r1" className="bar2"></label>
      <label htmlFor="r2" className="bar2"></label>
      <label htmlFor="r3" className="bar2"></label>
      <label htmlFor="r4" className="bar2"></label>
      <label htmlFor="r5" className="bar2"></label>
      <label htmlFor="r6" className="bar2"></label>
      <label htmlFor="r7" className="bar2"></label>
      <label htmlFor="r8" className="bar2"></label>
      <label htmlFor="r9" className="bar2"></label>
      <label htmlFor="r10" className="bar2"></label>
    </div>
    </div>
</div>
);

export default Gallery;