import { Container, Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterInput } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    const filterValue = evt.target.value;
    dispatch(filterInput(filterValue));
  };

  return (
    <Container>
      <label>
        <Label>Find contacts by name</Label>
        <Input type="text" onChange={handleFilterChange} />
      </label>
    </Container>
  );
};
