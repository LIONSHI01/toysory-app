import styled from "styled-components";

export const CardContainer = styled.div`
  .PreviewCard {
    width: 25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover &__image::after {
      opacity: 0.2;
    }

    &:hover &__viewmore {
      transform: translate(-50%, -50%);
      opacity: 1;
    }

    &__image {
      position: relative;
      display: block;
      overflow: hidden;
      width: 100%;
      transition: all 0.2s;
      transition: all 0.3s;

      &::after {
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
    }

    &__viewmore {
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

    &__name {
      font-size: var(--default-fs);
      font-weight: 400;
      // margin-bottom: var(--mb-s);
    }

    &__shopping {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    &__icon_box {
      padding: 0.5rem;
      background-color: var(--black-light-3);
      border-radius: 50%;
    }

    &__icon {
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      color: var(--white);
    }

    &__price {
      font-size: var(--fs-x);
      font-weight: 700;
      color: var(--red-light);
    }
  }
`;
