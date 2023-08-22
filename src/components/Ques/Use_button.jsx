import React, { useEffect, useState } from 'react'

const Use_button = () => {
    const [num,set_num]=useState(0);
    useEffect( ()=>{
        document.title=`click ${num} times`
    });
  return (
    <>
      <button onClick={()=>{set_num(num+1)}} style={{background:'yellow',margin:'30px auto',display:'block',border:'none',padding:'15px 25px',fontSize:'18px',borderRadius:'5px'}}>Click Me  <span style={{fontSize:'20px',color:'red'}}>{num}</span></button>
      
    </>
  );
}

export default Use_button;
