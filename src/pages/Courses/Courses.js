import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = ({ course }) => {
    const { id, name, image, price } = course;
    return (
        <Row xs={1} md={2} className="g-4">
            {/* {Array.from({ length: 2 }).map((_, idx) => ( */}
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Price : {price}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary" href={`/courses/${id}`}>Courses Details</Button>
                </Card>
            </Col>
            {/* ))} */}
        </Row>
    );
};

export default Courses;