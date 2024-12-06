import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function CreateTheme() {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const nameTheme = formData.get('nameTheme');
      const image = formData.get('file');
      console.log(nameTheme);
      console.log(image);
      await axios.post('/api/themes', formData);
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
        <Form.Control type="file" name="file" required />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Добавить тему
      </Button>
    </Form>
  );
}
