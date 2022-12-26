import styled from "styled-components";
import { device } from "../../styles/devices";

export const ListContainer = styled.section`
  .popularProducts {
    margin: 5rem 0;

    &__container {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 2rem;
    }

    &__list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, max-content));
      justify-content: space-between;
      margin-bottom: var(--mb-m);
      gap: 2rem;

      @media only screen and (max-width: 560px) {
        display: flex;
        flex-direction: column;

        align-items: center;
      }
    }

    &__heading_box {
      text-align: center;
      margin-bottom: var(--mb-m);
    }

    &__heading {
      font-family: var(--ff-title);
      letter-spacing: 1.8px;
      font-size: var(--fs-xl);
      font-weight: 400;
      color: var(--black-light-2);
      margin-bottom: var(--mb-ss);
      text-transform: uppercase;
    }

    &__text {
      font-size: var(--fs-s);
    }
  }
`;
export const Container = styled.section`
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 14px;
`;
