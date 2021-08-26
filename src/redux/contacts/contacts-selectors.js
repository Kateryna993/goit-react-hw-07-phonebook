import { createSelector } from 'reselect';

export const isLoading = state => state.contacts.isLoading;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const handleFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
