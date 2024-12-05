import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ThemCard({ card }) {
  return (
    <div style={{ position: 'relative', width: '18rem', margin: '20px' }}>
      <Card.Img
        variant="top"
        src={card.image}
        style={{
          borderRadius: '15px',
        }}
      />
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
        <Card.Title>{card.nameTheme}</Card.Title>
      </Card.Body>
    </div>
  );
}
