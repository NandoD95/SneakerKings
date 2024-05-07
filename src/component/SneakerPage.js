import React,{useState, useEffect} from "react" 
import NewSneakerForm from "./NewSneakerForm"
import SneakerList from "./SneakerList" 
import Search from "./Search"

function SneakerPage() { 
    // states to store the logged information 
    const [sneakers, setSneakers] = useState([]) 
    const [searchSneaker,setSearchSneaker]= useState("")
    const [sneakerSize, setSneakerSize] = useState("All")

    // function to add sneaker and post to db.json
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

    // filter out sneakers to match the searched sneaker 
    const filtered = sneakers.filter((sneaker) => { 
        return sneaker.name.toLowerCase().includes(searchSneaker.toLowerCase())
    })

    // create a second dot filter that is going to return in stock or sold out whatever the user chooses in size.
    const filterSize = sneakers.filter ((sneaker)=> {
        return sneaker.avaliblesizes
    })

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
            <NewSneakerForm addSneaker={addSneaker}/>
            <SneakerList sneakers={filtered} setSneakerSize={setSneakerSize} filterSize={filterSize}/>
        </main>
    )
} 

export default SneakerPage; 