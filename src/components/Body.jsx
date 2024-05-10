import { useState, useEffect } from 'react';
import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { AiTwotoneStar } from "react-icons/ai";
import { IoCaretBackCircle } from "react-icons/io5";// import { Cross2Icon } from '@radix-ui/react-icons';

function Body({ pageName = "Trending Today" }) {
  const [data, setData] = useState([])
  const [furtherDetails, setFurtherDetails] = useState(
  );
  const [videoKey,setVideoKey]=useState();
  const movieGenres = {
    "Action": 28,
    "Adventure": 12,
    "Animation": 16,
    "Comedy": 35,
    "Crime": 80,
    "Documentary": 99,
    "Drama": 18,
    "Family": 10751,
    "Fantasy": 14,
    "History": 36,
    "Horror": 27,
    "Music": 10402,
    "Mystery": 9648,
    "Romance": 10749,
    "Science Fiction": 878,
    "TV Movie": 10770,
    "Thriller": 53,
    "War": 10752,
    "Western": 37
  }
  const tvShowGenres = {
    "Action & Adventure": 10759,
    "Animation": 16,
    "Comedy": 35,
    "Crime": 80,
    "Documentary": 99,
    "Drama": 18,
    "Family": 10751,
    "Kids": 10762,
    "Mystery": 9648,
    "News": 10763,
    "Reality": 10764,
    "Sci-Fi & Fantasy": 10765,
    "Soap": 10766,
    "Talk": 10767,
    "War & Politics": 10768,
    "Western": 37
  };

  const [credits, setCredits] = useState([]);
  useEffect(() => {
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
  }, [])


  useEffect(() => {
    console.log(`${pageName} data:`, data);
  }, [data]);






  return (
    <>

      <div className="movies-box bg-[#22254b] min-h-[700px]  ">
        <div className="pagename text-[#9fafb8] text-3xl text-center py-14">{pageName}</div>
        <div className="movies grid grid-cols-1 gap-8  sm:grid-cols-2 sm:gap-0 sm:gap-y-8 sm:pb-28 md:gap-14 lg:grid-cols-3 lg:gap-x-0 xl:grid-cols-4 xl:gap-y-10 justify-items-center xl:gap-5 pb-28" >
          {
            (data.length > 0) ?

              data.map((movie) => {


                return (
                  <>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button className="" onClick={() => {
                          //  fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=`+process.env.myAPI)
                          fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=db0eeac52a6cae39f49c1cf09b9427d6`)

                            .then(response => response.json())
                            .then(response => {
                              console.log(response);
                              setFurtherDetails(response);
                            }
                            )
                            .catch(err => console.error(err));
                          fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`, {
                            method: 'GET',
                            headers: {
                              accept: 'application/json',
                              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjBlZWFjNTJhNmNhZTM5ZjQ5YzFjZjA5Yjk0MjdkNiIsInN1YiI6IjY1NTM0ZWQ1MDgxNmM3MDBjM2RhOGY4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mRL8Ur8nypSWsAofUiWGzi9mzTg0CNM1hs8edi5b2cg'
                            }
                          })

                            .then(response => response.json())
                            .then(response => {
                              console.log("credits", response);
                              setCredits(response.cast);
                            }
                            )
                            .catch(err => console.error(err));
                          fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,  {
                            method: 'GET',
                            headers: {
                              accept: 'application/json',
                              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjBlZWFjNTJhNmNhZTM5ZjQ5YzFjZjA5Yjk0MjdkNiIsInN1YiI6IjY1NTM0ZWQ1MDgxNmM3MDBjM2RhOGY4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mRL8Ur8nypSWsAofUiWGzi9mzTg0CNM1hs8edi5b2cg'
                            }
                        })
                            .then(response => response.json())
                            .then(response => 
                              {
                                console.log(response)
                                setVideoKey(response?.results[0].key)
                              }
                            )
                            .catch(err => console.error(err));
                        }}

                        >


                          <div
                            className="movie rounded-md hover:cursor-pointer w-[300px] h-[450px] bg-black"
                            key={movie.id}
                          >
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie image" className='h-[395px] w-[100%] bg-cover rounded-t-md' />
                            <div className="description text-white flex justify-between px-5 py-3 bg-[#373b69] rounded-b-md ">
                              <span className="moviename font-bold text-xl ">{(pageName == "TVSeries") ? movie.name : movie.original_title || movie.name}</span>
                              <span className="rating min-w-[2.25rem] h-9 flex justify-center items-center bg-yellow-400 text-black">{movie.vote_average.toFixed(1)}</span>
                            </div>
                          </div>

                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] rounded-t-3xl max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%]  bg-white  pt-0 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none font-sans ">
                          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 h-fit" />

                          <div className='overflow-auto max-h-[75vh]'>
                            <Dialog.Close asChild>

                            <button className='absolute z-50 top-7 left-5'><IoCaretBackCircle size={38} /></button>
                            </Dialog.Close>
                            <div className='w-full largemobile:h-80 rounded-3xl'>
                              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie image" className='h-[50vh] w-full rounded-3xl' />
                            </div>
                            <div className='movie rounded-2xl shadow-xl  p-5 border sticky top-[0] left-[5%] sm:left-[10%] bg-white w-[90%] sm:w-[80%]  sm:visible'>

                              <div className="movieinfo flex justify-between">
                                <div className="name flex flex-col items-center pb-4">
                                  <div className='font-bold text-2xl'>{movie.name || movie.title}</div>
                                  <div className='flex self-start '>
                                    {
                                      // parseInt(movie?.vote_average) /2 and then print that number of stars(AiTwotoneStar) 
                                    }
                                    <AiTwotoneStar className=' bg-[#f7c614] rounded-full' />
                                    <AiTwotoneStar className=' bg-[#f7c614] rounded-full' />
                                    <AiTwotoneStar className=' bg-[#f7c614] rounded-full' />
                                    <AiTwotoneStar className=' bg-[#f7c614] rounded-full' />
                                  </div>

                                </div>
                                <Link 
                                to={`https://www.youtube.com/watch?v=${videoKey}`}
                                className="youtube pr-8 flex items-baseline"
                                target='_blank'
                                >
                                  <FaYoutube size={44} />
                                </Link>
                              </div>
                              <div className="moredetails flex justify-between ">
                                <div className="year flex flex-col">
                                  <div className='font-bold'>Year</div>
                                  <div className='font-thin'>{furtherDetails?.release_date ? furtherDetails?.release_date.slice(0, 4) : '-'}</div>
                                </div>
                                <div className="type">
                                  <div className='font-bold'>Type</div>
                                  <div className='font-thin'>Drama</div>
                                </div>
                                <div className="Hour">
                                  <div className='font-bold'>Hour</div>
                                  {
                                    furtherDetails?.runtime ?
                                      <div className='font-thin'>{parseInt(furtherDetails?.runtime / 60)}hrs {(furtherDetails?.runtime % 60).toFixed(0)}mins </div>
                                      :
                                      ' - '
                                  }
                                </div>
                                <div className="Director">
                                  <div className='font-bold'>Director</div>
                                  <div className='font-thin'>Spike Joulus</div>
                                </div>

                              </div>
                            </div>
                            <div className='movie-description p-5 sm:mt-10 w-full'>
                              <div className="plotsummary">
                                <div className="title font-bold mb-1">Plot Summary</div>
                                <div className='font-thin text-sm mb-1'>{furtherDetails?.overview}</div>
                              </div>
                              <div className='flex justify-around'>
                                {
                                  furtherDetails?.genres?.map((item) => {
                                    return (<span className='font-thin'>{item.name}</span>)
                                  })
                                }
                              </div>
                              <div className="cast  flex flex-col">
                                <div className="title font-bold mb-4">Cast</div>
                                <div className="people flex justify-between">
                                  {
                                    credits?.slice(0, 4).map((item) => {

                                      return (
                                        <div className="people1 w-1/4">
                                          {
                                            item.profile_path ?
                                              <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                                                className='w-14 h-14 rounded-md'
                                                alt="" /> :
                                              <img src="https://cdn.dribbble.com/users/47195/screenshots/524523/cantfind.jpg"
                                                alt="movie image"
                                                className='w-14 h-14 rounded-md' />

                                          }
                                          <div className="name font-thin w-14 overflow-wrap">{item.name}</div>
                                        </div>

                                      )
                                    })
                                  }
                                </div>
                              </div>
                            </div>
                          </div>


                        </Dialog.Content>
                      </Dialog.Portal>

                    </Dialog.Root>
                  </>
                )
              }) : <div className='text-white text-2xl'>Loading...</div>
          }


        </div >
      </div>
    </>
  )
}

export default Body