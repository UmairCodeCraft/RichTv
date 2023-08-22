import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const goto = () => {
    navigate("/About");
  };
  const forSubmit=()=>{

  }
  const [data,set_data]=useState({
    Full_Name:"",
    phone:"",
    email:"",
    password:"",
    Message:"",
  });
  const InputEvent=(e)=>{
    const{name,value}=e.target;
    set_data((prev)=>{
        return{
          ...prev,
          [name]:value,
        }
    })
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h1 className="text-center">Contact Us</h1>
            <form className="mb-5" onSubmit={forSubmit}>
              <div class="mb-3">
                <label for="Name" className="form-label">
                  Full Name
                </label>
                <input type="text" className="form-control" id="Name" placeholder="Enter your Name" name="Full_Name" value={data.Full_Name} onChange={InputEvent} />
              </div>
              <div className="mb-3">
                <label for="Phone_Number" className="form-label">
                  Phone Number
                </label>
                <input type="text" className="form-control" id="Phone_Number" placeholder="Enter your Phone Number" name="phone" value={data.phone} onChange={InputEvent}/>
              </div>
              <div className="mb-3">
                <label for="Email1" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="Email1" placeholder="Enter your Email Address" name="email" value={data.email} onChange={InputEvent}/>
              </div>
              <div className="mb-3">
                <label for="Password" class="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="Password" placeholder="Enter your Password" name='password' value={data.password} onChange={InputEvent}/>
              </div>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }} name="Message" value={data.Message} onChange={InputEvent}
                ></textarea>
                <label for="floatingTextarea2">Write your Message</label>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="Check1" />
                <label className="form-check-label" for="Check1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <div className="d-flex gap-3 pb-5 about_page_btn">
              <button className="btn btn-outline-primary" onClick={goto}>
              Go to About page
            </button>
            
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline-primary"
              type="button"
            >
              Go back previous page
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
