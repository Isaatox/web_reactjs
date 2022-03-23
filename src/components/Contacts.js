import React, { Component } from 'react';

class Contacts extends Component {

    state = {
        nom: '',
        email: '',
        tel: '',
        items: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        // console.log(this.state.nom);
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            nom: '',
            email: '',
            tel: '',
            items: [...this.state.items, { nom: this.state.nom, email: this.state.email, tel: this.state.tel }]
        });
    }

    renderContact = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className='card card-body mb-3' key={index}>
                    <h4>{item.nom}</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            Email : {item.email}
                        </li>
                        <li className='list-group-item'>
                            Téléphone : {item.tel}
                        </li>
                    </ul>
                </div>
            )
        })
    }

    render() {
        return (
            <div class="row gx-5">
                <div class="col">
                    <div class="p-3 border bg-light">
                        {this.renderContact()}
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 border bg-light">
                        <form onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label htmlFor='nom'>Nom et prénom</label>
                                <input type='text' className='form-control' name='nom'
                                    onChange={this.onChange} value={this.state.nom} required></input>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>email</label>
                                <input type='text' className='form-control' name='email'
                                    onChange={this.onChange} value={this.state.email} required></input>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='tel'>Téléphone</label>
                                <input type='text' className='form-control' name='tel'
                                    onChange={this.onChange} value={this.state.tel} required></input>
                            </div>

                            <button className='btn btn-primary btn-block'>Ajouter Contact</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;