import React,{useState, useEffect} from "react" 
import SneakerList from "./SneakerList" 
import Search from "./Search" 
import { useParams } from "react-router-dom";

function SneakerPage() { 
    // states to store the logged information 
    const [sneakers, setSneakers] = useState([]) 
    const [searchSneaker,setSearchSneaker]= useState("")
    const [sneakerSize, setSneakerSize] = useState("All") 
    const params = useParams() 
    const sneakerId = params.id

    // filter out sneakers to match the searched sneaker 
    const filtered = sneakers.filter((sneaker) => { 
        return sneaker.name.toLowerCase().includes(searchSneaker.toLowerCase())
    })

    // create a second dot filter that is going to return in stock or sold out whatever the user chooses in size.
    // come back to this code ... working progress how to get this to work
    const filterSize = sneakers.filter ((sneaker)=> {
        // console.log(typeof sneakerSize)
        // console.log(sneaker.avaliblesizes.includes(6))
        return sneaker.avaliblesizes.includes(parseFloat(sneakerSize))
    })
    // console.log(filterSize)

    // fetches on load 
    useEffect(() =>{
        fetch("http://localhost:3000/sneakers")
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          setSneakers(data)
        })
    }, [])


    return(  
        
        <main> 
            <Search searchSneaker={searchSneaker} setSearchSneaker={setSearchSneaker}/>
            <SneakerList sneakers={filtered} setSneakerSize={setSneakerSize} sneakerId={sneakerId}/>
        </main> 
        

    )
} 

export default SneakerPage; 