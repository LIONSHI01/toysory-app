import styled from "styled-components";
// import { device } from "../styles/devices";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  .inputForm__input {
    height: 6rem;
    width: 100%;
    border-radius: var(--br-m);

    font-size: var(--fs-x);
    border: none;
    background-color: #ffffff2f;
    padding: 1rem 2rem;
    font-family: inherit;
    color: var(--white);
    transition: all 0.3s;

    /* border-bottom: 2px solid var(--green); */
  }

  .inputForm__input:invalid {
    /* border-bottom: 2px solid var(--red); */
  }

  .inputForm__input:focus {
    outline: 1px solid var(--white);
  }

  .inputForm__input::placeholder {
    color: var(--white);
    font-size: var(--fs-xl);
    font-family: inherit;
  }
`;
