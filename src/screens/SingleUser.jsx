import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let usersData = await axios.get(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`
    );
    let data = usersData.data;
    let filtered = data.filter((user) => user.id === id);
    setUser(filtered[0]);
  };

  //storing shortlisted data in localstorage
  const handleShortlist = (e) => {
    if (localStorage.getItem('reject')) {
      let reject = JSON.parse(localStorage.getItem('reject'));
      if (reject.find((list) => list.id === user.id)) {
        reject = reject.filter((list) => list.id !== user.id);
        localStorage.setItem('reject', JSON.stringify(reject));
      }
    }

    if (!localStorage.getItem('shortlists')) {
      let data = [];
      data = [user, ...data];
      localStorage.setItem('shortlists', JSON.stringify(data));
      alert(`${user.name} shortlisted.`);
    } else {
      let data = JSON.parse(localStorage.getItem('shortlists'));
      if (data.find((item) => item.id === user.id)) {
        alert(`${user.name} already shortlisted.`);
        return;
      }
      data = [user, ...data];
      localStorage.setItem('shortlists', JSON.stringify(data));
      alert(`${user.name} shortlisted.`);
    }
  };

  //storing reject data in localStorage.
  const handleReject = (e) => {
    if (localStorage.getItem('shortlists')) {
      let shortlists = JSON.parse(localStorage.getItem('shortlists'));
      if (shortlists.find((list) => list.id === user.id)) {
        shortlists = shortlists.filter((list) => list.id !== user.id);
        localStorage.setItem('shortlists', JSON.stringify(shortlists));
      }
    }

    if (!localStorage.getItem('reject')) {
      let data = [];
      data = [user, ...data];
      localStorage.setItem('reject', JSON.stringify(data));
      alert(`${user.name} rejected`);
    } else {
      let data = JSON.parse(localStorage.getItem('reject'));

      if (data.find((item) => item.id === user.id)) {
        alert(`${user.name} already rejected`);
        return;
      }

      data = [user, ...data];
      localStorage.setItem('reject', JSON.stringify(data));
      alert(`${user.name} rejected`);
    }
  };

  return (
    user && (
      <div className='container'>
        <div className='card'>
          <div className='card-header'>
            <img src={user.Image} alt='rover' />
          </div>
          <div className='card-body'>
            <h4 className='center'>{user.name}</h4>
            <div className='container'>
              <Link
                to='#'
                style={{
                  textDecoration: 'none',
                  display: 'inline',
                  textAlign: 'center',
                }}
                className='btn'
                onClick={handleShortlist}
              >
                Shortlist
              </Link>

              <Link
                to='#'
                style={{ textDecoration: 'none', textAlign: 'center' }}
                className='btn'
                onClick={handleReject}
              >
                Reject
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SingleUser;
