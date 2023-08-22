import React from 'react'

const Buttons = (props) => {
  return (
    <>
     <div className='show_more_btn'>
         <a href='' className='btn chat_btn'>{props.btn_heading}
         <img src={props.arrow} className='arrow_next'/>
         </a>
     </div>
    </>
  )
}

export default Buttons;
