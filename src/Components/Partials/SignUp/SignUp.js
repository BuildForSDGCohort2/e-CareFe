import React, { Component } from "react";
//import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";

import "react-web-tabs/dist/react-web-tabs.css";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Img1 from "../../../Images/facebook.png";
import Img3 from "../../../Images/google.png";
import Img4 from "../../../Images/circle1.png";
import Img5 from "../../../Images/circle2.png";

import axiosInstance from '../../../Constants'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export class SignUp extends Component {
  state = {
    loggedIn: false,
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/patient/dashboard" />;
    }
    return (
      <div>
        <div className="form-box">
          <Tabs
            defaultTab="one"
            onChange={(tabId) => {
              console.log(tabId);
            }}
          >
            <TabList className="mb-5 mt-n1">
              <Tab tabFor="one" className="tab1">
                Sign In
              </Tab>
              <Tab tabFor="two" className="tab2">
                Sign Up
              </Tab>
            </TabList>
            <TabPanel tabId="one">
              <form className="sign-in">
                <div className="position-relative">
                  <input
                    type="text"
                    placeholder="Login with Facebook"
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
                    placeholder="Login with Google"
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
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting, setFieldError }) => {
                  setSubmitting(true);
                  // same shape as initial values
                  console.log(values);

                  axiosInstance.post("v1/auth/patientlogin", {
                      email: values.email,
                      password: values.password,
                    })
                    .then((response) => {
                      console.log(response.data);
                      if (response.status === 200) {
                        //console.log(response.data);
                        setSubmitting(false);
                        console.log("lOGGING in");
                        //this.props.history.replace("/index");
                        this.setState({
                          loggedIn: true
                        })
                      }
                    })
                    .catch((error) => {
                      if (error.response) {
                        setSubmitting(false);
                        setFieldError("error", "Invalid Username or password")
                        console.log("Invalid Username or password")
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
                    <Field name="email" className="form-control mb-2" />
                    {errors.email && touched.email ? (
                      <div className="red">{errors.email}</div>
                    ) : null}
                    <Field
                      name="password"
                      type="password"
                      className="form-control mb-2"
                    />
                    {errors.password && touched.password ? (
                      <div className="red">{errors.password}</div>
                    ) : null}
                    <button type="submit" className="next-btn">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </TabPanel>
            <TabPanel tabId="two">
              <form className="sign-up">
                <div className="radio-inputs">
                  <input
                    type="radio"
                    name="gender"
                    className="form mr-2"
                    value="Hospital"
                    checked={this.props.accountType === "Hospital"}
                    onChange={this.props.setAccountType}
                  />
                  <label>Register as Hospital, Clinic</label>
                  <br />
                  <img
                    src={Img4}
                    className="background2 position-absolute"
                    alt="deco-background"
                  />
                </div>
                <p>Hospital Click Here</p>
                <div className="radio-inputs mt-3">
                  <input
                    type="radio"
                    className="form mr-2"
                    value="Patient"
                    checked={this.props.accountType === "Patient"}
                    onChange={this.props.setAccountType}
                  />
                  <label>Register as a Patient</label>
                  <br />
                  <img
                    src={Img5}
                    className="background2 position-absolute"
                    alt="deco-background"
                    value="Patient"
                    checked={this.props.accountType === "Patient"}
                    onChange={this.props.setAccountType}
                  />
                </div>
                <p>Patients Click Here</p>
                <button className="next-btn" onClick={this.props.nextStep}>
                  Next
                </button>
              </form>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
