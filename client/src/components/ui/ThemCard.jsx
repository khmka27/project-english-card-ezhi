import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ThemCard({ card, onCardClick }) {
  return (
    <Card
      style={{
        width: '18rem',
        border: '2px solid blue',
        borderRadius: '10px',
        cursor: 'pointer',
      }}
      onClick={onCardClick}
    >
      <Card.Img variant="top" src={card.image} />
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
