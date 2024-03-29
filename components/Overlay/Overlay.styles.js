import styled, { css } from "styled-components";

const showUpStyles = css`
  opacity: 1;
  visibility: visible;
  display: unset;
`;

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.347);
  backdrop-filter: blur(10px);

  z-index: ${(props) => props.zIndex};

  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  display: none;

  ${(props) => props.showup && showUpStyles}
`;
