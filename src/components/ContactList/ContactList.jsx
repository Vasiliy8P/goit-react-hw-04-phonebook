import PropTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className="Contacts__list">
            {contacts.map(({ id, name, number }) => {
                    return (
                        <li key={id} className="Contacts__item">{name}: {number}
                            <button
                                type="button"
                                className="Contacts__btn"
                                onClick={() => (onDeleteContact(id))}
                            >
                                Delete
                            </button>
                        </li>
                    )
                }) 
            }
        </ul>        
    )
}

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
}

export default ContactList;