import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Tech.C</div>
      <nav>
        <ul>
          <li>Overview</li>
          <li>Patients</li>
          <li>Schedule</li>
          <li>Message</li>
          <li>Transactions</li>
        </ul>
      </nav>
      <div className="profile">
        <img src="profile-pic.jpg" alt="Dr. Jose Simmons" />
        <span>Dr. Jose Simmons</span>
      </div>
    </header>
  );
};

export default Navbar;
