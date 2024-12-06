import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';
import '../CSS/CardItem.css';

export default function ItemCard({ card, handleDelete, handleEdit }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState(card); // 123

  const handleFlip = (e) => {
    if (e?.target?.tagName !== 'BUTTON' && e?.target?.tagName !== 'INPUT') {
      setIsFlipped(!isFlipped);
    }
  };

  const handleSave = () => {
    handleEdit(card.id, editedCard);
    setIsEditing(false);
    handleFlip();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCard({ ...editedCard, [name]: value });
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card
        style={{
          width: '15rem',
          height: '13rem',
          background:
            'linear-gradient(to top, rgba(0, 25, 255, 0.5), rgba(0, 0, 0, 0))',
          cursor: 'pointer',
          // width: '100px'
        }}
        onClick={handleFlip}
      >
        <Card.Body>
          <Card.Text
            className="coolfont"
            style={{
              color: 'transparent',
            }}
          >
            {card.engWord}
          </Card.Text>
          <Card.Text
            className="coolfont"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '35px',
            }}
          >
            {card.rusWord}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: '15rem',
          height: '13rem',
          background:
            'linear-gradient(to top, rgba(0, 25, 255, 0.5), rgba(0, 0, 0, 0))',
          cursor: 'pointer',
        }}
        onClick={handleFlip}
      >
        <Card.Body>
          {isEditing ? (
            <>
              <input
                type="text"
                name="engWord"
                value={editedCard.engWord}
                onChange={handleChange}
                placeholder="Введите английское слово"
              />
              <input
                type="text"
                name="rusWord"
                value={editedCard.rusWord}
                onChange={handleChange}
                placeholder="Введите русское слово"
              />
              <Button variant="outline-success" onClick={handleSave}>
                Сохранить
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => setIsEditing(false)}
              >
                Отменить
              </Button>
            </>
          ) : (
            <>
              <Card.Text
                className="coolfont"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '60px',
                }}
              >
                {card.engWord}
              </Card.Text>
              <Button
                variant="outline-primary"
                style={{
                  position: 'absolute',
                  left: '60px',
                  bottom: '25px',
                }}
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                Изменить
              </Button>
              <Button
                style={{
                  width: '5rem',
                  height: '2rem',
                  position: 'absolute',
                  top: '10px',
                  right: '12px',
                }}
                variant="outline-danger"
                onClick={() => handleDelete(card.id)}
              >
                Delete
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </ReactCardFlip>
  );
}
