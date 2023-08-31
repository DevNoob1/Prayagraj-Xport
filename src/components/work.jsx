import React from 'react'
import './styles/work.css'

const work = () => {
    return (
        <div className='work'>
            <div style={
                {
                    width: '50%',
                }
            }>
                <h1>Work with us</h1>
                <div className='left'>
                    <p
                        style={{
                            paddingLeft: '6%',
                        }}>
                        <img
                            style={{
                                height: '4ch'
                            }} src="https://img.icons8.com/?size=512&id=F03g2FKWtAd6&format=png" alt="" />
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deleniti delectus dolorem, obcaecati architecto praesentium ducimus quasi nihil eligendi possimus.</p>
                    </p>
                    <p
                        style={{
                            height: '18ch',
                            paddingLeft: '6%',
                            paddingTop: '1%',
                            borderRadius: '3ch',
                            background: 'antiquewhite'
                        }}
                    >
                        <h2>Product</h2>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quasi reiciendis laborum est voluptates sed repellat sapiente quod explicabo dolore!
                    </p>

                </div>
            </div>
            <div>
                <h1
                    style={{
                        fontSize: '5ch',
                        color: 'blue',
                        marginLeft: '3ch'
                    }}
                >ahead</h1>
                <div className='aheadscroll'
                    style={{
                        maxHeight: '45ch', // Adjust the maximum height as needed
                        overflowY: 'auto',
                        marginTop: '-2ch',
                        scrollbarWidth: '0px',
                    }}
                >
                    {/* Scrollable content */}
                    {Array.from({ length: 4 }, (_, index) => (
                        <div key={index}>
                            <p
                                style={{
                                    marginRight: '5ch',
                                    height: "15ch",
                                    width: '25ch',
                                    borderRadius: '3ch',
                                    paddingTop: '5%',
                                    paddingLeft: '5%',
                                    background: 'white'
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab ducimus numquam eius nulla fugiat accusantium, ullam minima maiores officiis?</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default work
