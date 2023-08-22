import React from "react";

const Table_heading = (props) => {
  return (
    <>
      <thead>
        <tr>
          <th scope="col" className="sticky-side">{props.name_heading}</th>
          <th scope="col">{props.last_name}</th>
          <th scope="col">{props.change}</th>
          <th scope="col">%{props.pre_change}</th>
          <th scope="col">{props.watchlist}</th>
        </tr>
      </thead>
    </>
  );
};

export default Table_heading;
