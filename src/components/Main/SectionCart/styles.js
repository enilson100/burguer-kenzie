import styled from "styled-components";

export const SectionCartStyles = styled.section`
  .container-wrap {
    width: 100%;
    min-width: 300px;
    background: #f5f5f5;
    border-radius: 0px 0px 5px 5px;
  }
  .header-cart {
    background: var(--color-primary);
    border-radius: 5px 5px 0px 0px;
    font-family: var(--font);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
  }
  .body-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 150px;
  }
  .text-body {
    font-family: var(--font);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: var(--gray-100);
    margin: 0px;
  }
  p {
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    margin: 0px;
  }
  .container-list {
    overflow-y: auto;
    width: 100%;
  }
  ul {
    margin: 0px 0px 0px 10px;
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    gap: 10px;
  }
  li {
    display: flex;
  }

  li img {
    width: 70px;
    height: 70px;
    background-color: var(--gray-20);
    border-radius: 5px;
  }
  .cart-info {
    display: flex;
    margin: 0px 10px;
    justify-content: space-between;
    width: 100%;
  }
  .name-cart {
    font-family: var(--font);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }
  .category-cart {
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  .button-remove {
    margin-top: 5px;
    font-family: var(--font);
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--gray-50);
    cursor: pointer;
    margin-right: 10px;
  }
  .button-remove:hover {
    transition: 1s;
    color: red;
  }
  .footer-cart {
    margin: 0px;
    padding: 0px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .total-cart {
    font-family: var(--font);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
  }
  .cart_info-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .button-footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    width: 100%;
    height: 60px;
    background: var(--gray-20);
    border: 2px solid var(--gray-20);
    border-radius: 8px;
    font-family: var(--font);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    color: var(--gray-50);
  }
  .button-footer:hover {
    transition: 1s;
    border: 2px solid var(--gray-50);
  }
  .span-cart {
    color: var(--gray-50);
  }
  @media (min-width: 640px) {
    width: 500px;
  }
`;
