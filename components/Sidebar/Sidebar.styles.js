import styled from "styled-components";
// import { device } from "../../styles/devices";

export const SidebarContainer = styled.aside`
  min-width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .sidebar__heading {
    background-color: var(--blue-dark);
    padding: 1.2rem 1.5rem;
    font-size: var(--fs-x);
    color: var(--white);
    font-weight: 500;
    text-transform: uppercase;
  }

  .sidebar__category {
    padding: 0.8rem 1.5rem;
    background-color: var(--grey-light-1);
    font-size: var(--fs-s);
    cursor: pointer;

    h4 {
      color: var(--black);
      font-weight: 500;
      text-transform: uppercase;
    }
  }
`;
