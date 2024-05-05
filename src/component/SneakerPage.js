import React,{useState, useEffect} from "react" 
import NewSneakerForm from "./NewSneakerForm"
import SneakerList from "./SneakerList"
import SneakerCard from "./SneakerCard" 
import Search from "./Search"

function SneakerPage() { 
    const [sneakers, setSneakers] = useState([])
    const [searchSneaker,setSearchSneaker]= useState("") 

    const addSneaker = (newSneaker) => {
        fetch("http://localhost:3000/sneakers", {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(newSneaker)
        })
        .then((resp)=> resp.json())
        .then((data)=> setSneakers([...sneakers, data]))
    } 

    const filtered = sneakers.filter((sneaker) => { 
        return sneaker.name.toLowerCase().includes(searchSneaker.toLowerCase())
    })

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
            <NewSneakerForm addSneaker={addSneaker}/>
            <SneakerList sneakers={filtered}/>
            <SneakerCard /> 
            <Search searchSneaker={searchSneaker} setSearchSneaker={setSearchSneaker}/>
        </main>
    )
} 

export default SneakerPage; 