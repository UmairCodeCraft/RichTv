import React from 'react'
import Wedgit_heading from './Wedgit_heading';
import Morgan from '../Card_img/Morgan.jpg';
import Wall_st from '../Card_img/Wall_st.jpg';
import Wall from '../Card_img/Wall_street.jpg';
import Us_stock from '../Card_img/US_stock.jpg';
import Us_E from '../Card_img/Us_ecnomic.jpg';
import Job from '../Card_img/Jobs_f.jpg'
import Market_News from './Market_News';
import Buttons from './Buttons';
import arrow from '../Card_img/arrow_next.svg'
const stock_date=new Date().toLocaleDateString();
const wedgit_heading={
    heading:'LATEST FINANCIAL NEWS',
    button_heading:"Stay Informed"
}
const Market_data=[
    {
    stock_img:Morgan,
    stock_content:"Morgan Stanley Sees TransDigm Group At $ ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    },
    {
    stock_img:Wall_st,
    stock_content:"Wall St To Open Higher On Gains In Tesla ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    },
    {
    stock_img:Job,
    stock_content:"U.S. Weekly Jobless Claims Jump To The H ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    },
    {
    stock_img:Us_E,
    stock_content:"U.S. CPI Rose By A Slower-Than-Expected ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    },
    {
    stock_img:Wall,
    stock_content:"Wall Street Falls On Dour Earnings Forec ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    },
    {
    stock_img:Us_stock,
    stock_content:"U.S. Stocks Are Falling As Investors Awa ...",
    stock_meta:"RICH TV",
    stock_date:stock_date
    }
]
const Financial = () => {
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

export default Financial;
