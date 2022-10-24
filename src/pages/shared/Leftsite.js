import React, { useEffect, useState } from 'react';
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
            <h2>Categories : {categories.length}</h2>
            <div>
                {
                    categories.map(category =>
                        <p
                            key={category.id}>
                            <Link
                                to={`/courses-categories/${category.id}`}>{category.name}
                            </Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Leftsite;