import { List } from './Contacts.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { selectfilteredContacts } from 'redux/selectors';

export const Contacts = () => {
  const filteredContacts = useSelector(selectfilteredContacts);
  return (
    <>
      <List>
        {filteredContacts.map(({ id, name, phone }) => {
          return <ContactsItem key={id} id={id} name={name} phone={phone} />;
        })}
      </List>
    </>
  );
};
