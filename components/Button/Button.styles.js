import styled, { css } from "styled-components";

const greyButtonStyles = css`
  background-color: var(--black-light-3);

  :hover {
    background-color: var(--black);
  }
`;

const redButtonStyles = css`
  background-color: var(--red-light);

  :hover {
    background-color: var(--red);
  }
`;

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  font-size: var(--fs-s);
  font-weight: 500;
  color: var(--white);
  padding: 1rem 0;
  transition: all 0.3s;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--white);
  }

  height: ${(props) => props.height};
  width: ${(props) => props.width};

  ${(props) => props.color === "grey" && greyButtonStyles}
  ${(props) => props.color === "red" && redButtonStyles}
`;
