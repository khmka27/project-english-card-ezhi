import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';

export default function ItemCard({ card, handleDelete, handleEdit }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState(card); // 123


  const handleFlip = (e) => {
    if(e?.target?.tagName !== 'BUTTON' && e?.target?.tagName !== 'INPUT'){
    setIsFlipped(!isFlipped);
  };
}

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
      <Card style={{ width: '18rem' }} onClick={handleFlip}>
        <Card.Body>
          <Card.Text
            style={{
              color: 'transparent',
            }}
          >
            {card.engWord}
          </Card.Text>
          <Card.Text>{card.rusWord}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} onClick={handleFlip}>
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
              <Button variant="outline-danger" onClick={() => setIsEditing(false)}>
                Отменить
              </Button>
            </>
          ) : (
            <>
              <Card.Text>{card.engWord}</Card.Text>
          <Button variant="outline-primary" onClick={() =>  {setIsEditing(true)}}>
                Изменить
              </Button>
              <Button variant="outline-danger" onClick={() => handleDelete(card.id)}>
                Удалить
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </ReactCardFlip>
  );
}

