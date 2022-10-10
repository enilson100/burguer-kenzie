import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--gray-0);

  .header-wrap {
    padding: 15px 0px;
    display: flex;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 87%;
    gap: 5px;
  }
  figure {
    margin: 0;
    margin-bottom: 5px;
  }
  @media (min-width: 600px) {
    .header-wrap {
      justify-content: space-between;
    }
  }
`;
