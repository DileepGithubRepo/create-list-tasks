import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    return (
      <div className="nav-wrapper">
        <a href="/">Logo</a>
        <nav>
          <ul>
            <li><Link to="/CreateTask">Create a Task</Link></li>
            <li><Link to="/TaskListing">Task List</Link></li>
          </ul>
        </nav>
      </div>
    );
};

export default NavBar;