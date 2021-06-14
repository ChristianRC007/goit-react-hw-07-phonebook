import { v4 as uuid } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));

const deleteContact = createAction('contact/delete');
const changeFilter = createAction('contact/changeFilter');

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
