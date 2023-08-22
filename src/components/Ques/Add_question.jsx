import React, { useState } from 'react'

const Add_question = ({question,answer}) => {
    const [show,set_show]=useState(false);
  return (
    <>
    <div className='All_data'>
        <p className='sign' onClick={()=>set_show(!show)}>{show ?"-":"+"}</p>
        <h3>{question}</h3>
    </div>
    {
      show && <p className='show_answer'>{answer}</p>
    }
    </>
  )
}

export default Add_question;
