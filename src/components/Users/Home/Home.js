import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Users from '../Users';

const Home = () => {

    const [ users, setUsers] = useState([]);

    useEffect (() => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then( res => res.json())
   .then ( data => setUsers(data))
//    console.log(setUsers);
  
    },[])

    return (
        <div>
             <h3>Users : {users.length}</h3>

                {
                users.map( user => <Users user = {user}></Users>)
                }
        </div>
    );
};

export default Home;