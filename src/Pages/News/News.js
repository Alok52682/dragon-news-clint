import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {

    const news = useLoaderData();
    const { title, details, rating, image_url, author, category_id } = news;

    return (
        <Card className="mb-5">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className='d-flex justify-content-between align-items-center my-3'>
                    <p className='my-0'>Author Name : {author?.name}</p>
                    <p className='my-0'> Published Date:{author?.published_date}</p>
                    <p className='mb-0'><FaStar className='text-warning' /> {rating?.number}</p>
                </div>
                <Card.Text>{details}</Card.Text>
                <Link to={`/category/${category_id}`}><Button variant='primary'>Go Back</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default News;