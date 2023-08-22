import React from 'react'
import search_icon from '../Card_img/search.svg'
const Search = (props) => {
  return (
    <>
      <div className='chat_search'>
      <form>
        <div className='input_group'>
            <span>
                <img src={search_icon}/>
            </span>
            <input placeholder={props.place_holder}/>
        </div>
      </form>
      </div>
    </>
  )
}

export default Search
