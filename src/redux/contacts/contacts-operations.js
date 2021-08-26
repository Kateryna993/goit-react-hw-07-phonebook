import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const contact = await contactsAPI.addContact(newContact);
    return contact;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await contactsAPI.deleteContact(contactId);
    return contactId;
  },
);
