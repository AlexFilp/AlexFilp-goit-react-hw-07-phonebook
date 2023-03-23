import { List } from './Contacts.styled';
import { CotnactsItem } from '../ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { getfilteredContacts } from 'redux/selectors';

export const Contacts = () => {
  const filteredContacts = useSelector(getfilteredContacts);
  return (
    <>
      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return <CotnactsItem key={id} id={id} name={name} number={number} />;
        })}
      </List>
    </>
  );
};
