import styled from 'styled-components';

export const ListingContainer = styled.section`
  min-width: 325px;
  margin: 10px 15px;

  .item-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .item-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition:
      opacity 500ms,
      transform 500ms;
  }
  .item-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .item-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition:
      opacity 500ms,
      transform 500ms;
  }
`;

export const CustomSelect = styled.select`
  border: unset;
  border-bottom: 2px solid ${({ theme }) => theme.palette.accent};
`;

export const SortWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
