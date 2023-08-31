import React, { useState, useEffect } from 'react';
import './styles/open.css';

const job = [
    {
        'Full-stack': ['Full-time position', 'Berlin or Remote'],
        'Senior Designer': ['Full-time position', 'Berlin or Remote'],
        'Senior Inter': ['Full-time position', 'Berlin or Remote'],
    },
];

const Open = () => {
    const [showBoxes, setShowBoxes] = useState(false);

    useEffect(() => {
        // Set showBoxes to true after a short delay to trigger the animation
        const timer = setTimeout(() => {
            setShowBoxes(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='open'>
            <h1 style={{ marginLeft: '2ch' }}>Open vacancies</h1>
            <div className={`job-container ${showBoxes ? 'show' : ''}`}>
                {Object.keys(job[0]).map((title, index) => (
                    <div className={`job-box`} key={index}>
                        <h2>{title}</h2>
                        <p>* {job[0][title][0]}</p>
                        <p>* {job[0][title][1]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Open;
