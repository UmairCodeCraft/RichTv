import React from "react";

import Stock_Table from "./Stock_Table";
import CRYPTOCURRENCY from "./CRYPTOCURRENCY";
// import Table_body from "./table_body";

const Stock_Table_section = () => {
  return (
    <>
      <section className="Stock_market">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
                 <Stock_Table/>
            </div>
            <div className="col-lg-6">
              <CRYPTOCURRENCY/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stock_Table_section;
