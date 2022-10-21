import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Contexts/AuthProvider';

const RightSideber = () => {

    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => console.log('error', error));
    }
    return (
        <div className='pt-4'>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle /> Log In With Google</Button>
                <Button variant='outline-dark'><FaGithub /> Log In With Github</Button>
            </ButtonGroup>
            <div className='my-5'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <Button className='mt-2' variant='outline-dark'><FaFacebook /> Log In With Facebook</Button>
                    <Button className='mt-2' variant='outline-dark'><FaTwitter /> Log In With Twitter</Button>
                    <Button className='mt-2' variant='outline-dark'><FaTwitch /> Log In With Twitch</Button>
                    <Button className='mt-2' variant='outline-dark'><FaWhatsapp /> Log In With Whatsapp</Button>
                </ListGroup>
            </div>
            <BrandCarousel />
        </div>
    );
};

export default RightSideber;