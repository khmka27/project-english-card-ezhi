import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateCard({ themes }) {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = Object.fromEntries(new FormData(e.target));
      data.themeId = +data.themeId;
      await axios.post('/api/cards', data);
      navigate(`/themes/${data.themeId}`);
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка при добавлении карточки. Попробуйте еще раз.');
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formEngWord">
        <Form.Label>На английском</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите слово на английском"
          name="engWord"
          required
        />
      </Form.Group>

      <Form.Group controlId="formRusWord">
        <Form.Label>На русском</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите слово на русском"
          name="rusWord"
          required
        />
      </Form.Group>

      <Form.Group controlId="formThemeId">
        <Form.Label>Тема</Form.Label>
        <Form.Control
          as="select"
          placeholder="Выберите тему"
          name="themeId"
          required
        >
          {themes
            .filter((theme) => theme.nameTheme !== 'Мои карточки')
            .map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.nameTheme}
              </option>
            ))}
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Добавить карточку
      </Button>
    </Form>
  );
}
