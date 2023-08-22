import React, { createContext } from 'react'
import Component_B from './Component_B';
const FirstName=createContext();
const LastName=createContext();
const Component_A = () => {
  return (
    <>
      
      <FirstName.Provider value={"Muhammad"}>
      <LastName.Provider value={" Umair"}>
        <Component_B/>
      </LastName.Provider>
      </FirstName.Provider>
      
    </>
  )
}

export default Component_A;
export {FirstName,LastName};

