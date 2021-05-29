import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='ui fixed menu mb-5'>
      <div className="ui container center">
        <h3><Link to='/'>My Shop</Link></h3>
      </div>
    </header>
  );
};

export default Header;