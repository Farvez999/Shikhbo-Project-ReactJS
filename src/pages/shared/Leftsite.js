import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Leftsite = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://learning-platform-server-omega.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h6 className='text-center mb-4'>Courses Categories</h6>
            <div>
                {
                    categories.map(category =>
                        <p
                            style={{ backgroundColor: 'blue', color: 'red', padding: '4px', borderRadius: '5px', textAlign: 'center' }}
                            key={category.id}>
                            <Link
                                style={{ textDecoration: 'none', color: 'white', }}
                                to={`/courses-categories/${category.id}`}
                            // to={`/courses/${category.id}`}
                            >{category.name}
                            </Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Leftsite;