import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLOgin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='mb-4' variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            <div className='justify-content-between align-items-center'>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleLOgin} className='mb-2' variant="primary"><FaGoogle></FaGoogle> Login With Google</Button>
                    <Button variant="dark"><FaGithub></FaGithub> Login With GitHub</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Login;