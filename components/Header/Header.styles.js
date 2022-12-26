import styled from "styled-components";

export const HeaderContainer = styled.header`
  .container {
    max-width: 144rem;
    margin: 0 auto;
    padding: 0 14px;
  }

  .heading {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 1rem;
    margin-top: var(--mb-m);

    &__primary {
      font-family: var(--ff-title);
      font-size: var(--fs-xxl);
      font-weight: 500;
      text-transform: uppercase;
      color: var(--black-light-2);
      letter-spacing: 1.8px;
    }

    &__secondary {
      font-size: var(--fs-s);
      color: var(--black);
    }
  }
`;
