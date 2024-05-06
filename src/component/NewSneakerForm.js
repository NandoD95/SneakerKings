import React, {useState} from "react" 

function NewSneakerForm({addSneaker}) { 
    const[newSneaker,setNewSneaker] = useState({ 
        name: '',
        description:'',
        image:'', 
        retailprice:'', 
        resellprice:'', 
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSneaker((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        addSneaker(newSneaker);
        setNewSneaker({
          name: "",
          description: "",
          image: "",
          retailprice: "",
          resellprice: ""
        });
      };

    return (
        <div className="add-sneaker">
           <h2>Add Sneakers For Sale</h2>
           <form onSubmit={handleSubmit}>
             <input type="text" name="name" value={newSneaker.name} placeholder="Sneaker Name" onChange={handleChange}/>
             <input type="text" name="name" value={newSneaker.description} placeholder="Description" onChange={handleChange} />
             <input type="text" name="image" value={newSneaker.image} placeholder="Image URL" onChange={handleChange}/>
             <input type="number" name="retail-price" value={newSneaker.retailprice}  placeholder="Retail Price" onChange={handleChange}/>
             <input type="number" name="resell-price" value={newSneaker.resellprice} placeholder="Resell Price" onChange={handleChange} />
             <button type="submit">Add Plant</button>
           </form>
        </div>
    )
} 

export default NewSneakerForm;  

