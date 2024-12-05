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
          backgroundColor: '#064fbd',
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
