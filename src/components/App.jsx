import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
    
const getInitialState = () => {
  const getContacts = localStorage.getItem("contacts");
  if (getContacts !== null) {
    return JSON.parse(getContacts)
  }
  return initialState
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialState);  
  const [filterContacts, setFilterContacts] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])
  
  const addContact = (name, number) => {
    const contactItem = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(contact => contactItem.name === contact.name)) {
      alert(`${contactItem.name} is already in contacts`)
    } else {
      setContacts(prevState => [contactItem, ...prevState])
    }
  };

  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact =>
      contact.id !== contactId))
  }

  const changeFilterContacts = (evt) => {
    setFilterContacts(evt.target.value)
  }
  
  const getFilterContacts = () => {
    const normalizedFilterContacts = filterContacts.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilterContacts)
    })
  }

  return (
    <div 
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18, color: '#010101'}}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter
          onChangeFilter={changeFilterContacts}
          value={filterContacts}
        />
        <ContactList
          contacts={getFilterContacts()}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  )
}
