import React from 'react';

import './EmergencyNumber.css';
import CustomButton from '../CustomButton/CustomButton';

export default () => {
    return (
        <div className="emergency-number">
            <img src="./Images/ambulance.png" alt="Ambulance" id="Ambulance"/>
            <div className="ambulance-contact">
                <h5 className="head-text">EMERGENCY AMBULANCE SERVICE</h5>
                <p>Call Us: 0011/0102/0121</p>
                <p>Contact Your Nearest Hospital with One Click</p>
                <CustomButton buttonClass="emergency-button" buttonText="EMERGENCY" />
            </div>
        </div>
    )
}