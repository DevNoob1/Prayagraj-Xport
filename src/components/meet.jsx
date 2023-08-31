import React from 'react'
import './styles/meet.css'
const meet = () => {
    return (
        <div className='meet'>
            <div className='meet_details'>
                <h3 style={{
                    marginBottom: '-1ch'
                }} >We take privacy seriously</h3>
                <h1
                    style={{
                        marginBottom: '1px'
                    }} >before you get started</h1>

                <h3 style={{
                    marginBottom: '-1ch'
                }} >"We won't share your answers with anyone (and won't ever tell </h3>
                <h3
                    style={{
                        marginBottom: '1ch'
                    }} >you which friends said what about you)"</h3>
                <h2
                >with love,

                </h2>
                <button>Start a test</button>
                <h4>Take only 5 minutes</h4>
                <img src="https://icons8.com/icon/l6uAzIEMd34H/signature" alt="" />
            </div>
        </div>
    )
}

export default meet
