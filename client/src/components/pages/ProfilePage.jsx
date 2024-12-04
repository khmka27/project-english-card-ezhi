import React from 'react';
import { Card, Image, ProgressBar } from 'react-bootstrap';

export default function ProfilePage({ user }) {
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

          <div className="mt-4">
            <h5>Прогресс обучения</h5>
            <ProgressBar now={60} label="60%" className="mb-2" />
            <ProgressBar now={80} label="80%" className="mb-2" />
            <ProgressBar now={40} label="40%" className="mb-2" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
