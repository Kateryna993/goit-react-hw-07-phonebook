import { useState } from 'react';
// import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { BsPersonPlusFill } from 'react-icons/bs';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { addContact } from '../../redux/contacts/contacts-operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const nameInputId = shortid.generate();
  const phoneInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name === name || contact.number === number,
      )
    ) {
      alert(`This contact was already added!`);
    } else {
      dispatch(addContact({ name, number }));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.ContactForm}>
      <label className={styles.formLabel} htmlFor={nameInputId}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        className={styles.formInput}
        value={name}
        onChange={handleChange}
        id={nameInputId}
      />
      <label className={styles.formLabel} htmlFor={phoneInputId}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        className={styles.formInput}
        value={number}
        onChange={handleChange}
        id={phoneInputId}
      />
      <button className={styles.addContactBtn} type="submit">
        <BsPersonPlusFill className={styles.addUserIcon} />
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(ContactForm);
