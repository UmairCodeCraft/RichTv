import React from "react";

const Stock_card = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-6">
        <div className="stock_card">
          <a
            href="/stock-quote/DXY:NYSE"
            className="summary-card"
            aria-label=""
          >
            <div className="card_img card_image" style={{ border: "none" }}>
              <div className="d-flex align-item-center justify-content-between">
                <h4>
                  <div className="widget-stock-img">
                    <img src={props.stock_img} />
                  </div>
                  {props.stock_name}
                </h4>
                <span className="symbol_price">{props.symbol_price}</span>
              </div>
              <div className="stock-details d-flex align-item-center justify-content-between">
                <span className="change-down" style={props.price_change>0?{color:'#008a12'}:{color:'##ee2717'}}>{props.price_change}</span>
                <span className="change-down" style={props.price_change>0?{color:'#008a12'}:{color:'##ee2717'}}>{props.stock_percentage}%</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Stock_card;
