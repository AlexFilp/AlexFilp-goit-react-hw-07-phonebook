import { Item, Text, Btn } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const CotnactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Btn onClick={handleDelete}>Delete</Btn>
    </Item>
  );
};
