import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import "react-web-tabs/dist/react-web-tabs.css";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Img1 from "../../../Images/facebook.png";
import Img3 from "../../../Images/google.png";
import Img4 from "../../../Images/circle1.png";
import Img5 from "../../../Images/circle2.png";

const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

export class SignUp extends Component {
  state = {
    email: "",
    password: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleLogin = e => {
    e.preventDefault();
    axios.post('http://api.ecare.ml/v1/auth/patientlogin',
      {
        email: this.state.email,
        password: this.state.password
      }
    ).then(res => {
      if(res.status === 200){
        this.props.history.push('/dashboard/patient')
      }
    }).catch(function (error) {
      console.log(error);
    });

    this.setState({
      email: "",
      password: ""
    })
  }
 
  render() {
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
                  username: "",
                  password: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form onSubmit={this.handleLogin}> 
                    <Field value={this.state.email} onChange={this.handleChange} name="email" className="form-control mb-2" />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                    <Field
                      value={this.state.password}
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                      className="form-control mb-2"
                    />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
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
                    checked="checked"
                    id="male"
                    name="gender"
                    className="form mr-2"
                    value="male"
                  />
                  <label>Register as Hospital, Clinic</label>
                  <br />
                  <img
                    src={Img4}
                    className="background2 position-absolute"
                    alt="deco-background"
                  />
                </div>
                <p>Patients Click Here</p>
                <div className="radio-inputs mt-3">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    className="form mr-2"
                    value="female"
                  />
                  <label>Register as a Patient</label>
                  <br />
                  <img
                    src={Img5}
                    className="background2 position-absolute"
                    alt="deco-background"
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
