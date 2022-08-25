import * as contactActions from './actions';
import { createReducer } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  removeContact,
} from '../reduxStore/operations';

const initState = {
  items: [],
  filter: '',
};

// Reducer

export const rootReducer = createReducer(initState, {
  [getContacts.fulfilled]: (state, action) => {
    state.items = action.payload;
  },

  [addContact.fulfilled]: (state, action) => {
    state.items = action.payload;
  },

  [removeContact.fulfilled]: (state, action) => {
    state.items = action.payload;
  },

  [contactActions.filterValue]: (state, action) => {
    state.filter = action.payload;
  },
});
