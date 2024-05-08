import React from "react" 
import SneakerCard from "./SneakerCard";

function SneakerList({sneakers, setSneakerSize, filterSize, sneakerId}) { 

    // CREATING A COPY OF THE ORIGINAL ARRAY STORED IN sneakers TO CREATE A NEW ARRAY TO DISPLAY IN REACT 
    // const sneakersListed = sneakers.map(sneaker => { 
    //     return <SneakerCard key= {sneaker.id} sneaker={sneaker} />
    // }) 

    return ( 
        <ul className= "cards"> {sneakers.map((sneaker) =>(
            <SneakerCard 
                key={sneaker.id}
                sneaker={sneaker} 
                setSneakersSize={setSneakerSize}
                filterSize={filterSize}
                sneakerId={sneakerId}/>
        ))}
        </ul>
    )

} 

export default SneakerList; 