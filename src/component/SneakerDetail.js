import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function SneakerDetail() {
  const {id} = useParams()
  // states to store the logged information
  const [displayInfo, setDisplayInfo] = useState([])
  // ddestructuring item object
  const {name, image, description, resellprice} = displayInfo


// fetching the id from json
  useEffect(() =>{
    fetch(`http://localhost:3000/sneakers/${id}`)
    .then((resp) => resp.json())
    .then((data) => setDisplayInfo(data) )
}, [])

// what view info button shows
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h2>Product Decription: {description}</h2>
      <h3>Resell Price: {resellprice}</h3>
    </div>
  );
}

export default SneakerDetail;