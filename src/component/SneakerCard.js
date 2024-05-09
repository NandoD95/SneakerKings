import React,{useState} from "react" 
import SneakerSize from "./SneakerSize" 
import {Link} from 'react-router-dom'


function SneakerCard({sneaker, setSneakersSize}) { 
    // destructuring item object 
    const {id, name, description, image, retailprice, resellprice} = sneaker
    
    // declaring the click state to true
    const [click, setClick] = useState(true)  

    // function to switch the states of the variable click
    function handleClick() { 
      setClick(!click) 
    } 


    return (
        <li className="card" data-testid="sneaker-item">
          <img src={image} alt={name} />
          <h4>{sneaker.name}</h4>
          <SneakerSize setSneakersSize={setSneakersSize}/>
          <p><Link to={`/SneakerDetail/${id}`}>View Info</Link></p>
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