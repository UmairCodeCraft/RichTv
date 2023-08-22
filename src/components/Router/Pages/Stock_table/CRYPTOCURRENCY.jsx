import React from 'react';
import Table_body from './Table_body';

import Table_heading from './Table_heading';
import next_arrow from '../Card_img/arrow_next.svg';
import{top_ten_crypto,top_ten_heading} from './Stock_data.jsx';
const CRYPTOCURRENCY = () => {
  return (
    <>
      <div className="Top_cryptocurrency pt-5 pt-md-0">
                <div>
                  <h3>{top_ten_heading.heading}
                  <img src={next_arrow} className='arrow_next'/>
                  </h3>
                  <p className="Update_name">{top_ten_heading.update_date}</p>
                </div>
              </div>
              <div className="stock_table_data">
                <div className="table_responsive">
                  <table className="table stock-market-table1">
                   <Table_heading name_heading={top_ten_heading.name_h} last_name={top_ten_heading.last_h} change={top_ten_heading.chg_h} pre_change={top_ten_heading.pre_chg_h} watchlist={top_ten_heading.watchlist_h}/>
                   <tbody>
                    {
                    top_ten_crypto.map((val,ind)=>{
                        return  <Table_body td_span={val.name} td_span_1={val.name_des} td_last={val.last}
                            td_chg={val.chg} td_pre_chg={val.pre_chg} td_star={val.watchlist}
                        />
                    })
                   }
                   </tbody>
                  </table>
                </div>
              </div> 
    </>
  )
}

export default CRYPTOCURRENCY
