import React from 'react'
import { FaRegCommentDots } from "react-icons/fa6";
function comment() {
  return (
    <div className="commentsection flex flex-col justify-center bg-[#22254b] min-h-[700px]">

      <div className="form w-[250px] h-[450px] rounded-xl bg-white">
       <div className="visualcircle w-[25px] h-[25px] bg-red-600 rounded-[50%]"><FaRegCommentDots/></div>
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

export default comment