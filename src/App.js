import React from 'react';
import './App.css';
import FormValidator from './FormValidator.js'
import { Container } from 'react-bootstrap';




function App() {
  return (
    <Container className="wrapper" fluid={true}>
      <div className="App">
        <FormValidator></FormValidator>
      </div>
    </Container>
  );
}

export default App;
