import React from 'react'
// import vd1 from '../Card_img/vd_slide1.jpg';
import {latest_date} from '../Feature_vedio_section/Feature_vedio_data.jsx';
const Vedio_slick_slider = (props) => {
  return (
    <>
      <div className='d-flex align-items-center vedio_section_mobile'>
        <div className='vedio_feature'>
            <img src={props.img}/>
        </div>
        <div className='vedio_bio'>
         <div>
            <a href=''>
                {props.name} 
                <span>{latest_date}</span>
            </a>
         </div>
         <h4>
            <a href=''>{props.heading}</a>
            <p></p>
         </h4>
         <div className='read_more'>
          <a href=''>
          {props.btn}
            <img/>
          </a>
         </div>
        </div>
      </div>
    </>
  )
}

export default Vedio_slick_slider
