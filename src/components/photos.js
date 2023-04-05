import React, { useState } from 'react';
// import Modal from '../components/modal';
import adopt from '../assets/projectPhotos/Adoption.png';
import coders from '../assets/projectPhotos/codersCuisine.png';
import notes from '../assets/projectPhotos/noteTaker.png';
import car from '../assets/projectPhotos/cars.png'

const Photos = ({ category }) => {
    return (
        <section>
            
            <div>
                <div className='flex-row'>
                    <img className='project-image project-margin' src={adopt} />
                </div>
            </div>

            <button type='button' className='portfolio-link-button'>
                <a className='portfolio-link-text'
                href='https://dog-adoption.herokuapp.com/'
                target='_blank'
                onClick={'https://dog-adoption.herokuapp.com/'}>Deployed Website</a>
            </button>

            <div>
                <div className='flex-row'>
                    <img className='project-image project-margin' src={coders} />
                </div>
            </div>

            <button type='button' className='portfolio-link-button'>
                <a className='portfolio-link-text'
                href='https://vast-refuge-25222.herokuapp.com/login'
                target='_blank'
                onClick={'https://vast-refuge-25222.herokuapp.com/login'}>Deployed Website</a>
            </button>

            <div>
                <div className='flex-row'>
                    <img className='project-image project-margin' src={notes} />
                </div>
            </div>

            <button type='button' className='portfolio-link-button'>
                <a className='portfolio-link-text'
                href='https://big-kitty-module-11.herokuapp.com/'
                target='_blank'
                onClick={'https://big-kitty-module-11.herokuapp.com/'}>Deployed Website</a>
            </button>

            <div>
                <div className='flex-row'>
                    <img className='project-image project-margin' src={car} />
                </div>
            </div>

            <button type='button' className='portfolio-link-button'>
                <a className='portfolio-link-text'
                href='https://kill-all-tires.herokuapp.com/'
                target='_blank'
                onClick={'https://kill-all-tires.herokuapp.com/'}>Deployed Website</a>
            </button>

        </section>
    )
};

export default Photos