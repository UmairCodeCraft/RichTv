import React from 'react';
import Feature_card from './Feature_card';
import {feature_data} from "./F_data.jsx";
const Feature_sec = () => {
  return (
    <>
      <section className='Advance_feature_section'>
        <div className='container'>
            {/* <h2>{
                console.log(props.Feature_sec1)
            }</h2> */}
            <h2>UNLEASH MARKET POTENTIAL: KEY FEATURES</h2>
            <div className='row gy-4'>
                {
                    feature_data.map((val,index)=>{
                        return <Feature_card img={val.ft_img} heading={val.ft_heading}/>
                    })
                    
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default Feature_sec;
