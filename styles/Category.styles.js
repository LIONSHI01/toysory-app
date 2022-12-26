import styled from "styled-components";
import { device } from "../styles/devices";

export const CategoryPageContainer = styled.div`
  .container {
    max-width: 144rem;
    margin: 0 auto;
    padding: 0 14px;
  }

  .sidebar-container {
    @media ${device.tablet} {
      display: none;
    }
  }

  .main {
    display: flex;
    gap: 4rem;
  }

  .content {
    width: 100%;
  }
`;
