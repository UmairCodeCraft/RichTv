import React from 'react'

const Chats = (props) => {
  return (
    <>
      <a href='' className='chat_grops'>
        <div className='chat_data d-flex justify-content-between align-items-center'>
          <div className=' d-flex justify-content-between align-items-center profile_content'>
            <div className='user_profile'>
                <img src={props.imge}/>
            </div>
            <div className='user_content'>
                <p className='all_chats_name'>{props.name}</p>
                <p className='user_msg'>{props.data}</p>
            </div>
          </div>
          <div>
            <p className='weeks'>{props.week}</p>
          </div>
        </div>
      </a>
    </>
  )
}

export default Chats
