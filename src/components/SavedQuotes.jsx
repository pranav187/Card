

import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SavedQuotes = ({ quotes }) => (
    <ListGroup>
        {quotes.map((quote, index) => (
            <ListGroup.Item key={index}>{quote}</ListGroup.Item>
        ))}
    </ListGroup>
);

export default SavedQuotes;
