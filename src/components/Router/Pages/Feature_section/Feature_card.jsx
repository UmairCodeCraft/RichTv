import React from "react";

const Feature_card = (props) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="feature">
          <div className="d-flex ft_card">
            <img src={props.img} />
            <h3>{props.heading}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature_card;
