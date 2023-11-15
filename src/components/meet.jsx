import React from 'react';
import './styles/meet.css';
import ReviewSlider from './ReviewSlider';

const Meet = () => {
    return (
        <div className='meet'>
            <div style={{ width: '5%', height: '5px', background: 'red' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> <br />
            <h2>Why customers love</h2> <br />
            <h2 style={{ fontWeight: 'bolder' }}>  working with us</h2>
            <br />
            <br />

            <ReviewSlider />
        </div>
    )
}

export default Meet;
