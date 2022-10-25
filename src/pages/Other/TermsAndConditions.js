import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>This is our Terms And Conditions</h3>
            <p>Go Back <Link to='/register'>Sign Up</Link></p>
        </div>
    );
};

export default TermsAndConditions;