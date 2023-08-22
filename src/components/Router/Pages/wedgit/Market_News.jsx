import React from 'react'

const Market_News = (props) => {
  return (
    <>
      <div className='market_news'>
        <div className='d-flex  align-items-center'>
            <div className='stock_img'>
                <img src={props.img} />
            </div>
            <div className='stock_content'>
                <h4>
                    <a href=''>{props.content}</a>
                </h4>
                <a href='' className='stock-author-meta'>{props.author}</a>
                <span>{props.st_date}</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Market_News;
