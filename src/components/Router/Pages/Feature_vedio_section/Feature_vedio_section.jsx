import React from 'react'
import Feature_vedio_slider from './Feature_vedio_slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import {sl_data,btn} from './Feature_vedio_data.jsx';
import Slider from 'react-slick';
import Buttons from '../wedgit/Buttons';
import vd_button from '../Card_img/vd_arrow.svg';
const vedio_heading={
    heading:"FEATURED VIDEOS"
}
const Feature_vedio_section = () => {
     const setting = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1400,
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
      <section className='Feature_vedio_section'>
        <div className='container'>
        <div className='heading-summary'>
                <h2>{vedio_heading.heading}</h2>
            </div>
            <Slider {...setting}>
                {
                sl_data.map((val,index)=>{
                    return <Feature_vedio_slider img={val.f_img} heading={val.v_heading}/>
                })
            }
            </Slider>
            <Buttons btn_heading={btn.value} arrow={vd_button}/>
        </div>
      </section>
    </>
  )
}

export default Feature_vedio_section;
