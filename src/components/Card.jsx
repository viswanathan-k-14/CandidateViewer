import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ user }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <img src={user.Image} alt='rover' />
      </div>
      <div className='card-body'>
        <h4 className='center'>{user.name}</h4>
        <Link
          to={`/user/${user.id}`}
          style={{ textDecoration: 'none', textAlign: 'center' }}
          className='btn'
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default Card;
