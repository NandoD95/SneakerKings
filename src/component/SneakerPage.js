import React,{useState, useEffect} from "react" 
import NewSneakerForm from "./NewSneakerForm"
import SneakerList from "./SneakerList"
import SneakerCard from "./SneakerCard"

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
            <SneakerList />
            <SneakerCard />
        </main>
    )
} 

export default SneakerPage; 