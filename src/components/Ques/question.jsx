import React, { useState } from 'react';
import'./question.css';
import{Questions}from './qu_api';
import Add_question from './Add_question';

const Question = () => {
    const[data,set_data]=useState(Questions);
  return (
    <>
      <div className='question_app'>
       <h2>React Interview Question</h2>
       <div className='show_data'>
        {
            data.map((element)=>{
            return <Add_question {...element}/>;
            })
        }
       </div>
      </div>
    </>
  )
}

export default Question
