import React from "react";
import "../styles/Myrecipes.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import AddForm from "../components/AddForm";
import FavoriteRecipes from "../components/FavoriteRecipes";
import UserRecipes from "../components/UserRecipes";
import UserCard from '../components/UserCard';

function Recipes() {
  return (
    <div className="recipe">
      <Container>
        <Row>
          <Col sm={4}>
            <UserCard />
            <AddForm />
          </Col>
          <Col sm={4}>
            <FavoriteRecipes />
          </Col>
          <Col sm={4}>
            <UserRecipes />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Recipes;
