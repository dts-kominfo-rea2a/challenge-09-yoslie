// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({ data }) => {
    return (
        <div className='contact-list'>
            <div className='contact-image'>
                <img className='contact-img' src={data.photo} alt={data.name} />
            </div>
            <div className='contact-detail'>
                <div className='contact-name'>{ data.name || '' }</div>
                <div className='contact-phone'>{ data.phone || '' }</div>
                <div className='contact-email'>{ data.email || '' }</div>
            </div>
        </div>
    )
}

export default Contact;