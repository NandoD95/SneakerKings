import React from 'react';
import { useLocation } from 'react-router-dom';

function SneakerDetail() {
  const location = useLocation();
  const { name, description, image } = location.state;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
}

export default SneakerDetail;