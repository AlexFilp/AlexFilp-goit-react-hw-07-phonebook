import { GlobalStyle } from '../GlobalStyle';
import { Form } from '../Form/Form';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactsTitle, Container, FormTitle } from './App.styled';

export const App = () => {
  // const filter = useSelector(getFilter);
  // const allContacts = useSelector(getContacts);

  // console.log(allContacts);
  // console.log(filter);

  // const getFilteredContacts = () => {
  //   const normilezedFilter = filter.toLowerCase();
  //   return allContacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normilezedFilter)
  //   );
  // };

  // const visibleContacts = getFilteredContacts();

  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <Form />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <Contacts />
      <GlobalStyle />
      <ToastContainer autoClose={2000} limit={3} position="top-center" />
    </Container>
  );
};
