import { useEffect } from 'react'
import './styles/beats.css'



const Beats = () => {
    useEffect(() => {
        const gridContainer = document.querySelector('.grid-container');

        const handleScroll = () => {
            const threshold = window.innerHeight / 1.5;

            const gridContainerTop = gridContainer.getBoundingClientRect().top;

            if (gridContainerTop < threshold) {
                gridContainer.classList.add('slide-in');
            } else {
                gridContainer.classList.remove('slide-in');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='beats'>
            <div className="first">
                <p
                    style={{
                        fontSize: '70px',
                        fontWeight: 'bolder'
                    }}
                >Web Design & Development</p>
                <br />
                <br />
                <p
                    style={{
                        fontSize: '25px',
                        // fontWeight: 'bolder'
                    }}>Client-focused, customer-centric, creating website solutions that deliver tangible business
                    results, Appnovation's web developers helps brands the ever-changing digital landscape.</p>
                <br />
                <br />
                <br />
                <button
                    className='buton'
                >Let’s Get Started</button>
                <br />
                <br />
                <br />
                <br />
                <div className='ideas'>
                    <h4>Latest Insights</h4>
                    <h3>Our thoughts and perspectives on digital.</h3>
                    <div class="grid-container">
                        <div class="box">
                            <img src="https://muffingroup.com/blog/wp-content/uploads/2021/03/Spendesk.jpg" alt="" />
                        </div>
                        <div class="box"><img src="https://muffingroup.com/blog/wp-content/uploads/2021/03/Spendesk.jpg" alt="" /></div>
                        <div class="box"><img src="https://muffingroup.com/blog/wp-content/uploads/2021/03/Spendesk.jpg" alt="" /></div>
                        <div class="box"><img src="https://muffingroup.com/blog/wp-content/uploads/2021/03/Spendesk.jpg" alt="" /></div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p
                    style={{
                        paddingTop: '6%',
                        paddingBottom: '6%',
                        background: 'rgba(233, 232, 232, 0.293)'
                    }}
                    class="corner-border">&nbsp; &nbsp; “The experience working with Prayagrajxport has been fantastic. We always want to ensure we
                    get plenty of value from any vendor that we work with, and in that regard Prayagrajxport
                    really excels. With our latest project, we received top-quality work, enjoyed working with a
                    really responsive team, and when we threw curve balls or suggested unique functionality,
                    they quickly went to work to make it a reality. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quod, similique officiis est veniam fugiat aperiam aliquam et nobis debitis dolores facere? Deleniti, voluptatem exercitationem error officiis dolorum doloribus laborum?”
                    <br />
                    <br />
                    <br />
                    <h2 style={{
                        textAlign: 'center'
                    }}>Simbavoyages</h2>
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className='clich'>
                    Prayagrajxport specializes in website design and development services.
                    Our web experiences are high-performing, feature-packed and digitally
                    transformative, designed to be user-friendly, fully functional, very secure
                    and able to scale as your enterprise grows.
                </p>
                <br />
                <br />
                <br />
                <br />
                <p
                    style={{
                        fontSize: '25px',
                        paddingLeft: '20px',
                    }}
                >Our website developers provide expert web application development and web design
                    services to our clients. Pryagrajxport offers a variety of website design and development
                    services, from creating mobile web development solutions and responsive website designs, to
                    building custom e-commerce and intranet experiences using the latest and proven web
                    technologies. With up to 85% of consumers visiting company s or service provider s website
                    before making a purchase, more and more consumers make decisions based on their online
                    experience: the appearance, usability and accessibility of your website is more important
                    than ever, especially in an increasingly competitive market.</p>

            </div>
        </div>
    )
}

export default Beats