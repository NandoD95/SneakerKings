import React,{useState} from "react" 
import SneakerSize from "./SneakerSize"

function SneakerCard({sneaker, setSneakers}) { 

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
          <SneakerSize setSneakers={setSneakers}/>
          <h2> Product Description: <div>{description}</div></h2>
          <p>Retail Price: {retailprice}</p>
          <p>Resell Price: {resellprice}</p> 
          {click ? (
        <button onClick={handleClick} className="primary">Buy Now</button>
      ) : (
        <button onClick={handleClick}>SOLD</button>
      )}
        </li>
      );

} 

export default SneakerCard; 