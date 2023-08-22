import React from 'react'

const Testimonail_slider = (props) => {
  return (
    <>
      <div className='testimonial_card'>
       <div className='d-flex justify-content-between align-items-center mb-30'>
        <div className='profile_img'>
            <img src={props.profile}/>
        </div>
        <div className='testimonial_card_logo'>
            <img src={props.tes_img}/>
        </div>
       </div>
       <h3>{props.heading}</h3>
       <span>{props.country}</span>
       <p>{props.pra}</p>
      </div>
    </>
  )
}

export default Testimonail_slider
