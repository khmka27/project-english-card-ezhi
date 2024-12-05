import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ThemCard({ card, onCardClick }) {
  return (
    <Card
      style={{
        width: '18rem',
        border: '2px solid #007bff',
        borderRadius: '10px',
        cursor: 'pointer',
      }}
      onClick={onCardClick}
      
    >
      <Link to={`/themes/${card.id}`}>
      <Card.Img variant="top" src={card.image} />
      </Link>
      <Card.Body
        style={{
          bottom: '15px',
          borderRadius: '10px',
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, 33%)',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0))',
          padding: '10px',
        }}
        >
        <Card.Title
          style={{
            color: 'white',
          }}
          >
          {card.nameTheme}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
