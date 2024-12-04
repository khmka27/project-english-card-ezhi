import React, { useState } from 'react';
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

export default function ProfilePage({ user }) {
  const [activeTab, setActiveTab] = useState('progress');

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
                variant={activeTab === 'createCard' ? 'primary' : 'secondary'}
                onClick={() => setActiveTab('createCard')}
                style={{ width: '100%' }}
              >
                CreateCard
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

          {activeTab === 'createCard' && (
            <div className="mt-4">
              <h5>Создание карточки</h5>
              <Container className="mt-4">
                <h5>Добавить карточку</h5>
                <CreateCard />
              </Container>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
