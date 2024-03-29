import styled from "styled-components";
import { device } from "../styles/devices";

export const ProductDetailsPageContainer = styled.div`
  .container {
    max-width: 144rem;
    margin: 0 auto;
    padding: 0 14px;
  }

  .sidebar-container {
    display: flex;
    @media ${device.tablet_portrait} {
      display: none;
    }
  }

  .product {
    display: flex;
    gap: 4rem;
    margin: 5rem 0;

    &__main {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  .intro {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 2rem;

    &__content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-size: var(--fs-s);
      color: var(--black-light-2);
      font-weight: 500;
    }

    &__name {
      font-size: var(--fs-x);
      font-weight: 600;
      padding: 1rem 0;
      border-top: 2px solid var(--grey-light-1);
      border-bottom: 2px solid var(--grey-light-1);
      color: var(--black);
      text-transform: uppercase;
    }

    &__salePrice {
      span {
        font-size: var(--default-fs);
        color: var(--red);
        font-weight: 700;
      }
    }

    &__specifications {
      display: flex;
      align-items: center;
      gap: 1rem;

      select {
        width: 40%;
        border-radius: 2px;
        border: 1px solid var(--black-light-3);
        padding: 3px 5px;

        text-transform: uppercase;
        font-family: inherit;
        font-weight: 500;
        color: var(--black);

        &:focus {
          outline: none;
          border: 1px solid var(--black);
        }
      }
    }

    // Remove input field arrows
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &__amount {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    &__minus,
    &__plus {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 1px solid var(--black-light-3);
      border-radius: 3px;
      padding: 3px;
      color: var(--black);
    }

    &__amountIcon {
      display: block;
      color: var(--black);
      width: 1.5rem;
      height: 1.5rem;
    }

    &__number {
      width: 3rem;
      height: 100%;
      border-radius: 3px;
      border: none;
      text-align: center;
      font-family: inherit;
      color: var(--black);
      border-bottom: 1px solid var(--black-light-3);
      border-top: 1px solid var(--black-light-3);
    }

    &__number:invalid {
      outline: 1px solid var(--red);
      border: 1px solid var(--red);
    }

    &__buttons {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      gap: 1rem;

      /* @media ${device.laptop} {
        display: flex;
        flex-direction: column;
      } */

      /* button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        cursor: pointer;
        padding: 1rem 0;

        font-size: var(--fs-s);
        font-weight: 500;
        color: var(--white);

        transition: all 0.3s;
        border: none;
        border-radius: 5px;
        text-transform: uppercase;
      } */
    }

    &__buttonText {
      display: block;
    }

    &__button_icon {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      color: var(--white);
    }

    &__add_to_cart,
    &__buy_now {
      background-color: var(--black-light-3);

      &:hover {
        background-color: var(--black);
      }
    }

    &__add_to_favorite {
      background-color: var(--red-light);
      &:hover {
        background-color: var(--red);
      }
    }
  }

  .details {
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--black-light-3);
    border-bottom: 1px solid var(--black-light-3);

    &__heading {
      align-self: center;
      background-color: var(--white);
      padding: 0 3rem;
      margin-bottom: var(--mb-m);

      text-transform: uppercase;
      font-size: var(--fs-s);
      font-weight: 500;
      color: var(--black-light-2);
      transform: translateY(-50%);
    }

    &__desc {
      width: 50%;
      margin-bottom: var(--mb-m);
      font-size: var(--default-fs);
      color: var(--black-light-2);
      line-height: 1.7;

      span {
        font-weight: 700;
      }
    }

    &__imageGroup {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: var(--mb-x);
    }

    &__imageBox {
      width: 100%;
    }
  }
`;
