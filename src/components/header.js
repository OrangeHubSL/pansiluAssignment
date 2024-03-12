import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Real Estate Listings</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#007BFF',
  color: 'white',
  padding: '16px',
  textAlign: 'center',
};

export default Header;