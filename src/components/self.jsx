import React, { useState } from 'react';
import './styles/self.css';

const self = () => {
    const cardData = [{

        "It's not as easy as 1-2-3": "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
        "Quick Sessions": "Discover the power of efficiency with our quick sessions. Get the information you need without any unnecessary fluff.",
        "Unleash Your Potential": "Unlock your potential with our guidance. We help you break down barriers and achieve greatness.",
        "Bright Ideas": "Explore innovative ideas and strategies that can bring transformation to your life. Let's make your dreams a reality.",
        "Key Insights": "Get the key insights you need to succeed. Our sessions are designed to provide you with actionable knowledge.",
        "Positive Change": "Embrace positive change in your journey. Our sessions pave the way for growth, improvement, and new horizons.",
        "Personal Growth": "Invest in your personal growth with our focused sessions. Expand your horizons and become the best version of yourself.",
        "Mindset Shift": "Experience a mindset shift with our transformative sessions. Change your perspective and conquer challenges.",
        "Goal Achievement": "Achieve your goals with our targeted sessions. We provide actionable strategies to turn your dreams into reality.",
        "Confidence Boost": "Boost your confidence and self-esteem with our empowering sessions. Unleash your inner potential.",
        "Effective Strategies": "Learn effective strategies to overcome obstacles and make progress. Our sessions provide practical solutions.",
        "Positive Habits": "Cultivate positive habits and create a life of success. Our sessions guide you towards lasting positive changes."
    }
    ];


    return (
        <div
            style={{
                marginBottom: '10ch'
            }}
        >
            <h4 style={{
                marginLeft: '10ch',
                marginTop: '10ch'
            }}>Wrong with self-improvement & how we're fixing it.</h4>
            <h1 style={{
                display: 'flex',
                marginLeft: '5ch',
            }}>
                Self-improvement. Ugh. <pre>   </pre>
                <img style={{ height: '2ch' }} src="https://img.icons8.com/?size=512&id=F03g2FKWtAd6&format=png" alt="" />
            </h1>
            <div className='contento'>
                <div className='top'></div>
                {Object.keys(cardData[0]).map((key, index) => (
                    <div key={index}>
                        <h3 style={{ fontWeight: 'bold' }}>{key}</h3>
                        <p>{cardData[0][key]}</p>
                    </div>
                ))}
                <div className='bottom'></div>
            </div>
        </div>
    );

}

export default self;
