import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Home = () => {
    const allCourses = useLoaderData()
    console.log(allCourses);
    return (
        <div>
            <h2>This is Home: {allCourses.length}</h2>
            {
                allCourses.map(course =>
                    <Courses
                        key={course.key} course={course}>
                    </Courses>
                )
            }
        </div>
    );
};

export default Home;