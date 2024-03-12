import React from 'react';

const Pagination = ({ currentPage, totalProperties, propertiesPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalProperties / propertiesPerPage);

  // Generate an array of page numbers from 1 to totalPages
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div style={paginationStyle}>
      <p>Page {currentPage} of {totalPages}</p>
      <div style={buttonContainerStyle}>
        {pageNumbers.map((page) => (
          <button
            key={page}
            style={buttonStyle}
            onClick={() => onPageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
          
        ))}
      </div>
    </div>
  );
};

const paginationStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '16px',
};

const buttonContainerStyle = {
  display: 'flex',
  
};

const buttonStyle = {
  marginLeft: '8px',
  padding: '8px',
  cursor: 'pointer',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  
};

export default Pagination;