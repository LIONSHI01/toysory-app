import styled, { css } from "styled-components";
import { device } from "../../styles/devices";

const smallSizeStyles = css`
  height: 30vh;

  @media ${device.tablet_portrait} {
    height: 20vh;
  }
  @media ${device.mobileL} {
    height: 15vh;
  }
`;
const largeSizeStyles = css`
  height: 50vh;

  @media ${device.tablet_portrait} {
    height: 20vh;
  }
  @media ${device.mobileL} {
    height: 15vh;
  }
`;

export const HeroContainer = styled.section`
  .hero {
    position: relative;

    &::after {
      content: "";
      height: 80%;
      width: 100%;
      position: absolute;
      top: 10%;
      bottom: 10%;
      left: 0;
      right: 0;
      background-image: linear-gradient(
        to right bottom,
        rgb(8, 217, 214),
        #ff5882
      );
      z-index: -1;

      background-repeat: repeat;
    }

    &__conatiner {
      width: 100%;
    }

    &__imageBox {
      position: relative;
      width: 100%;
      height: 70vh;

      ${(props) => props.size === "small" && smallSizeStyles}
      ${(props) => props.size === "big" && largeSizeStyles}
    }

    &__image {
      filter: brightness(1.1);
      object-position: center;
    }
  }
`;
