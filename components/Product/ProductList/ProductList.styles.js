import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

  gap: 3rem;
  margin-bottom: var(--mb-m);
`;
