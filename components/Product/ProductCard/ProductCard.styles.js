import styled from "styled-components";

export const CardContainer = styled.div`
  .ProductCard {
    width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    transition: all 0.3s;
  }

  .ProductCard__details_btn,
  .ProductCard__add_to_favorite {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    cursor: pointer;
    padding: 1rem 0;

    font-size: var(--fs-s);
    font-weight: 700;

    color: var(--white);

    transition: all 0.3s;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    z-index: 10;
  }

  .ProductCard__details_btn {
    background-color: var(--black-light-2);
  }

  .ProductCard__details_btn:hover {
    background-color: var(--black);
  }

  .ProductCard__add_to_favorite {
    background-color: var(--red-light-2);
  }

  .ProductCard__add_to_favorite:hover {
    background-color: var(--red);
  }

  .ProductCard__image {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    transition: all 0.2s;
    transition: all 0.3s;
  }

  .ProductCard__image::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(#fff, #fff);
    opacity: 0;
    transition: all 0.3s;
  }

  .ProductCard__viewmore {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    height: 55%;
    width: 55%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    font-size: var(--default-fs);
    font-weight: 700;
    color: var(--white);

    border: 2px solid var(--white);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.3s;
  }

  .ProductCard__name {
    text-transform: uppercase;
    font-size: var(--default-fs);
    font-weight: 500;
  }

  .ProductCard__shopping {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .ProductCard__icon_box {
    padding: 0.5rem;
    background-color: var(--black-light-3);
    border-radius: 50%;
  }

  .ProductCard__icon {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    color: var(--white);
  }

  .ProductCard__price {
    font-size: var(--fs-x);
    font-weight: 700;
    color: var(--red-light);
  }

  .ProductCard__buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .ProductCard__shopping_btns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
  }

  .ProductCard__buttonText {
    display: block;
  }

  .ProductCard__button_icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    color: var(--white);
  }

  .ProductCard__shopping_btns {
    opacity: 0;
    visibility: hidden;
  }

  .dropdownBox {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all 0.3s;

    transform: translateY(-5rem);
  }

  .dropdownBox__add_to_cart,
  .dropdownBox__buy_now {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    cursor: pointer;
    padding: 1rem 0;

    font-size: var(--fs-s);
    font-weight: 700;
    color: var(--white);

    transition: all 0.3s;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
  }

  .dropdownBox__shopping_btns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
  }

  .dropdownBox__buttonText {
    display: block;
  }

  .dropdownBox__button_icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    color: var(--white);
  }

  .dropdownBox__shopping_btns {
    opacity: 0;
    visibility: hidden;
    /* display: none; */
  }

  .dropdownBox__add_to_cart {
    background-color: var(--blue);
  }
  .dropdownBox__add_to_cart:hover {
    background-color: var(--blue-dark);
  }

  .dropdownBox__buy_now {
    background-color: var(--black-light-2);
  }
  .dropdownBox__buy_now:hover {
    background-color: var(--black);
  }

  .dropdownBox__dropdown {
    cursor: pointer;
    height: 2rem;

    background-color: var(--black-light-3);
    text-align: center;

    transition: all 0.3s;
    border-bottom-left-radius: var(--br-m);
    border-bottom-right-radius: var(--br-m);
  }

  .dropdownBox__dropdown:hover {
    background-color: var(--black);
  }

  .dropdownBox__dropdown_icon {
    color: var(--white);
    width: 3rem;
    height: 3rem;
    margin: -4px;
  }

  .dropdownBox.active {
    transform: translateY(0);
  }

  .dropdownBox.active .dropdownBox__shopping_btns {
    opacity: 1;
    visibility: visible;
  }
  .dropdownBox.active .dropdownBox__dropdown {
    background-color: var(--black-light-2);
  }
`;
