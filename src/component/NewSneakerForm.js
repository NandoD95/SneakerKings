import React, {useState} from "react" 

function NewSneakerForm({addSneaker}) { 
    const[newSneaker,setNewSneaker] = useState({ 
        name: '', 
        image:'', 
        retailprice:'', 
        resellprice:'', 
        description:''
    })

} 

export default NewSneakerForm;  

