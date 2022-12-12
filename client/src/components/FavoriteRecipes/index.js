import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import SavedSearchIcon from '@mui/icons-material/SavedSearch';

function FavoriteRecipes() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header> Favorite Recipes </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> Recipe 1 </ListGroup.Item>
                <ListGroup.Item> Recipe 2 </ListGroup.Item>
                <ListGroup.Item> Recipe 3 </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default FavoriteRecipes;