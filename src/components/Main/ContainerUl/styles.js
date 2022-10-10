import styled from "styled-components";

export const ContainerStyle = styled.ul`
  display: flex;
  overflow-x: auto;
  list-style: none;
  gap: 10px;
  margin: 16px 10px;
  width: 100%;
  padding: 0px;

  .info-wrap {
    padding: 0px 10px 10px;
  }
  @media (min-width: 640px) {
    overflow: hidden;
    flex-wrap: wrap;
  }
`;
