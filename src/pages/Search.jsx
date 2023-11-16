import { useState } from "react";
import React from 'react'
import { FiSearch } from "react-icons/fi";
// CSS knowledge lacks here
const [movieSearch,setmovieSearch]=useState(true);
const [searchValue,setSearchValue]=useState("");
 const search=()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjBlZWFjNTJhNmNhZTM5ZjQ5YzFjZjA5Yjk0MjdkNiIsInN1YiI6IjY1NTM0ZWQ1MDgxNmM3MDBjM2RhOGY4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mRL8Ur8nypSWsAofUiWGzi9mzTg0CNM1hs8edi5b2cg'
    }
  };
  switch (movieSearch) {
    case false:
      // TVSeries
      fetch(`https://api.themoviedb.org/3/search/tv?query=${searchValue}&include_adult=true&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      break;
  
    default:
      //Movies
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=true&language=en-US&page=1'`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      break;
  }
 }
function Search() {
  return (
    <>
      <div className='bg-[#22254b] h-[700px] flex flex-col items-center p-8'>

          <form action="">
            <input type="search" name="" id="" placeholder='Search' className='w-[1200px] h-10' onChange={(e)=>{
              setSearchValue(e.currentTarget.value);
            }} />
            <button type="submit" className='border-2' onClick={(e)=>{
              e.preventDefault();
              search();
            }}><FiSearch className='text-white text-4xl' /></button>
          </form>
          <div className="choose  text-[#9fafb8] flex justify-start w-[1235px] m-7 text-xl placeholder:text-2xl placeholder:pl-3">
            <button className='m-5' onClick={setmovieSearch(true)}>Search Movies</button>
            <button onClick={setmovieSearch(false)}>Search TVSeries</button>
          </div>

        </div>
    </>

  )
}

export default Search