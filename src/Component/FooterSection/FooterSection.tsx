import React from 'react';
import { NavLink } from "react-router-dom";
import './style';
import { Grid } from '@material-ui/core';
import facebookicon from '../../images/Website Layout/Landing page assets/facebook-icon.png';
import instaicon from '../../images/Website Layout/Landing page assets/insta-icon.png';
import linkedinicon from '../../images/Website Layout/Landing page assets/linkin-icon.png';
import twittericon from '../../images/Website Layout/Landing page assets/twitter-icon.png';
import brandlogoBottom from '../../images/Website Layout/Landing page assets/brandLogo.png'
import { StyledFooter, StyledFooterMobile } from './style';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'

const FooterSection = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <React.Fragment>
            {matches ? (
                <>
                    <StyledFooterMobile container direction="column" justify="center" className="footerbgMB">
                        <Grid container item xs={6} direction="column" justify="flex-start" alignItems="center">
                            <Grid className="footerText" direction="row" justify="flex-start">Connect to us with</Grid>
                            <Grid direction="row" justify="flex-start">
                                <img className="facebook-icon" src={facebookicon} alt="facebookicon" />
                                <img className="linkedin-icon" src={linkedinicon} alt="linkedinicon" />
                                <img className="insta-icon" src={instaicon} alt="instaicon" />
                                <img className="twitter-icon" src={twittericon} alt="twittericon" />
                            </Grid>
                        </Grid>
                        <Grid container item xs={6} direction="row" justify="flex-end" alignItems="center">
                            <img className="logoBottom" src={brandlogoBottom} alt={brandlogoBottom} />
                        </Grid>
                    </StyledFooterMobile>
                </>
            ) : (
                    <StyledFooter container item direction="row" wrap="nowrap" justify="center" alignItems="center">
                        <Grid container direction="row" item sm={10} wrap="nowrap">
                            <Grid container direction="column" justify="flex-start" alignItems="center" item sm={9}>
                                <Grid container direction="column" justify="flex-start">
                                    <Grid item sm={4} className="footerText">Connect to us with</Grid>
                                    <Grid container direction="row" wrap="nowrap" justify="space-between" item sm={2}>
                                        <img className="socialSitesIcon" src={facebookicon} alt="facebookicon" />
                                        <img className="socialSitesIcon" src={linkedinicon} alt="linkedinicon" />
                                        <img className="socialSitesIcon" src={instaicon} alt="instaicon" />
                                        <img className="socialSitesIcon" src={twittericon} alt="twittericon" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item sm={3} alignItems="center" justify="flex-end">
                                <NavLink to="/"><img className="logoBottom" src={brandlogoBottom} alt={brandlogoBottom} /></NavLink>
                            </Grid>
                        </Grid>
                    </StyledFooter>
                )
            }

        </React.Fragment>
    );
}
export default FooterSection;