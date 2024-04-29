import { useState, useEffect } from 'react';
import React from 'react';
import { FaYoutube } from "react-icons/fa";
import * as Dialog from '@radix-ui/react-dialog';
import { AiTwotoneStar } from "react-icons/ai";
// import { Cross2Icon } from '@radix-ui/react-icons';

function Body({ pageName = "Trending Today" }) {
  const [data, setData] = useState([])
  const [furtherDetails, setFurtherDetails] = useState(
  );
  const [credits, setCredits] = useState();
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
                        }} >


                          <div
                            className="movie hover:cursor-pointer w-[300px] h-[450px] bg-black"
                            key={movie.id}
                          >
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie image" className='h-[395px] bg-cover' />
                            <div className="description text-white flex justify-between px-5 py-3 bg-[#373b69] ">
                              <span className="moviename font-bold text-xl ">{(pageName == "TVSeries") ? movie.name : movie.original_title || movie.name}</span>
                              <span className="rating bg-black w-9 h-9 flex justify-center items-center">{movie.vote_average.toFixed(1)}</span>
                            </div>
                          </div>

                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] rounded-t-3xl max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%]  bg-white  pt-0 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none font-sans ">
                          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 h-fit" />

                          <div className='container  '>
                            <div className=''>
                              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie image" className='h-[200px] w-fit rounded-3xl' />
                            </div>
                            <div className='movie rounded-2xl shadow-xl  p-5 border absolute top-[11rem] bg-white w-full'>

                              <div className="movieinfo flex justify-between">
                                <div className="name flex flex-col items-center pb-4">
                                  <span className='font-bold text-2xl'>{movie.name}</span>
                                  <div className='flex '>
                                    <AiTwotoneStar className=' bg-[#f7c614] rounded-full' />
                                    <AiTwotoneStar className=' bg-[#f7c614] rounded-full' />
                                    <AiTwotoneStar className=' bg-[#f7c614] rounded-full' />
                                    <AiTwotoneStar className=' bg-[#f7c614] rounded-full' />
                                  </div>

                                </div>
                                <div className="youtube pr-8 flex items-baseline">
                                  <FaYoutube size={44} />
                                </div>
                              </div>
                              <div className="moredetails flex justify-between">
                                <div className="year flex flex-col">
                                  <div className='font-bold'>Year</div>
                                  <div className='font-thin'>{furtherDetails?.release_date?furtherDetails?.release_date.slice(0,4):'-'}</div>
                                </div>
                                <div className="type">
                                  <div className='font-bold'>Type</div>
                                  <div className='font-thin'>Drama</div>
                                </div>
                                <div className="Hour">
                                  <div className='font-bold'>Hour</div>
                                  {
                                      furtherDetails?.runtime?
                                    <div className='font-thin'>{parseInt(furtherDetails?.runtime/60)}hrs {(furtherDetails?.runtime%60).toFixed(0)}mins </div>
                                    :
                                    ' - '
                                  }
                                </div>
                                <div className="Director">
                                  <div className='font-bold'>Director</div>
                                  <div className='font-thin'>Spike Joulues</div>
                                </div>

                              </div>
                            </div>
                            <div className='movie-description p-5 mt-32'>
                              <div className="plotsummary">
                                <div className="title font-bold mb-2">Plot Summary</div>
                                <div className='font-thin text-sm mb-2'>{furtherDetails?.overview}</div>
                              </div>
                              <div className='flex justify-around'>
                                <span className='font-thin'>Drama</span>
                                <span className='font-thin'>Romance</span>
                                <span className='font-thin'>Thriller</span>
                                <span className='font-thin'>Sci-Fi</span>
                              </div>
                              <div className="cast pt-3 flex flex-col">
                                <div className="title font-bold mb-4">Cast</div>
                                <div className="people flex justify-between">
                                  <div className="people1">
                                    <img className='w-9 h-9 rounded-md'
                                      src="https://hips.hearstapps.com/hmg-prod/images/christian-bale-attends-the-premiere-of-foxs-ford-v-ferrari-news-photo-1694031112.jpg?crop=0.668xw:1.00xh;0.112xw,0&resize=640:*"
                                      alt="" />
                                    <div className="name font-thin">Joaquin Phoenixn</div>
                                  </div>
                                  <div className="people1">
                                    <img className='w-9 h-9 rounded-md'
                                      src="https://hips.hearstapps.com/hmg-prod/images/christian-bale-attends-the-premiere-of-foxs-ford-v-ferrari-news-photo-1694031112.jpg?crop=0.668xw:1.00xh;0.112xw,0&resize=640:*"
                                      alt="" />
                                    <div className="name font-thin">Joaquin Phoenix</div>
                                  </div>
                                  <div className="people1">
                                    <img className='w-9 h-9 rounded-md'
                                      src="https://hips.hearstapps.com/hmg-prod/images/christian-bale-attends-the-premiere-of-foxs-ford-v-ferrari-news-photo-1694031112.jpg?crop=0.668xw:1.00xh;0.112xw,0&resize=640:*"
                                      alt="" />
                                    <div className="name font-thin">Joaquin Phoenix</div>
                                  </div>
                                  <div className="people1">
                                    <img className='w-9 h-9 rounded-md'
                                      src="https://hips.hearstapps.com/hmg-prod/images/christian-bale-attends-the-premiere-of-foxs-ford-v-ferrari-news-photo-1694031112.jpg?crop=0.668xw:1.00xh;0.112xw,0&resize=640:*"
                                      alt="" />
                                    <div className="name font-thin">Joaquin Phoenix</div>
                                  </div>
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