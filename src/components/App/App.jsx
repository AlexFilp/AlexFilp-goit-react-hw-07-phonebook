import { GlobalStyle } from '../GlobalStyle';
import {
  ContactsTitle,
  Container,
  FormTitle,
  LoaderContainer,
} from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from '../Form/Form';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { RotatingLines } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <Form />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {isLoading && !error && (
        <LoaderContainer>
          <RotatingLines height="45" width="45" strokeColor="grey" />
          <p>Loading</p>
        </LoaderContainer>
      )}
      <Contacts />
      <GlobalStyle />
      <ToastContainer autoClose={2000} limit={3} position="top-center" />
    </Container>
  );
};
