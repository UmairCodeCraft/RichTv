import React from 'react'
import Testimonail_slider from './Testimonail_slider';
import {testimonila_data} from './Testimonial_data.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data={
    heading:"RECOMMENDED BY TRADERS WORLDWIDE",
    description:"Rich TV continuously serves a source of support and empowerment for traders around the globe, as it is evident from their feedback."
}
const Testimonial_section = () => {
    const Test_settings = {
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
      <section className='Home_testimonoal_section'>
       <div className='container'>
        <h2 className='testimonial_main-heading'>{data.heading}</h2>
        <div className='border_heading'></div>
        <div>
            <p className='testimonial_main_p mb-56'>{data.description}</p>
        </div>
        <row>
           <Slider {...Test_settings}>
             {
                testimonila_data.map((ele,index)=>{
                    return <Testimonail_slider tes_img={ele.tes_img} pra={ele.tes_p} profile={ele.test_profile} heading={ele.tes_heading} country={ele.tes_country}/>
                })
            }
           </Slider>
        </row>
       </div>
      </section>
    </>
  )
}

export default Testimonial_section
