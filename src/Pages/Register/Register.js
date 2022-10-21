import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const [show, setShow] = useState(true);
    const [accepted, setAccepted] = useState(false);
    const { createUser, setUsername, sendEmailVarification } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                setUsername(username, photoUrl)
                    .then(() => console.log('username updated'))
                    .catch(error => console.log(error))
                const user = result.user;
                console.log(user);
                sendEmailVarification()
                    .then(result => toast('check your email for varify'))
                setError('');
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

        console.log(username, email, password);

    }

    const HandleAccepted = (event) => {

        const check = event.target.checked;
        setAccepted(check);

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name='username' placeholder="Enter Username" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photoUrl' placeholder="Enter photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={show ? "password" : "text"} name='password' placeholder="Password" required />
                </Form.Group>
                {
                    error && <Form.Text className="text-danger">{error}</Form.Text>
                }
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setShow(!show)} type="checkbox" label="Show Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={HandleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>tarms & conditions</Link> </>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;