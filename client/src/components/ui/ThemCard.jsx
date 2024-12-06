import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ThemCard({ card, onCardClick }) {
  return (
    <Card
      style={{
        width: '310px',
        height: '250px', // Увеличиваем высоту для лучшего отображения
        border: '2px solid #007bff',
        borderRadius: '10px',
        cursor: 'pointer',
        position: 'relative', // Для абсолютного позиционирования заголовка
        overflow: 'hidden', // Скрываем переполнение
      }}
      onClick={onCardClick}
    >
      <Link to={`/themes/${card.id}`}>
        <Card.Img
          variant="top"
          src={`http://localhost:3000/${card.image}`}
          style={{
            width: '100%', // Занимаем всю ширину
            height: '250px', // Устанавливаем фиксированную высоту для изображения
            objectFit: 'cover', // Сохраняем пропорции изображения
          }}
        />
      </Link>
      <Card.Body
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          textAlign: 'center',
          color: 'white',
          padding: '10px',
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0))',
        }}
      >
        <Card.Title style={{ margin: 0 }}>{card.nameTheme}</Card.Title>
      </Card.Body>
    </Card>
  );
}
