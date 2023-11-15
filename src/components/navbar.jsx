import React, { useEffect, useState } from 'react';
import './styles/navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsActive(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`navbar ${isActive ? 'active' : ''}`}>
            <div className='navbar_content'>
                <div className='tags'>


                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Resources</a></li>

                </div>
                <div className='propose'>
                    <button class="glow-on-hover" type="button">Request a propsal</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
