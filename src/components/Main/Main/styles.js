import styled from "styled-components";

export const MainStyles = styled.main`
  display: flex;
  justify-content: center;
  margin: 0px auto;
  flex-wrap: wrap;
  width: 100vw;

  @media (min-width: 640px) {
    flex-wrap: nowrap;
    max-width: 1200px;
    width: 90%;
  }
`;
