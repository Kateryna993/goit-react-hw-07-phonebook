import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from '../actions/contacts';
import initialContactsState from '../../data/contacts.json';
// import types from '../types/contact-types';
// const initialContactsState = [];

const items = createReducer(initialContactsState, {
  [actions.addContact]: (state, { payload }) => {
    if (
      state.find(
        ({ name, number }) =>
          name === payload.name || number === number.payload,
      )
    ) {
      alert(`${payload.name} is already in contacts`);
      return [...state];
    }
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const initialFilterState = '';

const filter = createReducer(initialFilterState, {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });

/* vanilla redux logic */
// const items = (state = initialContactsState, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       if (
//         state.find(
//           ({ name, number }) =>
//             name === payload.name || number === number.payload,
//         )
//       ) {
//         alert(`${payload.name} is already in contacts`);
//         return [...state];
//       }
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = initialFilterState, { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
