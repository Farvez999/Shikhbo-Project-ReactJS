import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const courses = useLoaderData()
    return (
        <div>
            <h3 className='text-center'>Mr/Mrs. {user?.displayName} Successful your course Enrol : {courses.name}</h3>
        </div>
    );
};

export default Checkout;