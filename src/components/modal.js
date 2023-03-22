import React from 'react'

function Modal ({currentPhoto, onClose}) {
    const {name, description, link, index} = currentPhoto
    return(
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='modalTitle'>{name}</h3>
                {/* photo */}
                <p className='modal-description'>
                    {description}
                </p>
                <a href={link} target='_blank' className='modal-a'>Link to Website</a>
                <button className='modal-button' onClick={onClose} type='button'>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal;