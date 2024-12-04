import React, { useEffect, useState } from 'react';
import ItemCard from '../ui/ItemCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CardsPage() {
  const [cards, setCards] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/cards`);

        const filteredData = response.data.filter(
          (item) => item.themeId === +id
        );

        setCards(filteredData);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {cards.map((card) => (
        <ItemCard key={card.id} card={card} />
      ))}
    </div>
  );
}
