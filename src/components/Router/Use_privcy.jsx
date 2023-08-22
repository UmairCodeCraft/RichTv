import React from 'react'

const Use_privcy = (props) => {
  return (
    <>
     <div className='privacy_content'>
        <h2>{props.heading}</h2>
        <p className='mb-30'>{props.pra1}</p>
        <p className='mb-30'>{props.pra2}</p>
        <p className='mb-30'>{props.pra3}</p>
        <p className='mb-30'>{props.pra4}</p>
        
        <ul className='mb-30'>
            <li className='mb-20' style={props.list1?{ display:'list-item'} : {display : 'none'}}><strong>{props.list_heading1}</strong>{props.list1}</li>
            <li className='mb-20' style={props.list2?{ display:'list-item'} : {display : 'none'}}><strong>{props.list_heading2}</strong>{props.list2}</li>
            <li className='mb-20' style={props.list3?{ display:'list-item'} : {display : 'none'}}><strong>{props.list_heading3}</strong>{props.list3}</li>
            <li className='mb-20' style={props.list4?{ display:'list-item'} : {display : 'none'}}><strong>{props.list_heading4}</strong>{props.list4}</li>
            <li className='mb-20' style={props.list5?{ display:'list-item'} : {display : 'none'}}><strong>{props.list_heading5}</strong>{props.list5}</li>
            <li className='mb-20' style={props.list6?{ display:'list-item'} : {display : 'none'}}><strong>{props.list_heading6}</strong>{props.list6}</li>
            <li className='mb-20' style={props.list7?{ display:'list-item'} : {display : 'none'}}><strong>{props.list_heading7}</strong>{props.list7}</li>
            <li className='mb-20' style={props.list8?{ display:'list-item'} : {display : 'none'}}><strong>{props.list_heading8}</strong>{props.list8}</li>
        </ul>
        <p className='mb-30'>{props.pra5}</p>
        <p className='mb-30'>{props.pra6}<a href='mailto:support@richtv.io' target='_blank' aria-label='Email' className='Email'>{props.Email}</a></p>
        <p className='mb-30'>{props.pra7}</p>
        <p className='mb-30'>{props.pra8}</p>
        <p className='mb-30'>{props.pra9}<a href={props.site_link} target='_blank' aria-label='visit contact' className='site_link'>{props.site_link}</a></p>
        <p className='mb-30'>{props.pra10}</p>
        <p className='mb-30'>{props.pra11}</p>
        <p className='mb-30'>{props.pra12}</p>
     </div> 
    </>
  )
}

export default Use_privcy
