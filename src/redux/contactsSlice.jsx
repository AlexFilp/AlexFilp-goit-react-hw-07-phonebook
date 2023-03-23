import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = { contactsList: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactsList.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(5),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contactsList.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsList.splice(index, 1);

      // const contactToDelete = state.contactsList.find(
      //   contact => contact.id !== action.payload
      // );
      // state.contactsList.splice(contactToDelete, 1);

      // return state.contactsList.filter(
      //   contact => contact.id !== action.payload
      // );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsReducer = contactsSlice.reducer;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts.contactsList;
