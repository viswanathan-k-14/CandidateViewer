import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ShortlistScreen = () => {
  const [shortlist, setShortlist] = useState([]);

  useEffect(() => {
    let shortlistData = JSON.parse(localStorage.getItem('shortlists'));
    setShortlist(shortlistData);
  }, []);

  return (
    <div className='container'>
      {shortlist &&
        shortlist.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
    </div>
  );
};

export default ShortlistScreen;
