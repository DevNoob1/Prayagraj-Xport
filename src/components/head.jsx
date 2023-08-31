import React from 'react'
import './styles/head.css'

const head = () => {
    return (
        <div className='head'>
            <div style={{

            }}>
                <h6
                    style={{
                        fontSize: '2ch',
                        marginBottom: '2ch',
                        marginLeft: '5%'
                    }}
                >Ahead app</h6>
                <h1 style={{
                    fontSize: '5ch',
                    width: '60%',
                    marginLeft: '5%'
                }}>
                    Master you life by mastering emotions
                </h1>
                <div style={{
                    display: 'flex',
                    marginLeft: '5ch',
                    gap: '3ch'
                }}>
                    <img
                        style={{
                            height: '5ch'
                        }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/203px-Download_on_the_App_Store_Badge.svg.png?20170219160111" alt="" />
                    ⭐⭐⭐⭐⭐ <br /> 100+ AppStore Review
                </div>
            </div>
            <div>
                <img style={{
                    marginRight: '4ch'
                }}
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/295de253819877.594238db795ef.gif" alt="" />
            </div>
        </div >
    )
}

export default head
