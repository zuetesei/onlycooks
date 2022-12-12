import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import Auth from "../../utils/Auth";
import { LOGIN_USER } from '../../utils/Mutations';


function LogInForm() {
    let [formState, setFormState] = useState({
        email: '',
        password: ''
    })
    const [login, { error }] = useMutation(LOGIN_USER);

    const formHandler = async (event) => {
        event.preventDefault()
        try {

            const email = event.target.email.value
            const password = event.target.password.value

            setFormState(formState = { email, password })

            const { data } = await login({ variables: formState })
            console.log(data)
            Auth.login(data.login.token)
        } catch {
            console.log(error)
        }
    }
    return (
        <div className="logform Auth-form-home">
            <h2> Log In to See What's Cookin 🍳 </h2>
            <Form className='loginForm' onSubmit={formHandler}>
                <Form.Group className='mb-3' controlId='formGroupEmail'>
                    <Form.Label> Email Address: </Form.Label>
                    <Form.Control type='email' placeholder='Your Email' name='email' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label> Password: </Form.Label>
                    <Form.Control type='password' placeholder='Your Password' name='password' />
                </Form.Group>
                <Button id='cubic' type='submit' className="btn btn-primary"> Log In </Button>
            </Form>
        </div>
    );
}

export default LogInForm;