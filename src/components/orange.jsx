import React from 'react';
import './styles/orange.css';


const Orange = () => {
    const elements = [];
    const elementia = [];
    elements.push(
        <div className='js'>
            <div className='desc'>
                <h2>Build the right team to scale</h2> <br />
                <p>Finding the right talent is not easy. We help you find the talent
                    that suits your needs, follows your processes, and sticks with
                    you long term (not the case with freelancers) <br /><br />Our helps you cut costs and deliver within
                    budget.</p>
                <br />
                <p
                    style={{
                        color: 'red',
                        borderLeft: '3px Solid red',
                        paddingLeft: '20px'
                    }}
                >"Simform is quick to identify larger problem with the
                    Software so we decided to expand our scope to build
                    new modules"</p>
                <br />
                <div
                    style={{
                        display: 'flex',
                        borderRadius: '50%'
                    }}>
                    <img style={{
                        borderRadius: '50%',
                        height: '50px'
                    }} src='https://i.kym-cdn.com/photos/images/newsfeed/000/209/677/1322615842122.jpg' alt="" />&nbsp;&nbsp;&nbsp;&nbsp; <p>Jeewa markram <br />CEO</p>
                </div>
            </div>

            <div className='pic'>
                <img src='https://images.unsplash.com/photo-1622151834677-70f982c9adef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D' alt="" />

            </div>
        </div>
    );

    elementia.push(
        <div className='js'>
            <div className='pic'>
                <img src='https://images.unsplash.com/photo-1622151834677-70f982c9adef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D' alt="" />

            </div>
            <div className='desc'>
                <h2>Build the right team to scale</h2> <br />
                <p>Finding the right talent is not easy. We help you find the talent
                    that suits your needs, follows your processes, and sticks with
                    you long term (not the case with freelancers) <br /><br />Our helps you cut costs and deliver within
                    budget.</p>
                <br />
                <p
                    style={{
                        color: 'red',
                        borderLeft: '3px Solid red',
                        paddingLeft: '20px'
                    }}
                >"Simform is quick to identify larger problem with the
                    Software so we decided to expand our scope to build
                    new modules"</p>
                <br />
                <div
                    style={{
                        display: 'flex',
                        borderRadius: '50%'
                    }}>
                    <img style={{
                        borderRadius: '50%',
                        height: '50px'
                    }} src='https://i.kym-cdn.com/photos/images/newsfeed/000/209/677/1322615842122.jpg' alt="" />&nbsp;&nbsp;&nbsp;&nbsp; <p>Jeewa markram <br />CEO</p>
                </div>
            </div>


        </div>
    );

    return (
        <div className='orange'>
            <div className="contento">
                <div style={{ width: '5%', height: '5px', background: 'red', marginBottom: '-7%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> <br />
                <p style={{ fontSize: '25px', textAlign: 'center' }}>Way of building</p>
                <p style={{ fontSize: '25px', textAlign: 'center', fontWeight: 'bolder', marginTop: '-3%' }}>Great Software</p><br /><br />
                {elements}
                {elementia}
                {elements}
            </div>
        </div>
    );
};

export default Orange;


