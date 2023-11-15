import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
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
    
    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      .then(response => response.json())
      .then(response => {
        console.log(response.results)
        setData(response.results);
      }
        )
      .catch(err => console.error(err));
      console.log(data);
  },[])
  
  
  
  return (
    <>
      <div className="movies bg-[#22254b] min-h-[700px] ">
        <div className="pagename text-[#9fafb8] text-3xl text-center py-10">{pageName}</div>
        {
           data.map((movie)=>{
            <div className="movie w-[300px] h-[450px] bg-black">
            <img src="https://awbi.org/wp-content/uploads/2023/05/image-1.png" alt="movie image" className='h-[395px]'/>
            <div className="description text-white flex justify-between px-5 py-3 bg-[#373b69] ">
              <span className="moviename font-bold text-xl ">Jawaan</span>
              <span className="rating bg-black w-9 h-9 flex justify-center items-center">8</span>
            </div>
          </div>
           })
          
        }
      </div>
    </>
  )
}

export default Body