import styled from "styled-components";
import { device } from "./devices";

export const RegisterPageContainer = styled.main`
  .signup {
    height: 100vh;
    width: 100vw;
    display: flex;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${(props) => props.bgPhoto});
    background-size: cover;
    background-position: bottom;

    &__container {
      width: 40rem;
      margin: auto;
      display: grid;

      align-items: center;
    }

    &__top {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: var(--mb-m);
    }

    &__form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__heading {
      text-align: center;
      color: var(--white);
      font-size: var(--fs-xxxl);
      font-weight: 400;
      font-family: var(--ff-title);
      margin-bottom: var(--mb-m);
    }

    &__submit {
      font-size: var(--fs-x);
      width: 100%;
      padding: 2rem 0;
      border-radius: var(--br-m);
      border: none;
      background-color: rgba(255, 255, 255, 0.772);
      color: var(--black);
      font-weight: 700;
      text-transform: uppercase;
      transition: all 0.3s;
      cursor: pointer;
    }

    &__submit:hover {
      background-color: var(--white);
    }

    &__haveAccount:link,
    &__haveAccount:visited {
      align-self: flex-end;
      font-size: var(--default-fs);
      text-decoration: none;
      color: var(--white);
      margin-top: 1.5rem;
      transition: all 0.3s;
      font-weight: 500;
    }

    &__haveAccount:hover {
      color: var(--black);
    }

    &__other_heading {
      grid-column: 1 / span 2;
      font-size: var(--default-fs);
      color: var(--white);
      margin-bottom: var(--mb-m);
      text-align: center;
      font-family: var(--ff-title);
    }

    &__socials {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      gap: 2rem;
      // background-color: orangered;
    }

    &__social_login {
      font-size: var(--fs-x);
      width: 100%;
      padding: 2rem 0;
      border-radius: var(--br-m);
      border: none;
      background-color: rgba(255, 255, 255, 0.867);
      color: var(--black);
      font-weight: 700;
      text-transform: uppercase;
      transition: all 0.3s;
      cursor: pointer;
    }
    &__social_login:hover {
      background-color: #fff;
    }
  }
`;
