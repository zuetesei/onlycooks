import React from "react";
import "../styles/Recipe.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function SingleRecipe() {
  return (
    <div className="recipe">
      <Container Classname="recipeform">
        <Row>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Recipe Name:</Form.Label>
                <Form.Control type="email" placeholder="recipe name here..." />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>List of Ingredients:</Form.Label>
                <Form.Control as="textarea" rows={8} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Instructions:</Form.Label>
                <Form.Control as="textarea" rows={8} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Story/Notes/Description:</Form.Label>
                <Form.Control as="textarea" rows={8} />
              </Form.Group>
              <Button type="submit" className="btn btn-primary">
                {" "}
                Submit{" "}
              </Button>
            </Form>
          </Col>
          <Col className="sm={4}">
            <p> Attachments: </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SingleRecipe;
