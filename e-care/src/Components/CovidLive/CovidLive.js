import React from 'react';

import { FaRegDotCircle, FaGlobeAfrica  } from "react-icons/fa";
import CovidOverview from '../Partials/CovidOverview/CovidOverview';
import './CovidLive.css';

export default () => {
    return (
        <div className="covid-live">
            <div className="covid-live-heading">
                <span ><FaRegDotCircle /></span>
                <span>Corona Tracker Live</span>
            </div>
            <div className="corona-news">
                <div className="country-picker">
                    <FaGlobeAfrica className="globe-icon" />
                    <select name="country">
                        <option>Global</option>
                    </select>
                </div>
                <div className="country-info">
                    <span> Corona News For You</span>
                    <div className="news-content">
                        <p>Stay Alert! Always wear Mask and Use Sanitizers</p>
                        <div className="covid-record">
                        <CovidOverview className="covid-record" customClass="covid-record" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="google-map">
                <img src='./Images/googlemap.png' alt="google maps placeholder" width="100%" />
            </div>
        </div>
    )
}