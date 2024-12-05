import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemCard({ card }) {

  const [show, setShow] = useState(false)

  return (
    <>
      <Card style={{
        width: '350px',
        height: '350px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}
      onClick={() => setShow((prev) => !prev)}
       >
        <Card.Body 
          style={{
            fontFamily: 'serif',
            fontSize: ' 20px',
          borderRadius: '10px',
          position: 'absolute',
          left: '50%',
          bottom: '50%',
          transform: 'translate(-50%, 33%)',
          textAlign: 'center',
          width: '100%',
          padding: '10px',
        }}>
  
          
                  
          <Card.Text>
            {show ? card.engWord : card.rusWord}</Card.Text>
        </Card.Body>
      
      <Button style={{

      }}>X</Button>
      </Card>
    </>
  );
}
