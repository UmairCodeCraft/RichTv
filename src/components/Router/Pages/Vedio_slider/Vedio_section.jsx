import React from 'react'
import Vedio_slick_slider from './Vedio_slick_slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {sl_data} from './Slider_data.jsx'
const vedio_heading={
    heading:"HOW TO GUIDES",
}
 const Vedio_section=()=> {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
      <section className='vedio_section'>
        <div className='container'>
            <div className='heading-summary'>
                <h2>{vedio_heading.heading}</h2>
            </div>
           <Slider {...settings}>
             {
                sl_data.map((ele,index)=>{
                    return <Vedio_slick_slider img={ele.sl_img} name={ele.aut_name} date={ele.date} heading={ele.sl_heading} btn={ele.button}/>
                })
            }
           </Slider>
        </div>
      </section>
    </>
  )
}
export default Vedio_section;