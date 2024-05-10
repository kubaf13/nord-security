import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

export const Template = styled.section`
  max-width: 1000px;
  margin: 10px 15px;

  @media ${({ theme }) => theme.media.desktop} {
    margin: 10px auto;
  }
`;

export const WelcomeContainer = styled.div`
  margin-block: 40px;
  text-align: center;

  span,
  h2 {
    line-height: 1;
  }
`;

export const ListingContainer = styled.section`
  min-width: 325px;
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
    margin: 20px auto;
    min-height: 300px;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    @media ${({ theme }) => theme.media.desktop} {
      gap: 20px 10px;
      justify-content: space-between;
    }
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

export const ListingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
