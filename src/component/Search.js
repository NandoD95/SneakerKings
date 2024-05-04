import React from "react" 


function Search() { 


    return (
        <form className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="search..."
            />
            <button>🔘</button>
        </form>
    )
} 

export default Search;