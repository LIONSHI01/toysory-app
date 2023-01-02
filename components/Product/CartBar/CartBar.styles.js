import styled, { css } from "styled-components";

const openStyles = css`
  transform: translateX(0%);
  visibility: visible;
  opacity: 1;
`;

export const CartBarContainer = styled.div`
  .cartbar {
    width: 50rem;
    max-width: 80%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    align-items: flex-start;
    z-index: 10000;
    background-color: var(--white);
    padding: 4rem 2rem;

    overflow-y: auto;
    transform: translateX(100%);
    transition: all 0.3s cubic-bezier(0.81, -0.12, 0.35, 1.05);

    box-shadow: var(--box-shadow-m);
    visibility: none;
    opacity: 0;

    ${(props) => props.isOpen && openStyles}

    .cartbar__goback-box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
      font-size: var(--fs-x);
      transition: all 0.3s;
      text-transform: uppercase;
      margin-left: 2rem;
      margin-bottom: var(--mb-m);
      cursor: pointer;
    }

    .cartbar__goback-box:hover {
      transform: translateX(-10px);
    }

    .cartbar__back-icon {
      width: 2.5rem;
      height: 2.5rem;
      color: var(--blue-dark);
    }

    .cartItemList {
      position: relative;
    }

    .cartItem__summary {
      text-align: right;
    }

    .cartbar__itemQty {
      color: var(--red-dark);
      font-weight: 500;
    }
    .cartbar__total {
      font-size: var(--fs-x);
      font-weight: 600;
      color: var(--black-light-2);
      margin-right: 2rem;
    }

    .cartbar__checkout-btn:link,
    .cartbar__checkout-btn:visited {
      justify-self: center;
      padding: 1.2rem 4.8rem;

      border-radius: var(--br-m);
      background-color: var(--blue);
      text-decoration: none;

      color: var(--white);
      font-size: var(--default-fs);
      text-align: center;
      text-transform: uppercase;
      margin: 5rem 0 3rem 0;

      transition: all 0.3s;
    }

    .cartbar__checkout-btn:hover {
      background-color: var(--blue-dark);
    }

    .cartItem__emptyBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
      gap: 4rem;
    }

    .cartItem__emptyBox-icon {
      width: 10rem;
      height: 10rem;
      color: var(--red);
    }
    .cartItem__emptyBox-text {
      font-size: var(--fs-xl);
      text-transform: uppercase;
    }
  }
`;
