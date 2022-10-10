import styled from "styled-components";

export const Form = styled.form`
  border: 2px solid #ccc;
  display: flex;
  border-radius: 8px;
  padding: 4px;
  background-color: #ffffff;
`;

export const Input = styled.input`
  border: none;
  outline: 0;
  font-family: var(--font);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  max-width: 180px;
  ::-webkit-input-placeholder {
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: var(--gray-20);
  }
  @media (min-width: 640px) {
    min-width: 230px;
  }
`;

export const ButtonForm = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 30px;

  background: var(--color-primary);
  color: #ffffff;
  border: 2px solid var(--color-primary);
  border-radius: 8px;

  font-family: var(--font);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  :hover {
    filter: contrast(1.5);
  }
`;
