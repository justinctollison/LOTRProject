import React from "react"

function Search({search, setSearch}) {
    return (
        <div className="search">
            <label htmlFor="search"><h3>Search</h3></label>
            <input 
                type="text" 
                id="search" 
                placeholder="Search by Name/Race" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search