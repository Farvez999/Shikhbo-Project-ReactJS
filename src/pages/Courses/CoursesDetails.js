import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import { BsAlarm } from "react-icons/bs";

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
                    <p><BsAlarm></BsAlarm> {courses_duration}</p>
                    <p><FaCalendarAlt></FaCalendarAlt> {starting_date}</p>
                </Card.Text>
                <Link className='btn btn-primary' to={`/checkout/${id}`}>Get premium access</Link>
            </Card.Body>
        </Card>
    );
};

export default CoursesDetails;