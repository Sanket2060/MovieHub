import { useState, useEffect } from "react";
import React from 'react'
import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
// CSS knowledge lacks here
function Search() {
  const [movieSearch, setmovieSearch] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const myRef = useRef(null);
  const movieSearchRef = useRef(null);
  const TVSeriesSearchRef = useRef(null);
  const SearchLogic = () => {
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
          .then(response => setData(response.results))
          .catch(err => console.error(err));
        break;

      default:
        //Movies
        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=true&language=en-US&page=1'`, options)
          .then(response => response.json())
          .then(response => setData(response.results))
          .catch(err => console.error(err));
        break;
    }
    myRef.current.value = " "
  }
  useEffect(() => {
    console.log(data);


  }, [data])
  //  useEffect(() => {
  //    if (movieSearch){
  //       movieSearchRef.current.className.addClassName("underline");
  //       .current.className.addClassName("underline");

  //    }
  //    else{

  //    }


  //  }, [movieSearch])



  return (
    <>
      <div className='bg-[#22254b] min-h-[700px] flex flex-col items-center p-8'>

        {/* <form action=""> */}
        <div className="flex">

          <input type="search" name="" id="" placeholder='Search' className='w-[1200px] h-10 p-4' ref={myRef} onChange={(e) => {
            setSearchValue(e.currentTarget.value);
          }} />
          <div type="submit" className='border-2 hover:cursor-pointer ' onClick={(e) => {
            e.preventDefault();
            SearchLogic();
          }}><FiSearch className='text-white text-4xl' /></div>
          </div>
        {/* </form> */}
        <div className="choose  text-[#9fafb8] flex justify-start w-[1235px] m-7 text-xl placeholder:text-2xl placeholder:pl-3">
          <button className={`m-5 ${movieSearch==true?'underline':''}  `} onClick={() => { setmovieSearch(true) }} ref={movieSearchRef}>Search Movies</button>
          <button onClick={(e) => {
            setmovieSearch(false)
          }} ref={TVSeriesSearchRef}
          className={`m-5 ${movieSearch==false?'underline':''}  `}
          >Search TVSeries</button>
        </div>
        <div className="movies grid grid-cols-4 justify-items-center gap-14 pb-20">
          {
            (data.length > 0) ?

              data.map((movie) => {

                return (
                  <div className="movie w-[300px] h-[450px] bg-black" key={movie.id}>
                    {
                      movie.poster_path ?

                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie image" className='h-[395px] bg-cover' />
                        : <img src="https://cdn.dribbble.com/users/47195/screenshots/524523/cantfind.jpg" alt="movie image" className='h-[395px] bg-cover' />

                    }
                    <div className="description text-white flex justify-between px-5 py-3 bg-[#373b69] ">
                      <span className="moviename font-bold text-xl ">{movie.original_title}</span>
                      <span className="rating bg-black w-9 h-9 flex justify-center items-center">{movie.vote_average.toFixed(1)}</span>
                    </div>
                  </div>
                )
              }) : <div className="text-white text-2xl text-center  ">Search above to get results</div>
          }


        </div>
      </div>
    </>

  )
}

export default Search