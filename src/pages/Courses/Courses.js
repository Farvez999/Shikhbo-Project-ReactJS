import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {
    const { id, name, image, price } = course;
    return (
        <Col>
            <Card>
                <Card.Img style={{ height: '12rem' }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price : {price}
                    </Card.Text>
                </Card.Body>
                <Link className='btn btn-primary' to={`/courses/${id}`}>Courses Details</Link>
            </Card>
        </Col>
    );
};

export default Courses;