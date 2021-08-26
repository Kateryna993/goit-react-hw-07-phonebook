import axios from 'axios';

axios.defaults.baseURL = 'https://6128056886a213001729f838.mockapi.io/app/';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
