import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h3>{courses.name}</h3>
        </div>
    );
};

export default Checkout;