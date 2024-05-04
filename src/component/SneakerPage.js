import React,{useState, useEffect} from "react" 
import Search from "./Search"

function SneakerPage() { 
    const [sneakers, setSneakers] = useState([])
    const [searchSneaker,setSearchSneaker]= useState("") 

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

        </main>
    )
} 

export default SneakerPage; 