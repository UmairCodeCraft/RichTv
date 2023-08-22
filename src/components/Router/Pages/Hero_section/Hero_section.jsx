import React from 'react'
import './Hero_section.css'

import {stock_card} from './Hero_data.jsx'
import Stock_card from './Stock_card';
const Hero_section = (props) => {
  return (
    <>
      <section className='hero-section'>
       <video src='https://s3.wasabisys.com/rpdapp1/upload/photos/2023/video/hero_bg.m4v' muted loop autoPlay className='section_video'></video>
       <div className='overlay'></div>
       <div className='container'>
        <div className='Text_section'>
        <div className='row'>
            <div className='col-lg-12 col-xl-10'>
                <div className='main_heading'>
                    <h1>{props.heading_S}<span style={{color:'#edb043'}}>{props.heading_col}</span> {props.heading_E}</h1>
                    <p>{props.pra1}</p>
                </div>
                <div className='row gy-4'>
                    
                      {
                       stock_card.map((element,index)=>{
                        return <Stock_card stock_img={element.stock_img} stock_name={element.stock_name} symbol_price={element.symbol_price} price_change={element.price_change} stock_percentage={element.stock_percentage}/>
                       })
                      }
                      
                </div>
            </div>
        </div>
       </div>
       </div>
      </section>
    </>
  )
}

export default Hero_section;
