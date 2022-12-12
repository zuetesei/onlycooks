import React from 'react';
import UserCard from '../components/UserCard';
import '../styles/Navbar.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserRecipes from '../components/UserRecipes';
import AddForm from '../components/AddForm';
import AllRecipes from '../components/AllRecipes';
import '../styles/Dashboard.css'
// import Auth from '../utils/Auth'
// import { useMutation } from '@apollo/client';
// import { useQuery } from '@apollo/client';
// import { QUERY_ME } from '../utils/Queries'

// import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Dashboard() {

    return (
        <div className='dashboard my-5'>
            <Container>
                <Row>
                    <Col sm={8} className='userFeed'>
                        <AllRecipes />
                    </Col>
                    <Col sm={4} className='userInfo'>
                        <UserCard />
                        <AddForm />
                        <UserRecipes />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;