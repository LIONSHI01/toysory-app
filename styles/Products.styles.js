import styled from "styled-components";
import { device } from "./devices";

export const ProductsPageContainer = styled.div`
  .container {
    max-width: 144rem;
    margin: 0 auto;
    padding: 0 14px;
  }

  .products__main {
    display: flex;
    gap: 4rem;
  }
  .products__sidebarContainer {
    @media ${device.tablet_portrait} {
      display: none;
    }
  }

  .products__content {
    width: 100%;
  }
`;
