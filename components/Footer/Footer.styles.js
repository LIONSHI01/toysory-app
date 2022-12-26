import styled from "styled-components";
import { device } from "../../styles/devices";

export const FooterContainer = styled.div`
  background-color: var(--black-light-3);
  display: flex;
  color: var(--black);
  border-top: 1px solid ${({ theme }) => theme.border};
`;

export const MasterFramworkWrapper = styled.div`
  width: 144rem;
  padding: 0 14px;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 4rem;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;

export const LogoColWrapper = styled.div`
  position: relative;
  width: 11rem;
  height: 15rem;
`;

export const BusinessColWrapper = styled.div`
  .about_col_heading {
    font-size: var(--default-fs);
    font-weight: 500;
    margin-bottom: var(--mb-m);
  }
  .about_col_links {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;
    text-transform: capitalize;
  }

  .about_col_link {
    &:link,
    &:visited {
      font-size: var(--default-fs);
      transition: all 0.3s;
      text-decoration: none;
      color: var(--black);
    }

    &:hover {
      text-decoration: underline;
      text-decoration: none;
      color: var(--red);
    }
  }
`;
export const SocialsColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  a {
    display: block;
  }

  svg {
    height: 3rem;
    width: 3rem;
    color: var(--black);
    transition: all 0.3s;
    :hover {
      color: var(--red);
    }
  }

  .socials_heading {
    font-size: var(--fs-x);
    text-transform: capitalize;
  }

  .socials_col_icon_box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 100px;
    transition: all 0.3s ease-in-out;

    :hover {
      background-color: var(--primary);
    }
  }

  .socials_col_links {
    display: flex;
    gap: 1rem;
  }

  .socials_col_link {
    & > * {
      :hover {
        color: var(--white);
      }
    }
  }
`;

export const EmailBarContainer = styled.div`
  border-radius: var(--br-m);
  transition: all 0.3s ease-in-out;

  form {
    display: flex;
    background-color: var(--white);
    padding: 0.2rem;
    border-radius: var(--br-m);
    height: 4rem;
  }

  :has(input:focus) {
    box-shadow: 0 0 0 0.3rem #ffc0d0;
  }

  input {
    height: 100%;
    width: 100%;
    border: none;
    font-size: var(--fs-s);
    color: var(--black-light-2);
    padding: 0 1rem;

    ::placeholder {
      font-family: inherit;
      font-size: var(--fs-s);
      color: var(--black-light-3);
    }
    :focus {
      outline: none;
    }
  }

  .btn_container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--br-m);
    height: 100%;
    width: 3.8rem;
    background-color: var(--black);
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    :active {
      scale: 0.85;
    }
    :hover {
      background-color: var(--red);
    }
  }
  .icon {
    color: var(--white);

    :hover {
      color: var(--white);
    }
  }
`;
