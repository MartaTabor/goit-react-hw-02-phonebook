export const ContactForm = ({ userData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nameField">Name</label>
      <input
        id="nameField"
        type="text"
        name="name"
        value={userData.name}
        onChange={onChange}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
      <label htmlFor="phoneField">Number</label>
      <input
        id="phoneField"
        type="tel"
        name="number"
        value={userData.number}
        onChange={onChange}
        placeholder="Phone Number"
        pattern="\+?\d{1,4}?[ .\\-\\s]?\(?\d{1,3}?\)?[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,9}"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
