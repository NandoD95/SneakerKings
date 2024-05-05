import React from "react" 

function SneakerCard({sneakers}) { 

    const {id, name, description, image, retailprice, resellprice} = sneakers

    return (
        <li className="card" data-testid="plant-item">
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <h2>Description: {description}</h2>
          <p>Retail Price: {retailprice}</p>
          <p>Resell Price: {resellprice}</p>
        </li>
      );

} 

export default SneakerCard; 