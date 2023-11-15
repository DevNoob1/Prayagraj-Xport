import React from 'react';
import './styles/work.css';

const Work = () => {
    return (
        <div className='work'>
            <h2 style={{ color: 'navy' }}>Get in touch with us</h2> <br />
            <h1>Let's Connect - Reach Out Today!</h1>
            <div className='deta'>
                <img src="https://i.pinimg.com/736x/a7/46/6b/a7466b4a9dc2ac9eb82950807cf83edd.jpg" style={{ height: '70vmin' }} alt="" />
                <form>
                    <label htmlFor="name"> Name</label> <br />
                    <input type="text" id="name" name="name" placeholder='Enter Your Name' /><br /><br />


                    <label htmlFor="email">Email</label>
                    <br />
                    <br />
                    <input type="email" id="email" name="email" placeholder='Enter Your Email' /><br /><br />

                    <label htmlFor="mobile">Mobile Number</label>
                    <br />
                    <br />
                    <input type="tel" id="mobile" name="mobile" placeholder='Enter Your Number' /><br /><br />
                    <label htmlFor="subject">Subject</label>
                    <br />
                    <br />
                    <input type="text" id="subject" name="subject" placeholder='Enter Your Subject' /><br /><br />

                    <label htmlFor="message">Your Message (optional)</label><br />
                    <br />
                    <br />
                    <textarea id="message" name="message" placeholder='Enter Your Message' rows="4" cols="50"></textarea><br /><br />

                    <button className='submit'>Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Work;
