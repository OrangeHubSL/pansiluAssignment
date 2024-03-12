import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar';
import PropertyCard from './propertycard';
import Pagination from './pagination';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchParams, setSearchParams] = useState({ location: '', priceRange: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 10;

  useEffect(() => {
    // Fetch data from the API on component mount
    fetchData();
  }, []);

  useEffect(() => {
    // Update filteredProperties whenever properties or searchParams change
    filterProperties();
  }, [properties, searchParams]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.simplyrets.com/properties', {
        headers: {
          Authorization: 'Basic ' + btoa('simplyrets:simplyrets'),
        },
      });
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterProperties = () => {
    // Filter properties based on search parameters
    const filtered = properties.filter(property => {
      const { location, priceRange } = searchParams;

      // Check if the property matches the search criteria
      return (
        property.address.full.toLowerCase().includes(location.toLowerCase()) &&
        (priceRange === '' || property.listPrice <= parseInt(priceRange, 10))
      );
    });

    setFilteredProperties(filtered);
  };

  const handleSearch = () => {
    // Triggered when the search button is clicked
    // Update filtered properties based on search parameters
    filterProperties();
  };

  const handlePageChange = (newPage) => {
    // Triggered when a pagination button is clicked
    // Update current page
    setCurrentPage(newPage);
  };

  // Calculate the index range for the properties to be displayed on the current page
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;

  // Display only the properties for the current page
  const currentProperties = filteredProperties.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Property Listings</h1>
      
      {/* Search Bar Component */}
      <SearchBar 
        searchParams={searchParams}
        onSearchParamsChange={setSearchParams}
        onSearch={handleSearch}
      />

      {/* Property Cards Component */}
      {currentProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}

      {/* Pagination Component */}
      <Pagination 
        currentPage={currentPage}
        totalProperties={filteredProperties.length}
        propertiesPerPage={propertiesPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PropertyList;