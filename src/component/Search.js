import React from "react" 


function Search({searchSneaker,setSearchSneaker}) { 
     const handleChange = (e) => { 
        setSearchSneaker(e.target.value)
     }


    return (
        <form className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="search..." 
                value = {searchSneaker} 
                onChange = {handleChange} 
            />
            <button>🔘</button>
        </form>
    )
} 

export default Search;