import React, { useEffect, useRef } from 'react';
import './styles/ever.css';

const Ever = () => {

    const data = [
        {
            title: 'Discovery',
            description: 'In this step, we actively learn about the needs and goals of the project and thoroughly discuss various solutions and directions to take.',
        },
        {
            title: 'Design',
            description: 'This phase focuses on the creative visual aspect, starting with sketches & wireframes and progressing to the final design of branding or website.',
        },
        {
            title: 'Development',
            description: 'This step involves the technical side, including developing the design of the website on the platform or creating sketches for branding.',
        },
        {
            title: 'Launch',
            description: 'The final step includes completing any necessary revisions, user testing, bug fixes, training, and delivering the product to the client.',
        },
    ];

    const blocks = data.map((item, index) => (
        <div key={index} className='meth '>
            <div className='glows'
                style={{
                    width: '30vh',
                    height: '18vh',
                    boxShadow: '0px 0px 10px purple',
                    textAlign: 'left',
                    padding: '10%',
                }}
            >
                <h2 style={{ color: 'purple' }}>{item.title}</h2>
                <br />
                {item.description}
            </div>
        </div>
    ));

    return (
        <div className={`ever`} >
            <h1 style={{ fontSize: '50px' }}>Process</h1>
            <h1>A Closer Look At Our Methodology</h1>
            <div style={{ display: 'flex', marginTop: '-3%' }}>
                {blocks}
            </div>
        </div>
    );
};

export default Ever;
