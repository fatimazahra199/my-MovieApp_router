import React, {useState} from 'react'
import movies from "../data/data";
import Filter from "./Filter";
import MovieCard from './MovieCard';

function MovieList() {
 const [movie, setMovies]= useState(movies);

 const [filterTitle, setFilterTitle] = useState('');
 const [filterRating, setFilterRating] = useState(0);

 const handleSearch = (e) => {
    setFilterTitle(e.target.value)
 }

 const handleFilter = (e) => {
    setFilterRating(e.target.value)
 }
 
  
const filtermovies = movie.filter(
    (item) => { return item.Title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        item.rating >=  filterRating 
    }
);
    

  return (
    <div>
        <Filter
        filterTitle ={filterTitle}
        handleSearch ={handleSearch}
        filterRating ={filterRating}
        handleFilter ={handleFilter}
        />
        
    <div className='card-list'>
        {/* {movie.map(movie=> <MovieCard movie={movie} key={movie.id}/>)} */}


        {filtermovies.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
        
        </div> 
        
   </div>
  )
}

export default MovieList