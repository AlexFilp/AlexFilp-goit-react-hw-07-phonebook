import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const Btn = styled.button`
  padding: 7px;
  font-size: 20px;
  transition: color 150ms ease-in, background-color 150ms ease-in;
  background-color: #d3d3d373;
  &:hover,
  &:focus {
    color: white;
    background-color: #010101;
  }
`;
