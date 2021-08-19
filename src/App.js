// import { useState } from 'react';
import ContactForm from './components/ContactForm/Form.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
// import contactsList from './data/contacts.json';
// import useLocalStorage from './hooks/LocalStorage.jsx';
// import shortid from 'shortid';
import styles from './App.module.css';

export default function PhoneBookApp() {
  return (
    <div className={styles.phonebookWrapper}>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
