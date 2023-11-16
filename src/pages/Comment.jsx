import React from 'react'
import { FaRegCommentDots } from "react-icons/fa6";
// Placeholder to input box not possible here?
function Comment() {
  return (
    <>
      <div className="commentcomponent min-h-[700px] bg-[#22254b]">

        <div className="commentsection flex flex-col items-center mb-10  pt-10">

          <div className="form w-[450px]  rounded-xl bg-[#373b69] mx-5 pb-5 flex flex-col items-center">
            <div className="visualcircle w-16 h-16 text-2xl bg-red-600 rounded-[50%] flex justify-center items-center mb-4 relative bottom-5"><FaRegCommentDots /></div>
            <form action="" className='flex flex-col items-center'>
              <input type="text" placeholder='Enter your name' className='w-80 mb-8 h-10 rounded-lg ' />
              <input type="text" placeholder='Enter your message' className='w-80 mb-8 h-10 rounded-lg' />
              <button type='submit' className='text-lg bg-red-600 text-black rounded-lg w-20 px-3 py-1'>Submit</button>
             <div className='text-white'> This is dummy  page.It is still under development</div>
            </form>
          </div>
        </div>



        <div className="viewcomments  text-white pl-5">
          <div className="commentstitle text-2xl">Comments</div>
          <div className="comment bg-[#373b69] border-2 border-black mb-5">
            <div className="comment-about">
              <span className="username text-xl mr-5">@SanketKarki</span>
              <span className="time">5:45</span>
            </div>
            <p className="comment-actualcommment">Wow!!!</p>
          </div>
          <div className="comment bg-[#373b69] border-2 border-black mb-5">
            <div className="comment-about">
              <span className="username text-xl mr-5">@SanketKarki</span>
              <span className="time">5:45</span>
            </div>
            <p className="comment-actualcommment">Wow!!!</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Comment