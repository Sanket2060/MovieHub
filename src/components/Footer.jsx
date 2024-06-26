import React from 'react'
import { Link } from 'react-router-dom';
import { HiTrendingUp } from "react-icons/hi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoTvSharp } from "react-icons/io5";
import { BiComment } from "react-icons/bi";
function Footer() {
    return (
        <footer className='bg-[#373b69] h-[75px] flex justify-center items-center fixed bottom-0 w-full z-10'>
            <div className="menucontainer flex justify-between w-[700px]">
            <Link to='/'>
                <div className="trending flex flex-col">
                  <div className='self-center'><HiTrendingUp className='text-white text-3xl' /></div>
                    <div className='text-white'>TRENDING</div>
                </div>
            </Link>
            <Link to='/movies'>
                <div className="movies flex flex-col">
                <div className='self-center'><BiSolidMoviePlay className='text-white text-3xl' /></div>
                    <span className='text-white'>MOVIES</span>
                </div>
            </Link>
            <Link to='/tvseries'>
                <div className="tvseries flex flex-col">
                <div className='self-center'><IoTvSharp className='text-white text-3xl' /></div>
                    <span className='text-white'>TVSERIES</span>
                </div>
            </Link>
            <Link to='/search'>
                <div className="search flex flex-col">
                <div className='self-center'><FiSearch className='text-white text-3xl' /></div>
                    <span className='text-white'>SEARCH</span>
                </div>
            </Link>
            {/* <Link to='/comment'>
                <div className="comment">
                    <BiComment className='text-white text-3xl' />
                    <span className='text-white text-left'>COMMENT</span>
                </div>
            </Link> */}
            </div >
        </footer>
    )
}

export default Footer