import React, {useEffect, useState} from "react";
import axios from "axios";




function Banner(){

    const [movieObj,setMovieObj] = useState({});
    //using useEffect to stop infinite request to brower API.
    //It's limiting the execution in the mounting phase.
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=ca61a0ae2771cdaa899e3da7b14da87b')
        .then(function (response) {
        // handle success
        //Math.floor(Math.random()*20);
        let movies = response.data.results;
        //console.log(movies);
        let randomMovies = movies[Math.floor(Math.random()*20)];
        //console.log(randomMovies);

       // console.log(response);
        setMovieObj(randomMovies);
    })
    },[])
   
    if(movieObj.backdrop_path === undefined){
        return<> ....Loading</>
    }

    return (
            <div className="flex justify-center items-end h-[70vh] bg-cover bg-no-repeat"
                style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}} 
            >
                <div className="text-white py-4 bg-gray-800 w-full text-center text-lg decoration-solid">
                    {movieObj.title}
                </div>   
            </div>
    )
}

export default Banner;