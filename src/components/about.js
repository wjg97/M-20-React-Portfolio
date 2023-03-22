import React from 'react';
import profilePicture from '../assets/profile/Gateway.jpg';
import profilePicture2 from '../assets/profile/me-fishing.jpeg';
import profilePicture3 from '../assets/profile/Moms.jpeg';
import profilePicture4 from '../assets/profile/USAtSpot.JPG';

function About () {
    return(
        <section>
            <div>
                <img src={profilePicture} alt='my-profile-picture' style={{ maxWidth: '100%', height: '450px', margin: 'auto', display: 'block',
                boarderRadius: '10%', objectFit: 'cover' }} />

                <img src={profilePicture2} alt='my-profile-picture-2' style={{ maxWidth: '100%', height: '450px', margin: 'auto', padding: '20px', left: '45px', display: 'block',
                boarderRadius: '10%', objectFit: 'cover' }} />
            </div>
            <div className='about-me-p'>
                <p>My name is</p>
                <p><span className='name-highlight'>Wyatt James Gaulke</span></p>
                <p>I was born in Cheyenne Wyoming, I relocated to Denver Colorado in 2016. 
                    I started coding in 2022, and have been loving every minute of it.
                    I have also been racing since 2011, and working in bike shops since 2015.  
                    I am also a coach and have been working with athletes since 2020 which helped me realize I love working with athletes, and helping them get results.  
                    I love anything bike related, I love racing my bike and the experiences that come with it.  
                    I have been fortunate enough to race in Central, South America, and Europe. 
                    I have helped a teammate bleed his brake without proper tools in Guatemala. 
                    I actually found coding through a bike racing friend, who has helped guide me in the right direction. 
                    I am very much so in love with coding and the challenge that comes with it. 
                    So I am usually up for a challenge.</p>
            </div>
            <div>
                <img src={profilePicture3} alt='my-profile-picture-3' style={{ maxWidth: '100%', height: '450px', margin: 'auto', padding: '20px', left: '45px', display: 'block',
                boarderRadius: '10%', objectFit: 'cover' }} />

                <img src={profilePicture4} alt='my-profile-picture-4' style={{ maxWidth: '100%', height: '450px', margin: 'auto', padding: '20px', left: '45px', display: 'block',
                boarderRadius: '10%', objectFit: 'cover' }} />
            </div>
        </section>
    )
}

export default About;