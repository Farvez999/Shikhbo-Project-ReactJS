import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const courses = useLoaderData()
    const { id, name, image, price, description, courses_duration, starting_date } = courses;
    return (
        <Card className='mb-4'>
            <Card.Header as="h5">{name}</Card.Header>
            <Card.Img className='mb-2' variant="top" src={image} />
            <Card.Body>
                <Card.Title>{description}</Card.Title>
                <Card.Text className='mt-3'>
                    <h3>Price : {price}</h3>
                    <p>Courses Duration : {courses_duration}</p>
                    <p>Starting Date : {starting_date}</p>
                </Card.Text>
                <Button variant="primary" href={`/checkout/${id}`}>Get premium access</Button>
            </Card.Body>
        </Card>
    );
};

export default CoursesDetails;