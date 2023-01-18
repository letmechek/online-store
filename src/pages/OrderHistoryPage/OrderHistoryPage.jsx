import './OrderHistoryPage.css';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Logo from '../../components/Logo/Logo';

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 18px;
  outline: none;
  &:focus {
    border-bottom: 2px solid #4caf50;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0% 30% 0% 30%;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
`;

export default function OrderHistoryPage({ user, setUser }) {
  return (
    <>
      <h1>Payment Information</h1>
      <Form>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Surname" />
        <Input type="text" placeholder="Card Number" />
        <Input type="text" placeholder="MM / YY" />
        <Input type="text" placeholder="CCV" />
        <Button>Submit</Button>
      </Form>
      <Logo />
    </>
  );
}
