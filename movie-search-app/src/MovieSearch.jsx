import React, { useState } from "react";

function MovieSearch({onSearch}) {
    const [name, setName] = useState("")

    const handleInput = (e) => {
        setName(e.target.value)
       
    }

    const handleSearch = () => {
        if(name.trim() === "")
            return alert("Movie not found")
        onSearch(name)
        
    }


    return(
        <div >
            <div>
                <h2 className="text-4xl ">Movie Search App</h2>
                <input onChange={handleInput} type="text" placeholder="Enter Movie" className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500 mt-6"/>
                <button onClick={handleSearch} className="border border-gray-500 px-4 py-2 rounded ml-2 bg-gray-200" >Search</button>
            </div>
        </div>
    )

}

export default MovieSearch