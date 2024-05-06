import React, {useState} from "react" 

function NewSneakerForm({addSneaker}) { 
    const[newSneaker,setNewSneaker] = useState({ 
        name: '',
        description:'',
        image:'', 
        retailprice:'', 
        resellprice:'', 
    })

} 

export default NewSneakerForm;  

