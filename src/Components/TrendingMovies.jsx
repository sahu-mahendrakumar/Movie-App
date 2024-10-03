// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import MovieCard from "./MovieCard";
// import Pagination from "./Pagination";

// function TrendingMovies() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     axios
//       .get('https://api.themoviedb.org/3/trending/movie/day?api_key=ca61a0ae2771cdaa899e3da7b14da87b')
//       .then(function(response) {
//         // handle success
//         setMovies(response.data.results);
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch(function(error) {
//         console.error('Error fetching trending movies:', error);
//         setLoading(false); // Set loading to false on error as well
//       });
//   }, []);
//   if (loading) {
//     return <p className="text-center font-bold text-lg py-2">Loading...</p>;
//   }
//   return (
//     <>
//       <div className="text-center font-bold text-lg py-2">Trending Movies</div>
//       <div className="flex flex-wrap justify-around gap-4 p-4">
//         {movies.map((movie) => (
//           <MovieCard
//             key={movie.id}
//             title={movie.title}
//             poster_path={movie.poster_path}
//           />
//         ))}
//       </div>
//       <Pagination />
//     </>
//   );
// }
// export default TrendingMovies;


import React, { useContext, useEffect, useState } from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard'
import axios from 'axios';
import { MovieContext } from './MovieContext';

function TrendingMovies() {
  const {pageNo} = useContext(MovieContext);
  const [movies,setMovies] = useState([]);
  
  useEffect(()=>{
   
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ca61a0ae2771cdaa899e3da7b14da87b&page=${pageNo}`)
    .then(function (response) {
      setMovies(response.data.results)
    })
  },[pageNo]) //it will make sure to execute callback in mounting as well as on updation of pageNo state

  // console.log(movies);
  if(movies.length === 0){
    return<>...Loading</>
  }

  return (
    <>
      <div className='text-center text-2xl font-bold m-4'>Trending Movies</div>
      <div className='mx-2 flex flex-wrap justify-around gap-4'>
        {
          movies.map((movieObj)=>{
            return <MovieCard 
                      key={movieObj.id}
                      movieObj={movieObj}
                      title={movieObj.title} 
                      poster_path={movieObj.poster_path}
                   />
          })
        }
      </div>
      <Pagination />
    </>
  )
}

export default TrendingMovies