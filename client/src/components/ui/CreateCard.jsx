import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CreateCard() {
  return (
    <Form>
      <Form.Group controlId="formEngWord">
        <Form.Label>Английское слово</Form.Label>
        <Form.Control type="text" placeholder="Введите английское слово" />
      </Form.Group>

      <Form.Group controlId="formRusWord">
        <Form.Label>Русское слово</Form.Label>
        <Form.Control type="text" placeholder="Введите русское слово" />
      </Form.Group>

      <Form.Group controlId="formThemeId">
        <Form.Label>ID темы</Form.Label>
        <Form.Control type="number" placeholder="Введите ID темы" />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Добавить карточку
      </Button>
    </Form>
  );
}
