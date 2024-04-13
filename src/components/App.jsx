import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { SearchBar } from './SearchBar';
import ContactsList from './ContactsList';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};

export const App = () => {
  const [userData, setUserData] = useState(INITIAL_STATE);

  const onChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();

    const { name, number, contacts } = userData;

    const isExist = contacts.some(contact => contact.name === name.trim());
    if (isExist) {
      alert(`${name} is alrady in contacts`);
      return;
    }

    setUserData({
      ...userData,
      contacts: [...contacts, { name, number, id: nanoid() }],
      name: '',
      number: '',
    });
  };

  const handleDelete = id => {
    setUserData({
      ...userData,
      contacts: userData.contacts.filter(contact => contact.id !== id),
    });
  };

  const handleFilterChange = event => {
    setUserData({ ...userData, filter: event.target.value });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        userData={userData}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <SearchBar filter={userData.filter} onFilterChange={handleFilterChange} />
      <h2>Contacts</h2>
      <ContactsList
        contacts={userData.contacts}
        filter={userData.filter}
        onDelete={handleDelete}
      />
    </div>
  );
};
