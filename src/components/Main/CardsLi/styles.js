import styled from "styled-components";

export const CardsStyles = styled.li`
  min-width: 250px;
  min-height: 300px;
  max-height: 350px;
  border: 2px solid var(--gray-20);
  border-radius: 5px;
  display: flex;

  flex-direction: column;
  box-sizing: border-box;

  :hover {
    border: 2px solid var(--gray-50);
    transition: 1s;
  }
  img {
    height: 150px;
  }
  h2 {
    font-family: var(--font);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--gray-100);
    margin: 0px;
  }
  h3 {
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--gray-50);
    margin: 0px;
  }
  h4 {
    font-family: var(--font);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-primary);
    margin: 0px;
  }
  .img-wrap {
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--gray-20);
  }
  .info-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
