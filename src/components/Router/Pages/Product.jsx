import React from 'react'
import Common from './Common'
import img from './Card_img/facebook.jpg'
const Product = () => {
  return (
    <>
      <div className='container'>
        <Common name='Welcome To' lname=' Product page' img_src={img} bt_name='Started To' visit='/Contact'/>
      </div>
    </>
  )
}

export default Product
