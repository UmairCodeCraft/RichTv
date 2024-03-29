import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FormSchema } from "../../FormSchema";

const Contact = () => {
  const initialValForm = {
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    message: "",
    checkbox: false,
  };

  const { handleChange, values, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: initialValForm,
      validationSchema: FormSchema,
      onSubmit: (value, submited) => {
        console.log(value);
        submited.resetForm();
        // setFieldValue("checkbox", false);
      },
    });

  console.log(errors);

  const navigate = useNavigate();
  const goto = () => {
    navigate("/About");
  };

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
                  className={`form-control ${
                    errors.name && touched.name ? "border-danger" : ""
                  }`}
                  id="Name"
                  placeholder="Enter your Name"
                  name="name"
                  autoComplete="off"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="Name" className="form-label">
                  Full Name
                </label>
                {errors.name && touched.name ? (
                  <p className="form-error text-danger pt-2 ps-2">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className={`form-control ${
                    errors.phone && touched.phone ? "border-danger" : ""
                  }`}
                  id="Phone_Number"
                  placeholder="Enter your Phone Number"
                  name="phone"
                  autoComplete="off"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="Phone_Number" className="form-label">
                  Phone Number
                </label>

                {errors.phone && touched.phone ? (
                  <p className="form-error text-danger pt-2 ps-2">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="email"
                  className={`form-control ${
                    errors.email && touched.email ? "border-danger" : ""
                  }`}
                  id="Email1"
                  placeholder="Enter your Email Address"
                  name="email"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="Email1" className="form-label">
                  Email address
                </label>

                {errors.email && touched.email ? (
                  <p className="form-error text-danger pt-2 ps-2">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="password"
                  className={`form-control ${
                    errors.password && touched.password ? "border-danger" : ""
                  }`}
                  id="Password"
                  placeholder="Enter your Password"
                  name="password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="Password" className="form-label">
                  Password
                </label>

                {errors.password && touched.password ? (
                  <p className="form-error text-danger pt-2 ps-2">
                    {errors.password}
                  </p>
                ) : null}
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="password"
                  className={`form-control ${
                    errors.confirm_password && touched.confirm_password
                      ? "border-danger"
                      : ""
                  }`}
                  id="C_Password"
                  placeholder="Enter your Password"
                  name="confirm_password"
                  autoComplete="off"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="C_Password" className="form-label">
                  Confirm Password
                </label>

                {errors.confirm_password && touched.confirm_password ? (
                  <p className="form-error text-danger pt-2 ps-2">
                    {errors.confirm_password}
                  </p>
                ) : null}
              </div>
              <div className="mb-3 form-floating">
                <textarea
                  className={`form-control ${
                    errors.message && touched.message ? "border-danger" : ""
                  }`}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  name="message"
                  autoComplete="off"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                <label htmlFor="floatingTextarea2">Write your Message</label>

                {errors.message && touched.message ? (
                  <p className="form-error text-danger pt-2 ps-2">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className={`form-check-input ${
                    errors.checkbox && touched.checkbox ? "border-danger" : ""
                  }`}
                  id="Check1"
                  name="checkbox"
                  checked={values.checkbox}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="Check1">
                  Check me out
                </label>
                {errors.checkbox && touched.checkbox ? (
                  <p className="form-error text-danger pt-2 ps-2">
                    {errors.checkbox}
                  </p>
                ) : null}
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
