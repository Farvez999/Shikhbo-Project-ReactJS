import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Home = () => {
    const allCourses = useLoaderData()
    // console.log(allCourses);
    return (
        <div>
            <h3 className='text-center mb-2'>Total Course : {allCourses.length}</h3>
            <Row xs={1} md={3} className="g-4 mb-4">
                {
                    allCourses.map(course =>
                        <Courses
                            key={course.id} course={course}>
                        </Courses>
                    )
                }
            </Row>
        </div>
    );
};

export default Home;