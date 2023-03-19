import { Component } from "react";
import PropTypes from 'prop-types';
import './ContactForm.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleSubmitForm = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    handleChange = (evt) => {
        this.setState(prevState => ({
            [evt.target.name]: evt.target.value
        }))
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        const { name, number } = this.state;
        return (
            <form className="ContactForm" onSubmit={this.handleSubmitForm}>
                <label>
                    Name
                    <br />
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Number
                    <br />
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit" className="ContactForm__btn">Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;