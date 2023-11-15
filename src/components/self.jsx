import { useEffect, useRef, useState } from 'react';
import '../components/styles/self.css';

const Self = () => {
    const selfRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    const data = [
        {
            title: 'UX Driven Engineering',
            imageUrl: 'https://static-00.iconduck.com/assets.00/rocket-icon-2002x2048-eh72vqwb.png',
            color: 'red'
        },
        {
            title: 'Developing Shared Understanding',
            imageUrl: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png',
            color: 'darkblue'
        },
        {
            title: 'Proven Experience and Expertise',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/4349/4349132.png',
            color: 'indigo'
        },
        {
            title: 'Security & Intellectual Property (IP)',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/861/861377.png',
            color: 'skyblue'
        },
        {
            title: 'Code Reviews',
            imageUrl: 'https://cdn2.iconfinder.com/data/icons/web-and-apps-interface/32/OK-512.png',
            color: 'blue'
        },
        {
            title: 'Quality Assurance & Testing ',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/890/890132.png',
            color: 'purple'
        }

    ];

    const boxes = data.map((item, index) => (
        <div key={index} className='roach'>
            <div className='cardo'>
                <img src={item.imageUrl} alt='' />&nbsp;&nbsp;&nbsp;&nbsp;
                <p>
                    <h2>{item.title}</h2>
                    <br />

                    Unlike other companies, we are a <b style={{ color: item.color }}>UX First</b> development company. Projects are driven by designers and they make sure design and experiences translate to code.
                </p>
            </div>
        </div>
    ));

    useEffect(() => {
        const handleScroll = () => {
            const selfElement = selfRef.current;
            const selfPosition = selfElement.getBoundingClientRect();

            const startRange = window.innerHeight * 0.7;
            const endRange = window.innerHeight * 0.9;

            if (selfPosition.top < endRange) {
                setAnimate(true);
            } else {
                setAnimate(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`self ${animate ? 'animate' : ''}`} ref={selfRef}>
            <div style={{ width: '5%', height: '5px', background: 'red' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

            <p style={{ fontSize: '30px' }}>Our design and</p>
            <p style={{ fontSize: '30px', fontWeight: 'bolder' }}>development approach</p>

            <br />
            <div className='contents'>
                <div
                    className='oneside'>
                    {boxes[0]}
                    {boxes[1]}
                    {boxes[2]}
                </div>
                <div
                    className='noside'>
                    {boxes[3]}
                    {boxes[4]}
                    {boxes[5]}
                </div>
            </div>
        </div>
    );
};

export default Self;
