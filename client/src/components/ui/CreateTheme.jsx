import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function CreateTheme() {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = Object.fromEntries(new FormData(e.target));
      console.log(data);
      await axios.post('/api/themes', data);
      navigate(`/themes`);
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка при добавлении темы. Попробуйте еще раз.');
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formThemeName">
        <Form.Label>Название темы</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите название темы"
          name="nameTheme"
          required
        />
      </Form.Group>
      <Form.Group controlId="formThemeName">
        <Form.Label>Картинка</Form.Label>
        <Form.Control
          type="text"
          placeholder="Добавьте сслыку на картинку"
          name="image"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Добавить тему
      </Button>
    </Form>
  );
}
