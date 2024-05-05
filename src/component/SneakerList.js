import React from "react" 
import SneakerCard from "./SneakerCard";

function SneakerList({sneakers}) { 
    const sneakersListed = sneakers.map(sneaker => { 
        return <SneakerCard key= {sneaker.id} sneaker={sneaker} />
    }) 
    return ( 
        <ul className= "cards"> {sneakersListed}
        </ul>
    )

} 

export default SneakerList; 