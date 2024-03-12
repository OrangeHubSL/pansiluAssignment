import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by location, price range, etc."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;