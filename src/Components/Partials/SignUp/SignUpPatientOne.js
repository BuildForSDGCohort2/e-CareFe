import React, { Component } from "react";
//import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";


import axiosInstance from '../../../Constants'

// import Img1 from "../../../Images/facebook.png";
// import Img3 from "../../../Images/google.png";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const PatientOneSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  mobileNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});


export class SignUpPatientOne extends Component {
  render() {
    switch (this.props.count) {
      case 1:
        return (
          <div>
            <div className="form-box">
              <div className="box-title">Register</div>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  mobileNumber: "",
                  password: "",
                  confirm_password: "",
                }}
                validationSchema={PatientOneSchema}
                onSubmit={(values, { setSubmitting, setFieldError }) => {
                  setSubmitting(true);
                  // same shape as initial values
                  console.log(values);
                  this.props.nextCount();
                  axiosInstance
                    .post("v1/patient/add/", {
                      firstName: values.firstName,
                      lastName: values.lastName,
                      email: values.email,
                      mobileNumber: values.mobileNumber,
                      password: values.password,
                    })
                    .then((response) => {
                      console.log(response.data);
                      if (response.status === 200) {
                        //onClick={this.props.nextCount}
                        //console.log(response.data);
                        setSubmitting(false);
                        console.log("lOGGING in");
                        //this.props.history.replace("/index");
                        /* this.setState({
                            loggedIn: true,
                          }); */
                      }
                    })
                    .catch((error) => {
                      if (error.response) {
                        setSubmitting(false);
                        setFieldError("error", "Invalid Username or password");
                        console.log("Invalid Username or password");
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                      } else if (error.request) {
                        console.log(error.request);
                      } else {
                        console.log("Error", error.message);
                      }
                      console.log(error.config);
                    });
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    {errors.error && touched.email ? (
                      <div className="red">{errors.error}</div>
                    ) : null}
                    <Field
                      name="firstName"
                      className="form-control mb-2"
                      placeholder="First Name"
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className="red">{errors.firstName}</div>
                    ) : null}
                    <Field
                      name="lastName"
                      className="form-control mb-2"
                      placeholder="Last Name"
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className="red">{errors.lastName}</div>
                    ) : null}
                    <Field
                      name="email"
                      className="form-control mb-2"
                      placeholder="email"
                    />
                    {errors.email && touched.email ? (
                      <div className="red">{errors.email}</div>
                    ) : null}
                    <Field
                      name="mobileNumber"
                      type="text"
                      className="form-control mb-2"
                      placeholder="Mobile Number"
                    />
                    {errors.mobileNumber && touched.mobileNumber ? (
                      <div className="red">{errors.mobileNumber}</div>
                    ) : null}
                    <Field
                      name="password"
                      type="password"
                      className="form-control mb-2"
                      placeholder="Password"
                    />
                    {errors.password && touched.password ? (
                      <div className="red">{errors.password}</div>
                    ) : null}
                    <Field
                      name="confirm_password"
                      type="password"
                      className="form-control mb-2"
                      placeholder="Confirm Password"
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <div className="red">{errors.confirm_password}</div>
                    ) : null}
                    <button type="submit" className="next-btn">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="form-box">
              <div className="box-title">Register</div>
              <form className="register">
                <div className="d-flex">
                  <label className="cont">
                    <input type="radio" checked="checked" name="radio" />
                    <span className="checkmark check1"></span>
                  </label>
                  <p className="inbetween">or</p>
                  <label className="cont">
                    <input type="radio" name="radio" />
                    <span className="checkmark check2"></span>
                  </label>
                </div>

                <input
                  type="date"
                  placeholder="Enter D. O. B"
                  className="form-control mt-2"
                />
                <hr
                  style={{
                    color: "#333",
                    backgroundColor: "#333",
                  }}
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control mt-2"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control mt-2"
                />
                <button className="next-btn">Log In</button>
              </form>
            </div>
          </div>
        );
    }
  }
}
export default SignUpPatientOne;

{
  /* <form className="sign-in">
<div className="position-relative">
  <input
    type="text"
    placeholder="SignUp with Facebook"
    className="form-control"
  />
  <img
    src={Img1}
    className="background position-absolute"
    alt="deco-background"
  />
</div>
<div className="position-relative">
  <input
    type="text"
    placeholder="SignUp with Google"
    className="form-control mt-2"
  />
  <img
    src={Img3}
    className="background position-absolute"
    alt="deco-background"
  />
</div>
</form> 
<h6 className="division">or</h6>
*/
}
