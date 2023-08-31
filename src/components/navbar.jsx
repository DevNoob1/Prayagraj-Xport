import React from 'react'
import './styles/navbar.css'
const navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <img
                    style={{
                        height: '10ch'
                    }}
                    src="https://img.icons8.com/?size=512&id=4r58BiCBN1hj&format=png" alt="" />
            </div>
            <div className='cat'>
                <h4>Emotions</h4>
                <h4>Manifesto</h4>
                <h4>Self-awareness test</h4>
                <h4>Work With Us</h4>
            </div>
            <button
                style={{
                    width: '15ch'
                }}
            >Download App</button>
        </div>
    )
}

export default navbar
