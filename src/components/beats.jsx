import React from 'react'
import './styles/beats.css'

const cardData = [
    {
        '😠': { 'Quadbble with your partner': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure." },
        '👺': { 'You argue a lot': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure." },
        '😮': { 'You got a promotion': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure." },
        '🤓': { 'You attended a class': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure." },
        '😎': { 'You aced an exam': "Congratulations! Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        '🏆': { 'You won a competition': "You're a winner! Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        '🎉': { 'You celebrated an achievement': "Party time! Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    }
];


const beats = () => {
    const cardColors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow']; // Array of colors

    return (
        <div className='beats'>
            <div className='first'>
                <h1
                    style={{
                        marginLeft: '3ch',
                        width: '80%'
                    }}
                >EQ beats IQ</h1>

                <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quod maiores porro vel eius consequuntur explicabo perspiciatis .</p>
                <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quod maiores porro vel eius consequuntur explicabo perspiciatis .</p>
            </div>
            <div className='second'>
                <h1
                    style={{
                        marginTop: '5ch',
                        marginLeft: '5ch'
                    }}
                >Does this sound familiar</h1>
                <div className='cards'>
                    {Object.keys(cardData[0]).map((emoji, index) => (
                        <div className='card' key={index} style={{ backgroundColor: cardColors[index % cardColors.length] }}>
                            <span role='img' aria-label='emoji'>{emoji}</span>
                            <h2>{Object.keys(cardData[0][emoji])[0]}</h2>
                            <p>{cardData[0][emoji][Object.keys(cardData[0][emoji])[0]]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default beats