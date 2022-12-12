import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function AllRecipes() {
    return (
        <Card>
            <Card.Header> 🔥 Recipe Feed </Card.Header>
            <Card.Body>
                <Card.Title> Recipe Name </Card.Title>
                <Card.Text>
                    Ingredients, Instructions, Pics
                </Card.Text>
                <Button variant="primary"> View Recipe </Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>

            <Card.Body>
                <Card.Title> Recipe Name </Card.Title>
                <Card.Text>
                    Ingredients, Instructions, Pics
                </Card.Text>
                <Button variant="primary"> View Recipe </Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    )

}

export default AllRecipes;