import React, { Component } from 'react';

function Contact({contact}) {
    return (
        <div className='card card-body mb-3'>
            <h4>{contact.nom}</h4>
            <ul className='list-group'>
                <li className='list-group-item'>
                    Email : {contact.email}
                </li>
                <li className='list-group-item'>
                    Téléphone : {contact.tel}
                </li>
            </ul>
        </div>
);
    }


export default Contact;