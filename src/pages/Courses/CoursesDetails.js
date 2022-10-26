import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import { BsAlarm } from "react-icons/bs";
import Pdf from "react-to-pdf";
import { FaFileDownload } from "react-icons/fa";

const CoursesDetails = () => {
    const courses = useLoaderData()
    const { id, name, image, price, description, courses_duration, starting_date } = courses;

    const ref = React.createRef()

    return (
        <Card className='mb-4'>
            <div className='d-flex justify-content-between me-2'>
                <Card.Header as="h5">{name}</Card.Header>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}><FaFileDownload></FaFileDownload></button>}
                </Pdf>
            </div>
            <Card.Img className='mb-2' variant="top" src={image} />
            <Card.Body ref={ref}>
                <Card.Title>{description}</Card.Title>
                <Card.Text className='mt-3'>
                    <h3>Price : {price}</h3>
                    <p><BsAlarm></BsAlarm> {courses_duration}</p>
                    <p><FaCalendarAlt></FaCalendarAlt> {starting_date}</p>
                </Card.Text>
                <Link className='btn btn-primary' to={`/checkout/${id}`}>Enrol Now</Link>
            </Card.Body>
        </Card>
    );
};

export default CoursesDetails;