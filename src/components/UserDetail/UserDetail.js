import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { id } = useParams();

  const [ items, setItems] = useState({});


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then( res => res.json())
        .then ( data => setItems(data))

    }, [])


    return (
        <div>
            <h4>user detail pages...</h4>
            <p>userId:{id}</p>
            <h2>{items.name}</h2>
            <h2>{items.email}</h2>
            <h2>{items.phone}</h2>
            <h2>{items.website}</h2>
        </div>
    );
};

export default UserDetail;