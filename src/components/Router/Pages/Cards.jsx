import React from 'react'

const Cards = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
              <div className="card" style={{width: "18rem;"}}>
                <img src={props.img_src} className="img-fluid card_img" alt="card-img" />
                <div class="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">
                  {props.des}
                  </p>
                  <a href="#" className="btn btn-outline-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
    </>
  )
}

export default Cards
