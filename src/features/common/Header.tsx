import React from 'react';
import {Link} from 'react-router-dom';

export const NavigationHeader = () => {

  return (
    <>
      <h1>Header</h1>
      <ul>
        <li><Link to="/">Coderators</Link></li>
        <li><Link to="/categories/">Categories</Link></li>
        <li><Link to="/tags/">Tags</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/language">Language</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </>
  );
}

