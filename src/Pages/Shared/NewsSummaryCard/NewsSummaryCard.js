import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, total_view, image_url, author, details, rating } = news;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author?.img}
                        style={{ height: '50px' }}
                    />
                    <div>
                        <p className='my-0 '>{author?.name}</p>
                        <p className='my-0 '>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                {
                    details.length > 200 ?
                        <Card.Text>{details.slice(0, 200) + '...'}<Link to={`../news/${_id}`}>Read More</Link></Card.Text>
                        :
                        <Card.Text>{details}</Card.Text>
                }
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0'><FaStar className='text-warning' /> {rating?.number}</p>
                    <p className='mb-0'><FaEye /> {total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;