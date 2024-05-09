import React, {useState} from "react" 

function NewSneakerForm() { 
  // states to store the logged information 
  const [sneakers, setSneakers] = useState([])

    const[newSneaker,setNewSneaker] = useState({ 
        name: '',
        description:'',
        image:'', 
        retailprice:'', 
        resellprice:'', 
    })

    //updates newSneaker based on users input in form and keeps data synchronized
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSneaker((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };


    // prevents the default behavior, adding new sneaker data and then resetting form back to its empty value
    const handleSubmit = (e) => {
        e.preventDefault();
        addSneaker(newSneaker);
        setNewSneaker({
          name: "",
          description: "",
          image: "",
          retailprice: "",
          resellprice: "",
        });
      };

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

    return (
        <div className="add-sneaker">
           <h3>Add Sneakers For Sale</h3>
              <div>
                  <form onSubmit={handleSubmit}>
                    <input type="text, number" name="name" value={newSneaker.name} placeholder="Sneaker Name" onChange={handleChange}/>
                    <input type="text, number" name="description" value={newSneaker.description} placeholder="Description" onChange={handleChange} />
                    <input type="text, number" name="image" value={newSneaker.image} placeholder="Image URL" onChange={handleChange}/>
                    <input type="text, number" name="retailprice" value={newSneaker.retailprice} placeholder="Retail Price" onChange={handleChange}/>
                    <input type="text, number" name="resellprice" value={newSneaker.resellprice} placeholder="Resell Price" onChange={handleChange} />
                    <button id="button" type="submit">Add Sneaker</button>
                  </form>
              </div>
        </div>
    )
} 

export default NewSneakerForm;  

