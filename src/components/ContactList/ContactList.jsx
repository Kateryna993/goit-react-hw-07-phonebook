import React from 'react';
import { /* connect, */ useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import actions from '../../redux/actions/contacts';
import { AiOutlineUserDelete } from 'react-icons/ai';

const handleFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export default function ContactList() {
  const contactsList = useSelector(({ contacts: { items, filter } }) =>
    handleFilteredContacts(items, filter),
  );

  const dispatch = useDispatch();
  const deleteContacts = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={styles.contactList}>
      {contactsList.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          <p className={styles.contactName}>
            {name}: &nbsp;{number}
          </p>
          <button
            className={styles.deleteBtn}
            type="button"
            onClick={() => deleteContacts(id)}
          >
            <AiOutlineUserDelete className={styles.deleteIcon} />
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//   ),
//   deleteContacts: PropTypes.func,
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contactsList: handleFilteredContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   deleteContacts: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
