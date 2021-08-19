// import types from '../types/contact-types';
import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/Add', (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/Filter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;

/* vanilla redux previous logic */

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: { id: shortid.generate(), name, number },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.FILTER,
//   payload: value,
// });
