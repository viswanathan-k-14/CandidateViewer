import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const RejectScreen = () => {
  const [reject, setReject] = useState([]);

  useEffect(() => {
    let rejectData = JSON.parse(localStorage.getItem('reject'));
    setReject(rejectData);
  }, []);

  return (
    <div className='container'>
      {reject &&
        reject.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
    </div>
  );
};

export default RejectScreen;
