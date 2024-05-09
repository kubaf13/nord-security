import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useAuth } from '../../../contexts/AuthContext';
import type { CardProps } from '../../atoms/Card/Card.types';
import { CustomSelect, ListingContainer, SortWrapper } from './Listing.styled';
import type { Listing as ListingType } from './Listing.types';
import type { FiltrationType } from './Listing.types';

const Listing: ListingType = () => {
  const [items, setItems] = useState<CardProps[]>([]);
  const [sortType, setSortType] = useState<FiltrationType>('random');
  const { token } = useAuth();

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
    }, 300);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortArray = event.target.value as FiltrationType;

    setSortType(newSortArray);
    sortItems(items, newSortArray);
  };

  return (
    <ListingContainer>
      <h1>List of Items</h1>
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
        {items.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <li>
              {item.name} - {item.distance} km
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListingContainer>
  );
};
export default Listing;
