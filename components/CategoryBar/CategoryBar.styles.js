import styled from "styled-components";

export const CategoryBarContainer = styled.div`
  .category {
    align-self: flex-start;

    &__title {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-size: var(--default-fs);
      font-weight: 500;
      margin-bottom: var(--mb-x);
    }

    &__icon_box {
      background-color: var(--black-light-2);
      border-radius: 50%;
      padding: 0.5rem;
    }

    &__icon {
      display: block;
      color: var(--white);
      width: 2rem;
      height: 2rem;
    }

    &__name {
      text-transform: uppercase;
    }
  }
`;
