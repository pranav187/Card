
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import QuoteCard from './components/QuoteCard';
import SavedQuotes from './components/SavedQuotes';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [savedQuotes, setSavedQuotes] = useState([]);

  const handleSaveQuote = (quote) => {
    setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Pranav's Quotes</h1>
          <div className="d-flex justify-content-center">
            <QuoteCard onSave={handleSaveQuote} />
          </div>
          <h2 className="mt-4">Saved Quotes</h2>
          <SavedQuotes quotes={savedQuotes} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
