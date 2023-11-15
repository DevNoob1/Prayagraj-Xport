import React from 'react'
import './styles/footer.css'

const footer = () => {


    return (
        <div>
            <div class="main">

                <h1>Join our Mailing List</h1>
                <h3
                    style={{
                        marginTop: '-3%',
                    }}
                >For receiving our news and updates in your inbox directly.</h3>
                <div
                    style={{
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2%',
                        width: '100%'
                    }}
                >
                    <input type="text" className='details' placeholder='Your Email address' />&nbsp;&nbsp;&nbsp; <button className='buts'>Sign Up</button>
                </div>
            </div>
            <div className="last">
                <div className='foot'>

                    <div
                        style={{
                            marginTop: '3%'
                        }}>
                        At Pryagrajxport, we craft digital dreams
                        into stunning realities. Our pixels tell
                        stories, our code unlocks possibilities, and
                        our creativity knows no bounds. Join us on
                        this journey of limitless design and
                        boundless development.
                    </div>
                    <div>
                        <p>
                            <h3>Links</h3> <br />
                            <p>Home</p> <br />
                            <p>Aboutus</p><br />
                            <p>Privacy Policy</p><br />
                            <p>Terms & Conditions</p><br />
                            <p>Refund Policy</p><br />
                            <p>Customer Support</p><br />
                            <p>Areas We Serve</p><br />
                        </p>
                    </div>
                    <div>
                        <p>
                            <h3>Contact us</h3> <br />
                            <p>www.prayagrajxport.com</p> <br />
                            <p>+916386821819</p> <br />
                            <p>sales@prayagrajxport.com</p>
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            width: '5%',
                            flexDirection: 'column'
                            // alignItems: 'center',
                            // justifyContent: "center",
                            // background: 'red'

                        }}
                    >
                        <p>
                            <h3>Services  </h3> <br /> <br />
                            <p>Web Development</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                        <div className="f_social_icon"
                            style={{
                                display: 'flex',
                                width: '200%',
                                alignItems: 'center',
                                justifyContent: "center",
                                gap: '5px'
                            }} >



                            <a href="https://facebook.com">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt=""
                                    style={{
                                        height: '30px',
                                        width: '30px',
                                    }} />
                            </a>
                            <a href="https://facebook.com">
                                <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt=""
                                    style={{
                                        height: '30px',
                                        width: '30px',
                                    }} />
                            </a>
                            <a href="https://facebook.com">
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174863.png" alt=""
                                    style={{
                                        height: '30px',
                                        width: '30px',
                                    }} />
                            </a>
                            <a href="https://facebook.com">
                                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt=""
                                    style={{
                                        height: '30px',
                                        width: '30px',
                                    }} />
                            </a>

                        </div>

                    </div>
                </div>
            </div>
            <div style={{
                height: '2px',
                background: "gray",
                marginTop: '25px',
            }} ></div>
            <p
                style={{
                    paddingTop: '25px',
                    textAlign: 'center',
                    paddingBottom: '25px',
                    color: 'gray'
                }}
            >© 2023 Copyright by pryagrajxport. All rights reserved.</p>
        </div>
    )
}

export default footer
