import React from 'react'
import { FaRegCommentDots } from "react-icons/fa6";
function Comment() {
  return (
    <div className="commentsection flex flex-col items-center bg-[#22254b] min-h-[700px]">

      <div className="form w-[250px] h-[450px] rounded-xl bg-white mx-5 flex flex-col items-center">
       <div className="visualcircle w-11 h-11 bg-red-600 rounded-[50%] flex justify-center items-center"><FaRegCommentDots /></div>
        <form action="">
          <label htmlFor="name">
            Name:
          </label>
          <input type="text" id='name' placeholder='Enter your name' />
          <label htmlFor="message">Message:</label>
          <input type="text" placeholder='Enter your message' id='message' />
          <button type='submit'></button>
        </form>
      </div>
    </div>

  )
}

export default Comment