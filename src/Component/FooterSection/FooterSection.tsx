import React from 'react';
import './style';
import { Grid } from '@material-ui/core';
import facebookicon from '../../images/Website Layout/Landing page assets/facebook-icon.png';
import instaicon from '../../images/Website Layout/Landing page assets/insta-icon.png';
import linkedinicon from '../../images/Website Layout/Landing page assets/linkin-icon.png';
import twittericon from '../../images/Website Layout/Landing page assets/twitter-icon.png';
import brandlogoBottom from '../../images/Website Layout/Landing page assets/brandLogo.png'
import { StyledFooter } from './style';

const FooterSection = () => {
    return (
        <React.Fragment>
            <StyledFooter container item direction="column" className="footerbg">
                <Grid direction="row">
                <Grid className="footerText">Connect to us with</Grid>
                    <img className="facebook-icon" src={facebookicon} alt="facebookicon"/>
                    <img className="linkedin-icon" src={linkedinicon} alt="linkedinicon"/>
                    <img className="insta-icon" src={instaicon} alt="instaicon"/>
                    <img className="twitter-icon" src={twittericon} alt="twittericon"/>
                    <img className="logoBottom" src={brandlogoBottom} alt={brandlogoBottom} style={{float: "right"}}/>
                </Grid>
            </StyledFooter>
        </React.Fragment>
    );
}
export default FooterSection;