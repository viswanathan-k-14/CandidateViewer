import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Home = () => {
  const [users, setUsers] = useState([]);
  const text = useRef('');
  const [filtered, setFiltered] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  //fetching candidates endpoint
  const fetchData = async () => {
    let usersData = await axios.get(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`
    );
    setUsers(usersData.data);
  };

  //filtering candidates based on search query.
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const filterCandidates = (word) => {
    let userData = users;
    let resultsData = userData.filter((user) => {
      const regex = new RegExp(`${word}`, 'gi');
      return user.name.match(regex);
    });
    setFiltered(resultsData);
  };

  const clearFilter = () => {
    setFiltered(null);
  };

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterCandidates(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <>
      <div className='container'>
        <form>
          <div class='pseudo-search'>
            <input
              type='text'
              placeholder='Search...'
              ref={text}
              onChange={onChange}
              required
            />
          </div>
        </form>
      </div>
      {filtered !== null ? (
        <div className='container'>
          {filtered &&
            filtered.map((user) => {
              return <Card user={user} key={user.id} />;
            })}
        </div>
      ) : (
        <div className='container'>
          {users &&
            users.map((user) => {
              return <Card user={user} key={user.id} />;
            })}
        </div>
      )}
    </>
  );
};

export default Home;
