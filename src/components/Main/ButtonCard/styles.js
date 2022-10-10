import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  width: 110px;
  height: 40px;
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  font-family: var(--font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  cursor: pointer;
  :hover {
    filter: contrast(1.5);
    transition: 0.9s;
  }
`;
