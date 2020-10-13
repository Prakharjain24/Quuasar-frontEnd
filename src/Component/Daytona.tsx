import React, { Component } from 'react'
import ServiceCard from '../Component/ServicesSection/ServiceCard';
import HowDoesItWork from './HowDoesItWorksSection/HowDoesItWork';
import GetStarted from '../Component/GetStartSection/GetStarted';
import FooterSection from '../Component/FooterSection/FooterSection';
import Home from './LandingPageSection/Home';

const Daytona = () => {
    return (
        <React.Fragment>
            <Home />
            <ServiceCard />
            <HowDoesItWork />
            <GetStarted />
            <FooterSection />
        </React.Fragment>
    )
}
export default Daytona;