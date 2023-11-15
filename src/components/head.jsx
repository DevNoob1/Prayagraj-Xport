import React from 'react'
import Navbar from './navbar'
import './styles/head.css'
import Co from './assets/1.png'
import Cop from './assets/2.png'

const head = () => {
    return (
        <>
            <Navbar />
            <div className='circle'></div>
            <div className='head'>
                <div className='head1'>

                    <div className='des1'>
                        <p style={{ fontSize: '5vmin' }}>Great <b style={{ color: '' }}>Product</b> is </p><br />
                        <p style={{ fontSize: '5vmin', fontWeight: "bolder" }}> built by great <b style={{ color: '' }}>teams</b></p>
                        <br /><br /><br /><br /><br />
                        <p style={{ fontSize: '2vmin', marginLeft: '10vmin', fontFamily: 'sans-serif' }}> You Imagine. <b style={{ color: 'purple', background: 'yellow' }}>We Create</b></p>
                    </div>
                    <div className='sets' style={{ display: 'flex' }}>

                        <img src={Cop} alt="" style={{ height: '400px', marginTop: '-9%', marginLeft: '10%', marginRight: '-7%' }} />
                        <img src={Co} alt="" style={{ height: '300px', marginTop: '-10%', marginLeft: '-5%' }} />
                    </div>
                </div>
                <div className='head2'>
                    <br />
                    <br />
                    <p>
                        <h2
                            style={{ fontSize: '5vmin' }}><b>Web Design</b></h2> <br /> <br />
                        <p>Our agency web design studio creates marketing websites and landing pages that help to <br />
                            tell brand stories, increase conversion and build trust.</p>
                    </p>
                    <br />
                    <br />
                    <br />
                    <span> <button>Request a propsal</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Contact Us > </span>

                </div>

            </div>
        </>
    )
}

export default head
