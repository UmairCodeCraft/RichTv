import React from 'react'
import Wedgit_heading from './Wedgit_heading';
import Imf from '../Card_img/Imf.jpg';
import General from '../Card_img/Genral_motor.jpg';
import Republic_bank from '../Card_img/Republic_bank.jpg';
import private_rise from '../Card_img/Private_Rise.jpg';
import Us_E from '../Card_img/Us_ecnomic.jpg';

import Market_News from './Market_News';
import Buttons from './Buttons';
import arrow from '../Card_img/arrow_next.svg'
const stock_date=new Date().toLocaleDateString();
const wedgit_heading={
    heading:'IN-DEPTH MARKET ANALYSIS',
    button_heading:"Dive into Analysis"
}
const Market_data=[
    {
    stock_img:Imf,
    stock_content:"IMF Says US Default Would Have ‘Ve ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    },
    {
    stock_img:General,
    stock_content:"General Motors Hires Former Apple Execut ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    },
    {
    stock_img:Republic_bank,
    stock_content:"First Republic Bank Executives’ Tr ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    },
    {
    stock_img:private_rise,
    stock_content:"Private Payroll Rise To 296,000 In April ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    },
    {
    stock_img:General,
    stock_content:"General Motors (GM) Lays Off Several Hun ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    },
    {
    stock_img:Us_E,
    stock_content:"US Economic Growth GDP Slows To 1.1% In ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    }
]
const Market = () => {
  return (
    <>
      <div className='main_section'>
        <Wedgit_heading heading={wedgit_heading.heading}/>
        {
            Market_data.map((val,ind)=>{
             return <Market_News img={val.stock_img} content={val.stock_content} author={val.stock_meta} st_date={val.stock_date}/>
            })
        }
        <Buttons btn_heading={wedgit_heading.button_heading} arrow={arrow}/>
      </div>
    </>
  )
}

export default Market;
