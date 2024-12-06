import { useEffect, useState } from 'react';
import ItemCard from '../ui/ItemCard';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

export default function CardsPage() {
  const [cards, setCards] = useState([]);
  const { id } = useParams();

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/cards/${id}`);
      if (res.status === 200) {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
      }
    } catch (error) {
      console.error('Ошибка при удалении карточки:', error);
    }
  };

  const handleEdit = async (id, updatedData) => {
    try {
      await axios.put(`/api/cards/${id}`, updatedData); // HTTP запрос
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, ...updatedData } : card
        )
      );
    } catch (error) {
      console.error('Ошибка при обновлении карточки:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/cards`);
        const filteredData = res.data.filter((item) => item.themeId === +id);
        setCards(filteredData);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, [id]);
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          bottom: '10px',
          paddingTop: '30px',
          overflowX: 'auto',
          margin: '0 auto',
          maxWidth: '1100px',
        }}
      >
        {cards.map((card) => (
          <div style={{
            margin: '10px'
          }} key={card.id}
          >
            <ItemCard
              key={card.id}
              card={card}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        ))}
      </div>
      <div>
        <Button variant='success'
          style={{
            position: 'absolute',
            width: '10rem',
            right: '80px',
            top: '450px',
            height: '3rem',
          }}
          onClick={() => {
            navigate(`/themes/${+id + 1}`);
          }}
        >
          Следующая тема
        </Button>
      </div>
    </>
  );
}
