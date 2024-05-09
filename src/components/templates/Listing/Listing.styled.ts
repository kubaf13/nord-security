import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

export const ListingContainer = styled.section`
  min-width: 325px;
  max-width: 800px;
  margin: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.media.desktop} {
    margin: 10px auto;
  }
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

  ul {
    margin-block: 30px;
    min-height: 300px;
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

export const Pagination = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: stretch;
`;

export const LeftArrow = styled(ArrowLeftIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.palette.accent};
  margin: 10px 10px 0 0;
`;

export const RightArrow = styled(ArrowRightIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.palette.accent};
  margin: 10px 0 0 10px;
`;

export const Page = styled.button`
  font-size: 25px;
  margin-inline: 5px;
`;
