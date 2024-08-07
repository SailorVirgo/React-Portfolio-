import React from 'react';
import Navigation from './Navigation';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1>Eric Casanova</h1>
      <Navigation />
    </div>
    <div className="profile-pic">
      <img src="/src/assets/images/profilepicturedemo.jpg" alt="Profile Picture" />
    </div>
  </header>
);

export default Header;
