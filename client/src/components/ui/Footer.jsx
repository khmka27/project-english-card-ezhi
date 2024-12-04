import React from 'react';
import Container from 'react-bootstrap/Container';
import '../CSS/Footer.css'; 

export default function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} ENG EZHI</p>
        </div>
      </Container>
    </footer>
  );
}
