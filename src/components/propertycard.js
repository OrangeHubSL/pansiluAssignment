import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div style={cardStyle}>
        
     {property.photos && property.photos.length > 0 && (
        <img
          src={property.photos[0]}  // Assuming the first photo is the main image
          alt={property.address.full}
          style={imageStyle}
        />
      )}
      <h2>{property.address.full}</h2>
      <p>Type: {property.property.type}</p>
      <p>Location: {property.address.city}, {property.address.state}</p>
      <p>Price: {property.listPrice}</p>
      {/* Add other relevant details */}
    </div>
  );
};

const cardStyle = { 
  
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  maxWidth: '700px',
};
const imageStyle = {

    width: '100%',
    height: 'auto',
    marginBottom: '12px',
    borderRadius: '8px',
  };

export default PropertyCard;