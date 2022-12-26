import styled from "styled-components";
import { device } from "../../styles/devices";

export const AboutBoxContainer = styled.section`
  padding: 0 14px;
  .about {
    padding: 10rem 0;
    border-bottom: 5px solid var(--black-light-3);

    &__container {
      width: 100%;
      display: flex;
      gap: 10rem;

      @media ${device.tablet} {
        flex-direction: column;
      }
    }

    &__heading {
      display: flex;
      align-items: flex-end;
      gap: 1rem;
      line-height: 0;
      margin-bottom: var(--mb-m);
    }

    &__heading_primary {
      font-size: var(--fs-x);
      font-weight: 400;
    }

    &__heading_secondary {
      font-size: var(--fs-s);
      font-weight: 100;
    }

    &__paragraph {
      font-size: var(--default-fs);
      margin-bottom: var(--mb-s);
      color: var(--black-light-2);
      line-height: 1.7;
    }

    &__about_us {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      gap: 3.5rem;

      @media ${device.laptopL} {
        display: flex;
        flex-direction: column;
      }
    }

    &__content_box {
      display: flex;
      flex-direction: column;
    }

    &__image_box {
      position: relative;
      width: 30rem;
      height: 30rem;

      @media ${device.tablet} {
        width: 20rem;
        height: 20rem;
      }
    }

    &__btn_more {
      display: inline-block;

      align-self: flex-end;
      text-transform: uppercase;
      text-decoration: none;
      text-align: right;
      font-size: var(--fs-x);
      font-weight: 700;
      letter-spacing: 8px;
      transition: all 0.3s;

      &:link,
      &:visited {
        color: var(--black-light-3);
      }
      &:hover,
      &:active {
        color: var(--black);
      }
    }
  }
`;

export const SectionContainer = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 14px;
`;
