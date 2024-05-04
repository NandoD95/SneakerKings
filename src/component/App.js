import React, {useEffect, useState} from "react"
// import './App.css'; 
import Header from "./Header"
import SneakerPage from "./SneakerPage"

function App() {
  const [sneakers, setSneakers] = useState([])

  useEffect(() =>{
    fetch ('http://localhost:3000')
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setSneakers(data)
    })
  }, [])

  return (
    <div className="App"> 
    <Header classname="App-header"/>
    <SneakerPage sneakers={sneakers}/>
    </div>
  );
}

export default App;
