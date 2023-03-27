import React from 'react'


function Filter ({filterTitle, handleSearch, handleFilter, filterRating })  {
  return (
    <div>
        <input 
        type="text"
        placeholder='Search by text'
        value={filterTitle}
        onChange={handleSearch}
        />
        <input 
        type="number"
        placeholder='Filter by rating'
        min="0"
        max= "10"
        step="0.1"
        value={filterRating}
        onChange={handleFilter}
        />
    
    </div>
  )
}



export default Filter
