import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function ItemCard({card}) {
    return (
        <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Text style={{
       color: 'transparent'
       
      }}>
          {card.engWord}
        </Card.Text>
        <Card.Text>
          {card.rusWord}
        </Card.Text>
        <Button variant="primary">Перейти</Button>
      </Card.Body>
    </Card>
    </>
      )
    }
    