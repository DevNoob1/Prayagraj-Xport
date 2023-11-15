import React from 'react';
import './styles/open.css';


const Open = () => {


    const boba = [
        {
            title: 'Assemble the right team',
            color: 'red',
            description: 'We handle all aspects of vetting and choosing the right team that you don t have the time, expertise, or desire to do.'
        },
        {
            title: 'Tech architecture',
            color: 'darkblue',
            description: 'We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently'
        },
        {
            title: 'Code reviews',
            color: 'indigo',
            description: 'Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells'
        },
        {
            title: 'Sprint planning',
            color: 'skyblue',
            description: 'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.'
        },
        {
            title: 'Standups & weekly demos',
            color: 'blue',
            description: 'Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.'
        },
        {
            title: 'Iterative delivery ',
            color: 'purple',
            description: 'We divide the implementation process into several checkpoints rather than a single deadline.'
        }

    ];

    const card = boba.map((item, index) => (
        <div key={index} className='roach'>
            <div
                style={{
                    display: 'flex',
                    width: '35vh',
                    height: '20vh',
                    boxShadow: '0px 0px 3px black',
                    paddingTop: '5%'

                }}
            >
                <img src={item.imageUrl} alt='' />&nbsp;&nbsp;&nbsp;&nbsp;
                <p>

                    <h3><b style={{ color: item.color }}>#{index + 1}</b> {item.title}</h3> <br />

                    <p style={{
                        color: 'gray',
                    }}>

                        {item.description}
                    </p>
                </p>
            </div>
        </div>
    ));
    return (
        <div className='open'>
            <div style={{ width: '5%', height: '5px', background: 'red' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> <br />
            <h2
                style={{
                    fontWeight: 'lighter'
                }}
            >How development</h2> <br />
            <h2 style={{ fontWeight: 'bolder' }}>  through Pryagrajxport works</h2>
            <div className='contants'>
                <div className='prime'
                    style={{
                        marginLeft: '-13%'
                    }}>
                    {card[0]}
                    {card[1]}
                    {card[2]}
                </div>
                <br />
                <br />
                <div
                    style={{
                        width: '135%',
                        marginLeft: '-20%',
                        background: 'red',
                        height: '2px',
                        textAlign: 'end'
                    }}
                >
                    <p
                        style={{
                            marginTop: '-2%',
                            marginRight: '-3%',
                            fontSize: '30px'
                        }}
                    >🏆
                    </p>
                </div>
                <br />
                <br />
                <div className='sec'
                    style={{
                        marginRight: '-13%'
                    }}>
                    {card[3]}
                    {card[4]}
                    {card[5]}
                </div>
            </div>

        </div >
    );
};

export default Open;
