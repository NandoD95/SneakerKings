import React from "react" 


function Search({searchSneaker,setSearchSneaker}) { 

    // handle the searched sneaker
     const handleChange = (e) => { 
        setSearchSneaker(e.target.value)
     }


    return (
        <form className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="Search..." 
                value = {searchSneaker} 
                onChange = {handleChange} 
            />
        </form>
    )
} 

export default Search;