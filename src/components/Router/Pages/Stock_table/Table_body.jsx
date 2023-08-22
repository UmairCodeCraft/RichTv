import React from "react";

const Table_body = (props) => {
  return (
    <>
      <tr>
          <td className="sticky-side">
            <a href={props.URL}>
              <span className="first-td last-td" style={props.td_pre_chg>0?{background:'#008a12'}:{background:'#c11718'}}>{props.td_span}</span>
              <span className="d-block">{props.td_span_1}</span>
            </a>
          </td>
          <td>${props.td_last}</td>
          <td style={props.td_pre_chg>0?{color:'#008a12'}:{color:'#c11718'}}>{props.td_chg}</td>
          <td style={props.td_pre_chg>0?{color:'#008a12'}:{color:'#c11718'}}>{props.td_pre_chg}</td>
          <td className="watchlist_btn">
            <a href="" aria-label="watchlist_button">
              <img src={props.td_star}/>
            </a>
          </td>
        </tr>
    </>
  );
};

export default Table_body;
