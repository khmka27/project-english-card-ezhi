import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ThemCard({card}) {
  
  
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body style={{
          backgroundColor: '#064fbd'
        }}>
          <Card.Title style={{
            color: 'white'
          }}>{card.nameTheme}</Card.Title>
      
          <Button variant="primary">Перейти</Button>
        </Card.Body>
      </Card>
    </>
  );
}
