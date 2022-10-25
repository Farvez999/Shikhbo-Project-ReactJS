import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Category = () => {
    const categoriesCourse = useLoaderData()
    return (
        <div>
            <h3>Total Course : {categoriesCourse.length}</h3>
            <Row xs={1} md={3} className="g-4 mb-4">
                {
                    categoriesCourse.map(course =>
                        <Courses
                            key={course.key} course={course}>
                        </Courses>
                    )
                }
            </Row>
        </div >
    );
};

export default Category;