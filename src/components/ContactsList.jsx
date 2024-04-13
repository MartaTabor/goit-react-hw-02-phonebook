import PropTypes from 'prop-types';

const ContactsList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.name}:</p>
              <p>{contact.number}</p>
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
