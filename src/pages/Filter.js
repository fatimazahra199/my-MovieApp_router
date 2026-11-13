import React from 'react'

function Filter ({filterTitle, handleSearch, handleFilter, filterRating })  {
  return (
    <div className="input">
      {/* <h3> Trending </h3> */}

      <div className="inputs">
        {/* Search by movie title */}
        <input
          type="text"
          placeholder="Search by text"
          value={filterTitle}
          onChange={handleSearch}
          className="input_t"
        />
        {/* Show only movies with rating >= this number */}
        <input
          type="number"
          placeholder="Filter by rating"
          min="0"
          max="10"
          step="0.1"
          value={filterRating}
          onChange={handleFilter}
          className="input_f"
        />
      </div>
    </div>
  );
}

export default Filter
