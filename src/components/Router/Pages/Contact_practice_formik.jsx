import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const Contact_practice_formik = () => {
  const initialValForm = {
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    message: "",
  };
  const { values, handleChange, handleBlur, Erros, handleSubmit } = useFormik({
    initialValues: initialValForm,
    onSubmit: (value) => {},
  });

  // const [UserName, setUserame] = useState("");
  // const [name_error, setname_error] = useState(false);
  // const [phone, setPhone] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  // const [message, setmessage] = useState("");
  const navigate = useNavigate();
  const goto = () => {
    navigate("/About");
  };
  // const forSubmit = (e) => {
  //   e.preventDefault();
  // };
  // const [data, set_data] = useState({
  //   Full_Name: "",
  //   phone: "",
  //   email: "",
  //   password: "",
  //   Message: "",
  // });
  // const handleNameChange = (e) => {
  //   set_data({ ...data, Full_Name: e.target.value });
  // };
  // if (data.Full_Name.length < 3) {
  //   setname_error(true);
  // } else {
  //   setname_error(false);
  // }
  // console.log(data.Full_Name);
  // console.log(data);
  // const InputEvent = (e) => {
  //   const { name, value } = e.target;
  //   set_data((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // };
  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h1 className="text-center">Contact Us</h1>
            <form className="mb-5 form-floating" onSubmit={handleSubmit}>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your Name"
                  name="name"
                  // value={data.Full_Name}
                  // onChange={InputEvent}

                  value={values.name}
                  onChange={handleChange}
                  autoComplete="off"
                  onBlur={handleBlur}
                />
                <label htmlFor="Name" className="form-label">
                  Full Name
                </label>
                {/* {name_error ? (
                  <span className="mt-1 d-block" style={{ color: "red" }}>
                    *** character length is less than 2 ***
                  </span>
                ) : (
                  ""
                )} */}
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="Phone_Number"
                  placeholder="Enter your Phone Number"
                  name="phone"
                  // value={data.phone}
                  // onChange={InputEvent}

                  value={values.number}
                  onChange={handleChange}
                  autoComplete="off"
                  onBlur={handleBlur}
                />
                <label htmlFor="Phone_Number" className="form-label">
                  Phone Number
                </label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="Email1"
                  placeholder="Enter your Email Address"
                  name="email"
                  // value={data.email}
                  // onChange={InputEvent}

                  value={values.email}
                  onChange={handleChange}
                  autoComplete="off"
                  onBlur={handleBlur}
                />
                <label htmlFor="Email1" className="form-label">
                  Email address
                </label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Enter your Password"
                  name="password"
                  // value={data.password}
                  // onChange={InputEvent}

                  value={values.password}
                  onChange={handleChange}
                  autoComplete="off"
                  onBlur={handleBlur}
                />
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="C_Password"
                  placeholder="Enter your Password"
                  name="confirm_password"
                  // value={data.password}
                  // onChange={InputEvent}

                  value={values.confirm_password}
                  onChange={handleChange}
                  autoComplete="off"
                  onBlur={handleBlur}
                />
                <label htmlFor="C_Password" className="form-label">
                  Confirm Password
                </label>
              </div>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  name="message"
                  // value={data.Message}
                  // onChange={InputEvent}
                  autoComplete="off"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                <label htmlFor="floatingTextarea2">Write your Message</label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Check1"
                />
                <label className="form-check-label" htmlFor="Check1">
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

export default Contact_practice_formik;
