import React, { Component } from "react";
import MainHeader from '../../Components/Partials/MainHeader/MainHeader'
import './contactus.css'

export default class ContactUs extends Component {
  render() {
    return (
      <div id="contactus">
         <MainHeader />
        <div id="banner">
          <div className="banner-inner">
            <h4>E-CARE</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
              dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,
              consectetur adipiscing
            </p>
            <button className="btn">Book an Appointment</button>
          </div>

          <div className="d-flex justify-content-end" id="contactus-form-container">
            <form id="contactus-form">
              <div className="form-group">
                <h4>GET IN TOUCH WITH E-CARE</h4>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="" placeholder="" />
                <label>Name.*:</label>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="" />
                <label>Email.*:</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="" />
                <label>Phone No.*:</label>
              </div>
              <div className="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder=""
                ></textarea>
                <label>Message.*:</label>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row m-0" id="row1">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="sect-1">
              <div className="d-flex">
                <div className="mr-3">
                  <svg
                    width="30"
                    height="42"
                    viewBox="0 0 30 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.416748 15.3021C0.416748 7.26042 6.95842 0.71875 15.0001 0.71875C23.0417 0.71875 29.5834 7.26042 29.5834 15.3021C29.5834 23.9896 20.3751 35.9688 16.6042 40.5313C15.7709 41.5313 14.2501 41.5313 13.4167 40.5313C9.62508 35.9688 0.416748 23.9896 0.416748 15.3021ZM17.0834 17.3854H21.2501C22.3959 17.3854 23.3334 16.4479 23.3334 15.3021C23.3334 14.1562 22.3959 13.2187 21.2501 13.2187H17.0834V9.05208C17.0834 7.90625 16.1459 6.96875 15.0001 6.96875C13.8543 6.96875 12.9167 7.90625 12.9167 9.05208V13.2187H8.75008C7.60425 13.2187 6.66675 14.1562 6.66675 15.3021C6.66675 16.4479 7.60425 17.3854 8.75008 17.3854H12.9167V21.5521C12.9167 22.6979 13.8543 23.6354 15.0001 23.6354C16.1459 23.6354 17.0834 22.6979 17.0834 21.5521V17.3854Z"
                      fill="#219653"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Corporate Address</h4>
                  <p>1 victoria island street lekki lagos</p>
                </div>
              </div>

              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6997362.671706087!2d-104.57258828568969!3d31.090799452682447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2sng!4v1600166009627!5m2!1sen!2sng"
                  width="387"
                  height="450"
                  frameborder="0"
                  style={{border:0}}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <div className="d-flex">
                <div>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.0453 31.8087L34.7536 31.2045C33.4828 31.0587 32.2328 31.4962 31.3369 32.392L27.5036 36.2253C21.6078 33.2253 16.7744 28.4128 13.7744 22.4962L17.6286 18.642C18.5244 17.7462 18.9619 16.4962 18.8161 15.2253L18.2119 9.97534C17.9619 7.87118 16.1911 6.28784 14.0661 6.28784H10.4619C8.10775 6.28784 6.14942 8.24617 6.29525 10.6003C7.39942 28.392 21.6286 42.6003 39.3994 43.7045C41.7536 43.8503 43.7119 41.892 43.7119 39.5378V35.9337C43.7327 33.8295 42.1494 32.0587 40.0453 31.8087Z"
                      fill="#219653"
                    />
                  </svg>
                </div>
                <div>
                  <h4>CALL US</h4>
                  <p>1234567890</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12" id="sect-2-con">
            <div className="sect-2">
              <img src="images/contactus_img.png"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
