import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './ContactList.module.css';
import { AiOutlineUserDelete } from 'react-icons/ai';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import {
  handleFilteredContacts,
  isLoading,
} from '../../redux/contacts/contacts-selectors';

export default function ContactList() {
  const contacts = useSelector(handleFilteredContacts);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const deleteContacts = id => dispatch(deleteContact(id));
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
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
      {loading && <ClipLoader size={50} />}
    </ul>
  );
}
