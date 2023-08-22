import React from 'react'
import Table_body from './Table_body';
import star_img from "../Card_img/star_watch.svg";
import Table_heading from './Table_heading';
import next_arrow from '../Card_img/arrow_next.svg';
import {top_ten_stock,top_ten_heading1} from './Stock_data.jsx';
let optionsDate = 
{ 
    // weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
};
var latest_date=new Date().toLocaleDateString('en-US',optionsDate);


const Stock_Table = () => {
  return (
    <>
     <div className="Top_cryptocurrency">
                <div>
                  <h3>{top_ten_heading1.heading}
                  <img src={next_arrow} className='arrow_next'/>
                  </h3>
                  <p className="Update_name">{top_ten_heading1.update_date}</p>
                </div>
              </div>
              <div className="stock_table_data">
                <div className="table_responsive">
                  <table className="table stock-market-table1">
                   <Table_heading name_heading={top_ten_heading1.name_h} last_name={top_ten_heading1.last_h} change={top_ten_heading1.chg_h} pre_change={top_ten_heading1.pre_chg_h} watchlist={top_ten_heading1.watchlist_h}/>
                   <tbody>
                    {
                    top_ten_stock.map((val,ind)=>{
                        return  <Table_body td_span={val.name} td_span_1={val.name_des} td_last={val.last}
                            td_chg={val.chg} td_pre_chg={val.pre_chg} td_star={val.watchlist}
                       URL={val.url} />
                    })
                   }
      </tbody>
                  </table>
                </div>
              </div> 
    </>
  )
}

export default Stock_Table
