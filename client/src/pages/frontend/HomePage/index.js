import React from 'react';
import { Button } from 'react-bootstrap';
import FrontendLayout from 'layouts/FrontendLayout';

function HomePage(props) {
  return (
    <FrontendLayout>
      <h1>Home page.</h1>
      <Button variant="primary">Primary</Button>
      <p>This is text.</p>
    </FrontendLayout>
  );
}

export default HomePage;
