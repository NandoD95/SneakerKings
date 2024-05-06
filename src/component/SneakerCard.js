import React,{useState} from "react" 

function SneakerCard({sneaker}) { 

    // destructuring item object 
    const {id, name, description, image, retailprice, resellprice} = sneaker
    const [click,setClick] = useState(true)  

    function handleClick() { 
      setClick(!click) 
    } 


    return (
        <li className="card" data-testid="sneaker-item">
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <h2> Product Description: <div>{description}</div></h2>
          <p>Retail Price: {retailprice}</p>
          <p>Resell Price: {resellprice}</p> 
          {click ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
        </li>
      );

} 

export default SneakerCard; 