import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FriendList from "../components/FriendList";
import AddForm from "../components/AddForm";
import UserCard from '../components/UserCard';
import UserRecipes from '../components/UserRecipes';

function UserProfile() {

    return (
        <Container className="my-5">
            <Row>
                <Col sm={4}>
                    <UserCard />
                    <AddForm />

                </Col>
                <Col sm={4}>

                    <UserRecipes />
                </Col>

                <Col sm={4}>
                    <div>
                        <FriendList />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfile; 