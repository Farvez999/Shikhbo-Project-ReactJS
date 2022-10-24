import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Category = () => {
    const categoriesCourse = useLoaderData()
    return (
        <div>
            <h2>This is Category : {categoriesCourse.length}</h2>
            {
                categoriesCourse.map(course =>
                    <Courses
                        key={course.key} course={course}>
                    </Courses>
                )
            }
        </div>
    );
};

export default Category;