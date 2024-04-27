import React from 'react'
import { useState,useEffect } from 'react';
function Body({ pageName = "Trending Today" }) {
  const [data, setData] = useState([])
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjBlZWFjNTJhNmNhZTM5ZjQ5YzFjZjA5Yjk0MjdkNiIsInN1YiI6IjY1NTM0ZWQ1MDgxNmM3MDBjM2RhOGY4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mRL8Ur8nypSWsAofUiWGzi9mzTg0CNM1hs8edi5b2cg'
      }
    };
    switch (pageName) {
      case "Trending Today":
        fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      .then(response => response.json())
      .then(response => {
        // console.log(response.results)
        setData(response.results);
      }
        )
      .catch(err => console.error(err));
        break;
      
      case "Movies":
        console.log("Reached movies");
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));
        break;

        case "TVSeries":
      fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => setData(response.results))
  .catch(err => console.error(err))
        break;
    } 
  },[])
  

  useEffect(() => {
    console.log(`${pageName} data:`,data);
  }, [data]);
  
  
  
  
  return (
    <>
      <div className="movies-box bg-[#22254b] min-h-[700px]  ">
        <div className="pagename text-[#9fafb8] text-3xl text-center py-14">{pageName}</div>
        <div className="movies grid grid-cols-1 gap-8  sm:grid-cols-2 sm:gap-0 sm:gap-y-8 sm:pb-28 md:gap-14 lg:grid-cols-3 lg:gap-x-0 xl:grid-cols-4 xl:gap-y-10 justify-items-center xl:gap-5 pb-28" >
        {
           (data.length>0)?
    
            data.map((movie)=>{

              return(
                <div className="movie hover:cursor-pointer w-[300px] h-[450px] bg-black" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie image" className='h-[395px] bg-cover'/>                  
            <div className="description text-white flex justify-between px-5 py-3 bg-[#373b69] ">
              <span className="moviename font-bold text-xl ">{(pageName== "TVSeries")?movie.name:movie.original_title|| movie.name}</span>
              <span className="rating bg-black w-9 h-9 flex justify-center items-center">{movie.vote_average.toFixed(1)}</span>
            </div>
          </div>
                )
              }):  <div className='text-white text-2xl'>Loading...</div>
            }
          
        
            </div>
      </div>
    </>
  )
}

export default Body