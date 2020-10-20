import { Button, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import { NavLink, useLocation } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import BlueHorizontalLetterLogo from '../../images/QuuasarLogo/Blue/BlueHorizontalLetterLogo.svg';
import Registered from '../LoginPageSection/Registered';
import painting from '../../images/WebLayout/SignupPage/Painting.png';
import facebookicon from '../../images/WebLayout/LandingPage/SocialMedia/facebookIcon.svg';
import instaicon from '../../images/WebLayout/LandingPage/SocialMedia/instagramIcon.svg';
import linkedinicon from '../../images/WebLayout/LandingPage/SocialMedia/linkedinIcon.svg';
import twittericon from '../../images/WebLayout/LandingPage/SocialMedia/twitterIcon.svg';
import WhiteHorizontalLetterLogo from '../../images/QuuasarLogo/White/WhiteHorizontalLetterLogo.svg';
import {
    StyledButtonGrid,
    StyledFooterMobile,
    StyledFromMobile,
    StyledHeaderLeftGrid,
    StyledHeaderMobile,
    StyledImageMobile,
    StyledInputMobile,
    StyledLeftGrid,
    StyledMobileView,
    StyledRightGrid,
    StyledTitleMobile,
    StyledContentLeftGrid
} from './style';
import { Tabform } from './Form/Tabform';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Loginpage = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    let query = useQuery();
    let user = query.get('select');
    if (user == null) {
        user = 'client';
    }
    const [selectUserType, setSelectUserType] = useState(user);
    const [registerButtonStatus, setRegisterButtonStatus] = useState(false);

    useEffect(() => {
        handleButtonClick(user);
    }, [user]);

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        professional: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            };
        });
    };

    const handleButtonClick = (user) => {
        switch (user) {
            case 'client': {
                console.log('hello', selectUserType);
                var btn = document.getElementById("clientid");
                var btn1 = document.getElementById("professionalid");
                if (btn != null && btn1 != null) {
                    console.log('hello if condition ', selectUserType);
                    btn.style.backgroundColor = '#0D2767';
                    btn.style.color = '#fff';
                    btn1.style.backgroundColor = "transparent";
                    btn1.style.color = 'black';
                }
                break;
            }
            case 'professional': {
                console.log('hello', selectUserType);
                var btn = document.getElementById("professionalid");
                var btn1 = document.getElementById("clientid");
                if (btn != null && btn1 != null) {
                    console.log('hello if condition ', selectUserType);
                    btn.style.backgroundColor = '#0D2767';
                    btn.style.color = '#fff';
                    btn1.style.backgroundColor = "transparent";
                    btn1.style.color = 'black';
                }
                break;
            }
        }
    }

    const clientContent = () => {
        setSelectUserType('client');
        handleButtonClick('client');
    }
    const professionalContent = () => {
        setSelectUserType('professional');
        handleButtonClick('professional');
    }

    const handleRegisterClick = () => {
        setRegisterButtonStatus(true);
        console.log(data.fullname, data.phone, data.email, data.professional);
        setData({ fullname: "", phone: "", email: "", professional: "" });
    }

    return (
        <React.Fragment>
            {matches ? (
                <>
                    <StyledMobileView>
                        <StyledHeaderMobile container xs={12} direction="row">
                            <Grid container item xs={6} alignItems="center" justify="center">
                                <NavLink to="/"><img className="Styled-Brand-Logo" src={BlueHorizontalLetterLogo} alt="brandLogo" /></NavLink>
                            </Grid>
                        </StyledHeaderMobile>
                        <StyledTitleMobile>
                            <Grid className="textMargin" item container xs={10} direction="column" justify="flex-start" alignItems="center">
                                <Grid container direction="column" item xs={10} justify="flex-start" alignItems="flex-start">
                                    <Grid container className="title1" direction="column" justify="flex-start" alignItems="flex-start">
                                        <span>Join us</span>
                                        <span>in this journey</span>
                                    </Grid>
                                    <Grid container className="paragraph" direction="column" justify="flex-start" alignItems="flex-start">
                                        Coming soon
                                        </Grid>
                                </Grid>
                            </Grid>
                        </StyledTitleMobile>

                        <Tabform handleRegisterButtonClick={handleRegisterClick} handleRegisterInputChange={handleInputChange} inputData={data} />
                        {registerButtonStatus && <Registered setModalIsOpen={setRegisterButtonStatus} modalIsOpen={registerButtonStatus} />}
                        <StyledImageMobile container item direction="column" justify="flex-end" alignItems="center">
                            <Grid container item direction="column" justify="center" alignItems="center">
                                <img src={painting} alt="painting-mob" srcSet={`${painting} 1300w`}></img>
                            </Grid>
                        </StyledImageMobile>

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
                                <img className="logoBottom" src={WhiteHorizontalLetterLogo} alt="Brand Logo" />
                            </Grid>
                        </StyledFooterMobile>

                    </StyledMobileView>
                </>
            ) : (
                    <Grid container >
                        <StyledLeftGrid container item sm={8} alignItems="center" justify="center">
                            <StyledHeaderLeftGrid container item sm={10} alignItems="center" justify="flex-start" direction="row">
                                <NavLink to="/"><img className="brandLogo" src={BlueHorizontalLetterLogo} alt="brandLogo" /></NavLink>
                            </StyledHeaderLeftGrid>

                            <StyledContentLeftGrid container>
                                <Grid className="textMargin" item container xs={8} direction="column" justify="flex-start" alignItems="center">
                                    <Grid container direction="column" item sm={9} justify="flex-start" alignItems="flex-start">
                                        <Grid container className="title" direction="column" justify="flex-start" alignItems="flex-start">
                                            <Box pt={4}>
                                                <span>Join us</span>
                                            </Box>
                                            <Box>
                                                <span>in this journey</span>
                                            </Box>
                                        </Grid>
                                        <Grid container className="paragraph" direction="column" justify="flex-start" alignItems="flex-start">
                                            <Box pt={2}>Coming soon</Box>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item container sm={4} direction="column" justify="flex-start" alignItems="center">
                                    <Grid container direction="column" justify="flex-end" alignItems="flex-end">
                                        <Button
                                            id="clientid"
                                            className="Styled-on-button"
                                            variant="outlined"
                                            disableRipple
                                            disableFocusRipple
                                            onClick={clientContent}
                                        >Join as client
                                    </Button>
                                        <Button
                                            id="professionalid"
                                            className="Styled-on-button"
                                            variant="outlined"
                                            disableRipple
                                            disableFocusRipple
                                            onClick={professionalContent}
                                        >Join as professional
                                    </Button>
                                    </Grid>
                                </Grid>
                            </StyledContentLeftGrid>
                        </StyledLeftGrid>

                        <StyledRightGrid container item sm={4} direction="column" justify="flex-start" alignItems="center">
                            {selectUserType == 'client'
                                ? (<Grid id="client" container item sm={8} direction="column" justify="center" alignItems="center">
                                    <Grid container
                                        direction="column"
                                        justify="center"
                                        alignItems="center">
                                        <Grid container>
                                            <input
                                                type="text"
                                                className="textFields"
                                                id="name"
                                                autoComplete="off"
                                                name="fullname"
                                                value={data.fullname}
                                                onChange={handleInputChange}
                                                placeholder="Name"
                                            />
                                        </Grid>
                                        <Grid container>
                                            <input
                                                type="phone"
                                                className="textFields"
                                                id="mobileNumber"
                                                autoComplete="off"
                                                name="phone"
                                                value={data.phone}
                                                onChange={handleInputChange}
                                                placeholder="Mobile Number"
                                            />
                                        </Grid>
                                        <Grid container>
                                            <input
                                                type="email"
                                                className="textFields"
                                                id="email"
                                                autoComplete="off"
                                                name="email"
                                                value={data.email}
                                                onChange={handleInputChange}
                                                placeholder="E-mail"
                                            />
                                        </Grid>
                                        <Grid container>
                                            <Button
                                                className="Styled-on-registered"
                                                variant="outlined"
                                                type="submit"
                                                onClick={handleRegisterClick}>
                                                Register
                                    </Button>
                                            {registerButtonStatus && <Registered setModalIsOpen={setRegisterButtonStatus} modalIsOpen={registerButtonStatus} />}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                ) : (
                                    <Grid id="professional" container item sm={8} direction="column" justify="center" alignItems="center">
                                        <Grid container
                                            direction="column"
                                            justify="center"
                                            alignItems="center">
                                            <Grid container>
                                                <input
                                                    type="text"
                                                    className="textFields"
                                                    id="name"
                                                    autoComplete="off"
                                                    name="fullname"
                                                    value={data.fullname}
                                                    onChange={handleInputChange}
                                                    placeholder="Name"
                                                />
                                            </Grid>
                                            <Grid container>
                                                <input
                                                    type="phone"
                                                    className="textFields"
                                                    id="mobileNumber"
                                                    autoComplete="off"
                                                    name="phone"
                                                    value={data.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="Mobile Number"
                                                />
                                            </Grid>
                                            <Grid container>
                                                <input
                                                    type="email"
                                                    className="textFields"
                                                    id="email"
                                                    autoComplete="off"
                                                    name="email"
                                                    value={data.email}
                                                    onChange={handleInputChange}
                                                    placeholder="E-mail"
                                                />
                                            </Grid>
                                            <Grid container>
                                                <input
                                                    type="text"
                                                    className="textFields"
                                                    id="professional"
                                                    autoComplete="off"
                                                    name="professional"
                                                    value={data.professional}
                                                    onChange={handleInputChange}
                                                    placeholder="Professional"
                                                />
                                            </Grid>
                                            <Grid container>
                                                <Button
                                                    className="Styled-on-registered"
                                                    variant="outlined"
                                                    type="submit"
                                                    onClick={handleRegisterClick}>
                                                    Register
                                                        </Button>
                                                {registerButtonStatus && <Registered setModalIsOpen={setRegisterButtonStatus} modalIsOpen={registerButtonStatus} />}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            }
                        </StyledRightGrid>
                    </Grid>
                )
            }
        </React.Fragment>

    );
};
export default Loginpage;