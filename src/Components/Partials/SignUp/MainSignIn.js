import React, { Component } from 'react';

import SignUpSwitch from './SignUpSwitch'

import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap';
import 'react-web-tabs/dist/react-web-tabs.css';



import Img2 from '../../../Images/rec.png'

import './MainSignIn.css'

export class SignInModal extends Component {
    render() {
        return (
            <div>
                 <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close position-absolute" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <div className="">
                                    <div className="sign-left position-relative">
                                        <img src={Img2} className="logo postion-absolute" alt="logo" />
                                        <div className="contents d-flex flex-column justify-content-center h-100">
                                            <h4>Welcome!</h4>
                                            <SignUpSwitch />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default SignInModal;