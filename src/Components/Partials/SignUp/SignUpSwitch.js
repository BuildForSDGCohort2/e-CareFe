import React, { Component } from 'react';
import SignUp from './SignUp'
import SignUpPatientOne from './SignUpPatientOne'
import SignUpPatientTwo from './SignUpPatientTwo'

import 'react-web-tabs/dist/react-web-tabs.css';

import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap';

import './MainSignIn.css'

export class SignUpSwitch extends Component {
    state = {
        step: 1,
        count: 1,
        secondCount: 0,
        thirdCount: 0,

        accountType: "Hospital"
    }
    // Moving to next step
    nextStep = () => {
        const { step } = this.state;
        const { secondCount } = this.state;
        this.setState({
            step: step + 1 + secondCount
        });
    }
    nextCount = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1
        });
    }
    nextSecondCount = () => {
        const { secondCount } = this.state;
        this.setState({
            secondCount: secondCount + 1
        });
    }
    nexThirdCount = () => {
        const { thirdCount } = this.state;
        this.setState({
            thirdCount: thirdCount + 1
        });
    }


    setAccountType = (e) => {
        const { value } = e.target;
        console.log("value", value)
        this.setState({
            accountType: value
        })
    }

    render() {
        const { step } = this.state
        const { count } = this.state
        const { secondCount } = this.state
        const { thirdCount } = this.state
        switch (step) {
            case 1:
                return (
                    <SignUp
                        nextStep={this.nextStep}
                        setAccountType={this.setAccountType}
                        accountType={this.state.accountType}
                    />
                );
            case 2:
                return (
                    <SignUpPatientOne
                        count={this.state.count}
                        nextCount={this.nextCount}
                    />
                )

            case 3:
                return (
                    <SignUpPatientTwo
                        nextStep={this.nextStep}
                        secondCount={this.state.secondCount}
                        thirdCount={this.state.thirdCount}
                        nextSecondCount={this.nextSecondCount}
                        nextThirdCount={this.nexThirdCount}
                    />
                )
        }
    }
}
export default SignUpSwitch;