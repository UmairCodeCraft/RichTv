import React from 'react'
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
       <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 .flex-sm-column-reverse pt-4 pt-lg-0">
              <h1>
                {props.name}
                <span style={{ color: "#3333dd", fontWeight: "bold" }}>
                  {props.lname}
                </span>
              </h1>
              <p>
                {props.pra_g}
              </p>
              <NavLink to={props.visit} className="btn btn-outline-primary">{props.bt_name}</NavLink>
              {/* <ol>
                <li>
                  <strong>Plan:</strong>Growth in a business does not happen
                  overnight. Owners must prepare for growth by planning for it.
                  Many small business owners starting out have one thought in
                  mind: sell more and get bigger! Growth, however, requires
                  careful consideration in many different areas of the business
                  such as operations, staffing, facilities, finance, and
                  marketing.
                </li>
                <li>
                  <strong>People:</strong>
                  People are the greatest assets any business can have. Without
                  skilled, dedicated employees regardless of their job position,
                  a business cannot operate efficiently, market, sell, and take
                  care of customers.
                </li>
                <li>
                  <strong> Prioritize:</strong>
                  Successful growth requires prioritizing tasks, strategies, and
                  goals. Owners should review business approaches that are
                  working, goals that are being met, and tasks that need
                  changing to further enhance the business operations and
                  objectives.
                </li>
                <li>
                  <strong> Processes and procedures:</strong>
                  All businesses operate with various processes and procedures.
                  Successful business growth focuses on continuously improving
                  the processes and procedures involved in creating and
                  delivering a business' products and services.
                </li>
                <li>
                  <strong>Pace:</strong>A small business should pace its growth
                  based on accomplishment of various predetermined milestones
                  centered on the company's objective and goals, and then slowly
                  increasing and improving all of the functional areas necessary
                  to handle growth.
                </li>
              </ol> */}
            </div>
            <div className="col-lg-6 text-center">
              <img src={props.img_src} alt="business_img" className="img-fluid hero_section"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common;
