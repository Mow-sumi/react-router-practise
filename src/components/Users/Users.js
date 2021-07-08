import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Users = (props) => {
    // console.log ( props.user);
    const { name, email , id} = props.user;

    const  history = useHistory();

    const handleClick = (id)=> {

    const url = `/user/${id}`;
    history.push(url);
  }
     const userStyle = {
         border: '1px solid red',
         margin:'20px',
         padding:'20px',
         borderRadius:'20px'
         
     }

    return (
        <div style={userStyle}>
            <h3>Name :{name}</h3>
            <h5>Email :{email}</h5>
            <p>id:{id} <Link to={`/user/${id}`}>    
            </Link></p>
        
            <button onClick ={() => handleClick (id)}>Click here</button>
        </div>
    );
};

export default Users;