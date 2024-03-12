import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Real Estate Listings. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#007BFF',
  color: 'white',
  padding: '8px',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  
};


export default Footer;