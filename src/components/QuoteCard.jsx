

import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const QuoteCard = ({ onSave }) => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(response => response.json())
            .then(data => setQuote(data[0]));
    }, []);

    return (
        <Card className="mb-3" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>{quote}</Card.Text>
                <Button variant="primary" onClick={() => onSave(quote)}>Save to List</Button>
            </Card.Body>

            
        </Card>

        



    );
};

export default QuoteCard;
