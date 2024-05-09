import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useAuth } from '../../../contexts/AuthContext';
import type { CardProps } from '../../atoms/Card/Card.types';
import {
  CustomSelect,
  LeftArrow,
  ListingContainer,
  Page,
  Pagination,
  RightArrow,
  SortWrapper,
} from './Listing.styled';
import type { Listing as ListingType } from './Listing.types';
import type { FiltrationType } from './Listing.types';

const Listing: ListingType = () => {
  const [items, setItems] = useState<CardProps[]>([]);
  const [sortType, setSortType] = useState<FiltrationType>('random');
  const { token } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          'https://playground.tesonet.lt/v1/servers',
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        sortItems(response.data, sortType);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    if (token) {
      fetchItems();
    }
  }, [token, sortType]);

  const sortItems = (data: CardProps[], sortType: string) => {
    let sortedItems = [...data];
    switch (sortType) {
      case 'name-asc':
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'distance-asc':
        sortedItems = sortedItems.sort((a, b) => a.distance - b.distance);
        break;
      case 'distance-desc':
        sortedItems = sortedItems.sort((a, b) => b.distance - a.distance);
        break;
      case 'random':
        for (let i = sortedItems.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [sortedItems[i], sortedItems[j]] = [sortedItems[j], sortedItems[i]]; // ES6 destructuring swap
        }
        break;
      default:
        sortedItems = [...data];
        break;
    }
    setItems([]);

    setTimeout(() => {
      setItems(sortedItems);
    }, 250);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortArray = event.target.value as FiltrationType;

    setSortType(newSortArray);
    sortItems(items, newSortArray);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <ListingContainer>
      <h1>List of Items</h1>
      <span>TOTAL: {items.length}</span>
      <SortWrapper>
        <span>SORT BY:</span>
        <CustomSelect value={sortType} onChange={handleSortChange}>
          <option value="random">Random</option>
          <option value="name-asc">Sort Name A-Z</option>
          <option value="name-desc">Sort Name Z-A</option>
          <option value="distance-asc">Sort Distance Ascending</option>
          <option value="distance-desc">Sort Distance Descending</option>
        </CustomSelect>
      </SortWrapper>
      <TransitionGroup component="ul">
        {currentItems.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <li>
              {item.name} - {item.distance} km
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <Pagination>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <LeftArrow />
        </button>
        {Array.from({ length: pageCount }, (_, i) => (
          <Page
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              fontWeight: currentPage === i + 1 ? 'bold' : 'normal',
            }}
          >
            {i + 1}
          </Page>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          <RightArrow />
        </button>
      </Pagination>
    </ListingContainer>
  );
};
export default Listing;
