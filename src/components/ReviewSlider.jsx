import React, { useState } from 'react';
import './styles/ReviewSlider.css'; // Your CSS file

const ReviewSlider = () => {
    const reviews = [
        {
            text: 'Without any doubt I recommend Pryagrajxport as one of the best web design and digital marketing agencies. One of the best agencies I ve came across so far. Wouldn t be hesitated to introduce their work to someone else.',
            name: 'Dwight Schrute',
            description: 'Salesman',
            picss: 'https://theofficeanalytics.files.wordpress.com/2017/11/dwight.jpeg?w=1200'
        },
        {
            text: 'Without any doubt I recommend Pryagrajxport as one of the best web design and digital marketing agencies. One of the best agencies I ve came across so far. Wouldn t be hesitated to introduce their work to someone else.',
            name: 'jim halpert',
            description: 'Salesman',
            picss: 'https://img.nbc.com/files/images/2013/11/12/jim-500x500.jpg'
        },
        {
            text: 'Without any doubt I recommend Pryagrajxport as one of the best web design and digital marketing agencies. One of the best agencies I ve came across so far. Wouldn t be hesitated to introduce their work to someone else.',
            name: 'pam halpert',
            description: 'Salesman',
            picss: 'https://preview.redd.it/571u0n7nkig51.png?auto=webp&s=9f35b607dde9d42b65f1b7c08be4251765a4a346'
        },
        {
            text: 'Without any doubt I recommend Pryagrajxport as one of the best web design and digital marketing agencies. One of the best agencies I ve came across so far. Wouldn t be hesitated to introduce their work to someone else.',
            name: 'Michael scott',
            description: 'Boss',
            picss: 'https://pbs.twimg.com/media/BsUbD5kCMAET0WB.jpg'
        },

        {
            text: 'Without any doubt I recommend Pryagrajxport as one of the best web design and digital marketing agencies. One of the best agencies I ve came across so far. Wouldn t be hesitated to introduce their work to someone else.',
            name: 'Ryan',
            description: 'Temp',
            picss: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6YdCQAzStwtmGhMxmPAAAScd8EQHrWgZ6g&usqp=CAU'
        },

    ];

    const [currentReview, setCurrentReview] = useState(0);

    const showNext = () => {

        setCurrentReview((currentReview + 1) % reviews.length);
    };

    const showPrevious = () => {
        setCurrentReview((currentReview - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="review-slider">
            <div className="review">
                <p className="review-text"><span style={{
                    fontSize: '100px',
                    marginLeft: '-100%',
                }}>&lsquo;</span>&nbsp;&nbsp;
                    <div
                        style={{
                            marginTop: '-10%',
                            marginBottom: '-4%'
                        }}
                    >
                        {reviews[currentReview].text}
                    </div>
                    <span style={{
                        fontSize: '100px',
                        marginRight: '-90%',
                    }}>&nbsp;&nbsp;&rsquo;</span></p>
            </div>

            <div className="user-info">
                <img src={reviews[currentReview].picss} alt={reviews[currentReview].name} className="user-image" />
                <h3 className="user-name">{reviews[currentReview].name}</h3>
                <p className="user-description">{reviews[currentReview].description}</p>
            </div>
            <div className="buttons">
                <button onClick={showPrevious}>&#8592;</button>
                <button onClick={showNext}>&#8594;</button>
            </div>
        </div>
    );
};

export default ReviewSlider;
