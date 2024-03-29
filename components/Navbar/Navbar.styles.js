import styled, { css } from "styled-components";
import { device } from "../../styles/devices";

const stickyStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: var(--box-shadow-m);
  background-color: var(--white);
`;

export const NavbarContainer = styled.nav`
  padding: 2rem 0;

  ${(props) => props.sticky && stickyStyles}

  a {
    text-decoration: none;
  }
  .navbar {
    &__container {
      display: flex;
      align-items: center;
      padding: 0 2rem;
      height: 8rem;

      @media ${device.tablet_portrait} {
        justify-content: space-between;
        height: 5rem;
      }
    }

    &__logoBox {
      width: 6rem;
      cursor: pointer;

      @media ${device.tablet_portrait} {
        width: 4rem;
      }
    }

    &__logo {
      display: block;
    }

    &__links {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 2rem;
      font-size: var(--default-fs);
      margin-left: auto;
      margin-right: 2rem;

      @media ${device.tablet_portrait} {
        display: none;
      }
    }

    &__link {
      display: block;
    }

    &__authentication {
      display: flex;
      gap: 2rem;
    }

    &__link:link,
    &__link:visited,
    &__login:link,
    &__login:visited,
    &__register:link,
    &__register:visited,
    &__account:link,
    &__account:visited {
      color: var(--black);
      font-weight: 500;
      text-transform: uppercase;
    }
    &__link:hover,
    &__link:active,
    &__login:hover,
    &__login:active,
    &__register:hover,
    &__register:active,
    &__account:hover,
    &__account:active {
      color: var(--black-light-2);
    }

    &__cart {
      position: relative;
      cursor: pointer;
      display: flex;
    }
    &__cartQty {
      width: 25px;
      height: 25px;
      position: absolute;
      top: -50%;
      right: -60%;

      border-radius: 200px;
      background-color: var(--red);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: var(--fs-s);
      color: var(--white);

      @media ${device.mobileL} {
        width: 20px;
        height: 20px;
        top: -40%;
        right: -40%;
      }
    }

    &__icon {
      width: 2.5rem;
      height: 2.5rem;

      @media ${device.mobileL} {
        width: 3rem;
        height: 3rem;
      }
    }

    &__accountBox {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    &__account {
      text-transform: uppercase;
    }
    &__signout {
      padding: 1rem;
      cursor: pointer;
      font-weight: 500;
      text-transform: uppercase;
      border-bottom: 2px solid var(--red);
    }

    &__signout:hover {
      color: var(--black-light-2);
    }

    &__mobileNavBtn {
      cursor: pointer;
      display: none;

      @media ${device.tablet_portrait} {
        display: unset;
      }
    }
  }
`;
