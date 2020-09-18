import React, { Component } from 'react'
import ServiceCard from '../Component/ServicesSection/ServiceCard';
import HowDoesItWork from '../Component/HowDoesItWorksSection/HowDoesWork';
import GetStarted from '../Component/GetStartSection/GetStarted';
import FooterSection from '../Component/FooterSection/FooterSection';

const Daytona = () => {
        return (
            <React.Fragment>
                <ServiceCard />
                <HowDoesItWork />
                <GetStarted />
                <FooterSection />
            </React.Fragment>
        )
}
export default Daytona;