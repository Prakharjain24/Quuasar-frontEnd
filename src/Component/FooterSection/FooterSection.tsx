import React from 'react';
import { Grid } from '@material-ui/core';
import styled from "@emotion/styled";
import facebookicon from '../images/Footer/facebookicon.png';
import instaicon from '../images/Footer/instaicon.png';
import linkedinicon from '../images/Footer/linkedinicon.png';
import twittericon from '../images/Footer/twittericon.png';
import footerBgImg from '../images/Footer/footerbgrectangle.png';
import brandlogoBottom from '../images/Footer/brandLogo.png';

const StyledFooter = styled(Grid)`
    background-image: url(${footerBgImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 163px;
    width: 1920px;
    .footerbg{
        padding-top: 129px;
    }
    .footerText{
    padding-top: 22px;
    padding-left: 144px;
    font-size: 24px;
    font-weight: bold;
    color:#fff;
    }
    .facebook-icon{
        width:34px;
        height:34px;
        padding-top: 22px;
        padding-left: 144px;
    }
    .linkedin-icon{
        width:34px;
        height:34px;
        padding-top: 22px;
        padding-left: 22px;
    }
    .insta-icon{
        width:34px;
        height:34px;
        padding-top: 22px;
        padding-left: 22px;
    }
    .twitter-icon{
        width:34px;
        height:34px;
        padding-top: 22px;
        padding-left: 22px;
    }
    .logoBottom{
        width: 273px;
        height: 41px;
        padding-right:144px;
    }
    }
    `;

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