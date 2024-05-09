import axios from 'axios';
import type { ReactElement } from 'react';
import React, { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';

const List = (): ReactElement => {
  const [items, setItems] = useState([]);
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
        setItems(response.data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    if (token) {
      fetchItems();
    }
  }, [token]);

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
