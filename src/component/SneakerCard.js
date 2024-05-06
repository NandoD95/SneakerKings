import React from "react" 

function SneakerCard({sneaker}) { 

    // destructuring item object 
    const {id, name, description, image, retailprice, resellprice} = sneaker

    return (
        <li className="card" data-testid="sneaker-item">
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <h2> Product Description: <div>{description}</div></h2>
          <p>Retail Price: {retailprice}</p>
          <p>Resell Price: {resellprice}</p>
        </li>
      );

} 

export default SneakerCard; 