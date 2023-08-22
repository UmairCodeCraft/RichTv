import React from 'react'
import Wedgit_heading from './Wedgit_heading';
import Google from '../Card_img/Google.png';
import Coin from '../Card_img/coin.png';
import NBM from '../Card_img/Nbm.png';
import ProMember from '../Card_img/pro.png';
import BTC from '../Card_img/BTC.png';
import Search from './Search';
import Chats from './Chats';
import Buttons from './Buttons';
import arrow from '../Card_img/arrow_next.svg'
const wedgit_heading={
    heading:'DYNAMIC GROUP CHATS',
    button_heading:"Dynamic Group Chats"
}
const place_holder={
    place:"Search Groups",
    data:"All Data",
}
const chat_all_data=[
    {
     profile_img:Google,
     chat_name:"Google",
     chat_data:"Goog one of my top 10 stocks in May up 3% and climbing",
     weeks:'1w'
    },
    {
     profile_img:Coin,
     chat_name:"Coin",
     chat_data:"coinbase up 8% after reporting strong earnings",
     weeks:'3w'
    },
    {
     profile_img:NBM,
     chat_name:"NBM",
     chat_data:"Neo Battery Materials Ltd",
     weeks:'4w'

    },
    {
     profile_img:ProMember,
     chat_name:"ProMember",
     chat_data:"ProMembers",
     weeks:'1w'

    },
    {
     profile_img:BTC,
     chat_name:"BTC",
     chat_data:"btc",
     weeks:'3w'
    }
]
const Dynamic = () => {
  return (
    <>
      <div className='main_section chat_wedgits'>
      <Wedgit_heading heading={wedgit_heading.heading}/>
        <div className='chat_section'>
        <Search place_holder={place_holder.place}/>
        <p className='all_chat'>{place_holder.data}</p>
      
        </div>
          <div id='search-widget'>
            {
                chat_all_data.map((ele,ind)=>{
                  return <Chats imge={ele.profile_img} name={ele.chat_name} data={ele.chat_data} week={ele.weeks}/>
                })
            }
        </div>
        <Buttons btn_heading={wedgit_heading.button_heading} arrow={arrow}/>
      </div>
    </>
  )
}

export default Dynamic;
