import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {

    state = {
        contacts: [
            {
                id: 1,
                nom: 'Jack Dupont',
                email: 'jack.dupont@mail.com',
                tel: '01-02-03-04-05'
            },
            {
                id: 2,
                nom: 'Jean Fontaine',
                email: 'jean.fontaine@mail.com',
                tel: '01-22-33-44-55'
            },
            {
                id: 3,
                nom: 'Pierre Lamarre',
                email: 'pierre.lamarre@mail.com',
                tel: '01-23-45-56-78'
            }
        ]
    } 

    render() {
        return (
            <div>
                {this.state.contacts.map(contact =>(
                    <Contact 
                        key={contact.id}
                        nom={contact.nom}
                        email={contact.email}
                        tel={contact.tel}
                    />
                ))}
            </div>
        );
    }
}

export default Contacts;