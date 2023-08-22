import React from "react";
// import React_native from './react_native.webp';
// import Common from "./Common";
import Hero_section from "./Hero_section/Hero_section";
import Feature_sec from "./Feature_section/Feature_sec";
import Vedio_section from "./Vedio_slider/Vedio_section";
import Feature_vedio_section from "./Feature_vedio_section/Feature_vedio_section";
import Testimonial_section from "./Home_page_testimonail_section/Testimonial_section";
import Stock_Table_section from "./Stock_table/Stock_Table_section";
import Help from "./wedgit/Help";
const hero_data=[
  {
    heading_S:'NAVIGATE',
    heading_col:" MARKETS",
    heading_E:"TOGETHER!",
    pra1:"CONQUER MARKET LABYRINTHS: SAVVY INSIGHTS & DYNAMIC CHATS.",
  }
]
const ft_sec=[{
  Feat_sec:'UNLEASH MARKET POTENTIAL: KEY FEATURES'
}]
const Home = () => {
  return (
    <>
    
    {
      hero_data.map((val,index)=>{
       return<Hero_section  heading_S={val.heading_S} heading_col={val.heading_col} heading_E={val.heading_E} pra1={val.pra1}/>
      })
      
     }
     {/* <Common name='Grow your business with ' lname=' Web Development' img_src={React_native} visit='/Services' bt_name='Get started'
        pra_g='Web development services help you build good relationships with
                your clients and customers.'
     /> */}
     <Feature_vedio_section/>
      <Feature_sec/>
      {/* <Stock_Table_section/> */}
      <Stock_Table_section/>
     <Help/>
     <Vedio_section/>
     <Testimonial_section/>
    </>
  );
};

export default Home;
