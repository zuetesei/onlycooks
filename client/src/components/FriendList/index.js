import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SubscribersList(props) {
  return (
    <div className="subscribers">
      <Container className="friend">
        <div>
          <h1 className="friends"> Friends </h1>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Find Friends"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Link 3
            </ListGroup.Item>
            {/* <ListGroup.Item action onClick={alertClicked}>
          This one is a button
        </ListGroup.Item> */}
          </ListGroup>
          {/* <span> {props.username} </span> */}
        </div>
      </Container>
    </div>
  );
}

export default SubscribersList;
