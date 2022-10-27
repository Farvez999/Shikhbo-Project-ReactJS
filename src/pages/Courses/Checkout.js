import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h3 className='text-center'>Successful your course Enrol : {courses.name}</h3>
        </div>
    );
};

export default Checkout;