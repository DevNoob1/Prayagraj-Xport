import React from 'react';
import './styles/orange.css';

const Orange = () => {
    return (
        <div className='orange'>
            <div>
                <div style={{
                    marginTop: '10px'
                }}>
                    Built out of frustration <br />
                    <p style={{
                        fontSize: '4ch',
                        marginTop: '1ch',
                        fontWeight: 'bold',
                        marginBottom: '5px'
                    }}> Meet the ahead app</p>
                </div>
                <div>
                    <img className='hover-scale' src="https://cdna.artstation.com/p/assets/images/images/014/824/744/original/sydnie-ponic-ezgif-com-video-to-gif.gif?1545733856" alt="" />
                </div>
            </div>
            <div style={{
                marginTop: '25ch',

            }}>
                A personalized pocket coach that provides bite-
                sized, science-driven tools to boost emotional
                intelligence. <br /> <br />
                Think of it as a pocket cheerleader towards a
                better, more fulfilling.
            </div>
        </div>
    );
};

export default Orange;
