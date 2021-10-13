import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <Link to='/' className='navbar-brand'>
          xProds
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
