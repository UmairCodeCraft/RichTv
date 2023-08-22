import React from 'react'
import { FirstName,LastName } from './Component_A';

const Component_C = () => {
  return (
    <>
    <FirstName.Consumer>
        {
            (fname)=>{
                return(
                    <LastName.Consumer>
                       {
                         (lname)=>{
                            return <h1 style={{color:"red",textAlign:"center"}}>My name is {fname}{lname}</h1>
                        }
                       }
                    </LastName.Consumer>
                    
                ); 
            }
        }
    </FirstName.Consumer>
      
    </>
  )
}

export default Component_C;
