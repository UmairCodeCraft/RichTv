import React, { useContext } from 'react'
import Component_C from './Component_C';
import { FirstName, LastName } from './Component_A';

const Component_B = () => {
 const fname=useContext(FirstName);
const lname=useContext(LastName);  
  return (
    <>
    <h1 style={{color:"red",textAlign:"center"}}>My name is {fname}{lname}</h1>
      <Component_C/>
    </>
  )
}

export default Component_B;
