import React from 'react'
import './styles/footer.css'
const footer = () => {
    return (
        <div>
            <div class="main">
                <div class="icon">
                    <img
                        style={{
                            height: '10ch'
                        }} src="https://img.icons8.com/?size=512&id=97RryIlP70vB&format=png" alt="" />
                    <h2>ahead</h2>
                </div>
                <div class="details">
                    <div><img src="https://img.icons8.com/?size=512&id=30568&format=png" alt="" />
                        Augustuien 26, 10011 Berlin
                    </div>
                    <div> <img
                        style={{
                            marginTop: '20px',
                        }}
                        src="https://img.icons8.com/?size=512&id=cHNRcWMI2bLJ&format=png"
                        alt="" /> hi@ahead-app.com </div>
                </div>
                <img class="apple"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
                    alt="" />
                <h5>All rights reserved</h5>
            </div>
        </div>
    )
}

export default footer
