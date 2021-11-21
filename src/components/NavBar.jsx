import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shortlisted'>Shortlisted</Link>
        </li>
        <li>
          <Link to='/rejected'>Rejected</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Candidate Viewer',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Navbar;
