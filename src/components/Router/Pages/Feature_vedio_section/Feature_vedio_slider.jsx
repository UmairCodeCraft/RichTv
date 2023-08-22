import React from 'react';
import play_icon from '../Card_img/circle-button-small.png';
import {latest_date} from './Feature_vedio_data.jsx';
const Feature_vedio_slider = (props) => {
  return (
    <>
      <div className='featured-videos-content d-flex align-items-center'>
        <div className='featured-videos-card'>
            <div className='featured-videos position-relative'>
                <form>
                    <div className='vedio_play_icon'>
                        <button type='submit'>
                            <img src={play_icon}/>
                        </button>
                    </div>
                </form>
                <img src={props.img} className='feature-vedio-img'/>
            </div>
            <div className='feature-vedio-content'>
                <div className='vedio-article d-flex justify-content-between align-items-center'>
                    <div className='by-name'>
                        <i>RICH TV LIVE</i>
                    </div>
                    <div>
                        <span>{latest_date}</span>
                    </div>
                </div>
                <h3>{props.heading}</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default Feature_vedio_slider;
