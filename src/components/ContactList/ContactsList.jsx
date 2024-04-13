import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filteredContacts.map(contact => (
            <li className={css.item} key={contact.id}>
              <p className={css.name}>{contact.name}: </p>
              <p>{contact.number}</p>
              <button
                className={css.button}
                onClick={() => onDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.text}>No contacts</p>
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
