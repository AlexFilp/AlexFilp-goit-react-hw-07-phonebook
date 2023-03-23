import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  contactsList: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactsList.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contactsList.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsList.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

// export const { addContact, deleteContact } = contactsSlice.actions;

// reducers: {
//   addContact: {
//     reducer(state, { payload }) {
//       state.contactsList.push(payload);
//       // Мутирование
//       // return {
//       //   ...state,
//       //   contactsList: [...state.contactsList, payload],
//       // };
//     },
//     prepare(name, number) {
//       return {
//         payload: {
//           name,
//           number,
//           id: nanoid(5),
//         },
//       };
//     },
//   },
//   deleteContact(state, action) {
//     const index = state.contactsList.findIndex(
//       contact => contact.id === action.payload
//     );
//     state.contactsList.splice(index, 1);
//   },
// },
