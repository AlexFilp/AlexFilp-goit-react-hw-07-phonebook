import { Item, Text, Btn } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
// import { deleteLocalContact } from 'redux/contactsSlice';

export const ContactsItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // dispatch(deleteLocalContact(id));
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <Text>
        {name}: {phone}
      </Text>
      <Btn onClick={handleDelete}>Delete</Btn>
    </Item>
  );
};
