import React from 'react'
import ContactSection from '../ContactSection/ContactSection';

import MainBanner from '../Partials/MainBanner/MainBanner';
import MainHeading from '../Partials/MainHeading/MainHeading';
import SubNav from '../Partials/SubNav/SubNav';
import IntensiveUnitList from './IntensiveUnitList';
import NonIntensiveUnitList from './NonIntensiveUnitList';
import MainHeader from '../../Components/Partials/MainHeader/MainHeader'
import './Units.css';

export default () => {
    return (
        <div className="units">
            <MainHeader/>
            <MainBanner image="./Images/hero.png" heading="Get Your Doctor" description="Reach Out To Our Doctors or Book Your Appointment Rightaway" page="hospitallist" />
            <img src="./Images/our-process.png" alt="our process" width="100%" height="120px" />
            <SubNav />
            <MainHeading title="Intensive Care Unit" />
            <IntensiveUnitList />
            <MainHeading title="Non-Intensive Care Unit" />
            <NonIntensiveUnitList />
            <ContactSection />
        </div>
    )
}
