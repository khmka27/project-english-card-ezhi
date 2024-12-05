import React, { useEffect, useState } from 'react';
import {
  Card,
  Image,
  ProgressBar,
  Button,
  Row,
  Col,
  Container,
} from 'react-bootstrap';
import CreateCard from '../ui/CreateCard';
import '../CSS/ProfilePage.css';
import axios from 'axios';
import CreateTheme from '../ui/CreateTheme';

export default function ProfilePage({ user }) {
  const [activeTab, setActiveTab] = useState('progress');
  const [createMode, setCreateMode] = useState('createCard');
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    axios.get('/api/themes').then((res) => setThemes(res.data));
  }, []);

  const handleThemeSubmit = (themeName) => {
    // Здесь вы можете добавить логику для отправки темы на сервер
    console.log('Создана тема:', themeName);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: '100vh', width: '100%' }}
    >
      <Card className="text-center" style={{ width: '100%', height: '100%' }}>
        <Card.Body>
          <Image
            src="/elbrus.jpg"
            roundedCircle
            fluid
            style={{ width: '150px', height: '150px' }}
          />
          <Card.Title className="mt-3">{user.data.name}</Card.Title>

          <Row className="mt-4">
            <Col>
              <Button
                variant={activeTab === 'progress' ? 'primary' : 'secondary'}
                onClick={() => setActiveTab('progress')}
                style={{ width: '100%' }}
              >
                Progress
              </Button>
            </Col>
            <Col>
              <Button
                variant={activeTab === 'create' ? 'primary' : 'secondary'}
                onClick={() => setActiveTab('create')}
                style={{ width: '100%' }}
              >
                Create
              </Button>
            </Col>
          </Row>

          {activeTab === 'progress' && (
            <div className="mt-4">
              <h5>Прогресс обучения</h5>
              <ProgressBar
                striped
                animated
                now={60}
                label="60%"
                className="mb-2"
              />
              <ProgressBar
                striped
                animated
                now={80}
                label="80%"
                className="mb-2"
              />
              <ProgressBar
                striped
                animated
                now={40}
                label="40%"
                className="mb-2"
              />
            </div>
          )}

          {activeTab === 'create' && (
            <div className="mt-4">
              <h5>Создание карточки или темы</h5>
              <Row className="mt-4">
                <Col>
                  <Button
                    variant={
                      createMode === 'createCard' ? 'primary' : 'secondary'
                    }
                    onClick={() => setCreateMode('createCard')}
                    style={{ width: '100%' }}
                  >
                    Создать карточку
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant={
                      createMode === 'createTheme' ? 'primary' : 'secondary'
                    }
                    onClick={() => setCreateMode('createTheme')}
                    style={{ width: '100%' }}
                  >
                    Создать тему
                  </Button>
                </Col>
              </Row>

              {createMode === 'createCard' && (
                <Container className="mt-4">
                  <CreateCard themes={themes} />
                </Container>
              )}

              {createMode === 'createTheme' && (
                <Container className="mt-4">
                  <CreateTheme onSubmit={handleThemeSubmit} />
                </Container>
              )}
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
