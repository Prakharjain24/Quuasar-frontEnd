import { Button, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import brandLogo from '../../images/Website Layout/Signup page assets/brandLogo.png';
import Registered from '../LoginPageSection/Registered';
import { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { StyledButtonGrid, StyledButtonLeftGrid, StyledFooterMobile, StyledFromMobile, StyledHeaderLeftGrid, StyledHeaderMobile, StyledImageMobile, StyledInputMobile, StyledLeftGrid, StyledMobileView, StyledRightGrid, StyledTitleLeftGrid, StyledTitleMobile } from './style';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import painting from '../../images/Website Layout/Signup page assets/Painting.png';
import facebookicon from '../../images/Website Layout/Landing page assets/facebook-icon.png';
import instaicon from '../../images/Website Layout/Landing page assets/insta-icon.png';
import linkedinicon from '../../images/Website Layout/Landing page assets/linkin-icon.png';
import twittericon from '../../images/Website Layout/Landing page assets/twitter-icon.png';
import brandlogoBottom from '../../images/Website Layout/Landing page assets/brandLogo.png'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Loginpage = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    let query = useQuery();
    let choice = query.get('select');
    if (choice == null) {
        choice = 'client';
    }
    const [selectUserType, setSelectUserType] = useState(choice);
    const clientContent = () => {
        setSelectUserType('client');
    }
    const professionalContent = () => {
        setSelectUserType('professional');
    }

    useEffect(() => {
        console.log('hello print', selectUserType);
        switch (selectUserType) {
            case 'client': {
                console.log('hello', selectUserType);
                var btn = document.getElementById("clientid");
                var btn1 = document.getElementById("professionalid");
                if (btn != null && btn1 != null) {
                    // setSelectUserType('client')
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
                    // setSelectUserType('professional');
                    btn.style.backgroundColor = '#0D2767';
                    btn.style.color = '#fff';
                    btn1.style.backgroundColor = "transparent";
                    btn1.style.color = 'black';
                }
                break;
            }
        }
    })

    const [registeredStatus, setRegisteredStatus] = useState(false);

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            };
        });
    };

    const registeredContent = (e) => {
        e.preventDefault();
        setRegisteredStatus(true)
    }

    return (
        <React.Fragment>
            {matches ? (
                <>
                    <StyledMobileView> 

                        <StyledHeaderMobile container xs={12} direction="row">
                            <Grid container item xs={6} alignItems="center" justify="center">
                                <NavLink to="/"><img className="Styled-Brand-Logo" src={brandLogo} alt="brandLogo" /></NavLink>
                            </Grid>
                        </StyledHeaderMobile>
                        {/* 
                        <Grid container xs={5} direction="column" justify="center" alignItems="center" className="brandLogo-mob">
                            <NavLink to="/"><img src={brandLogo} alt="brandLogo" width="132px" height="20px" /></NavLink>
                        </Grid> */}

                        {/* <Grid container xs={10} direction="column" justify="space-around" alignItems="center">
                            <Grid container className="title1">Join us in</Grid>
                            <Grid container className="title1">this journey</Grid>
                            <Grid container className="paragraph">
                                <span>Coming soon</span>
                            </Grid>
                        </Grid> */}

                        {/* <StyledTitleMobile className="textMargin" item container direction="column" justify="flex-start" alignContent="flex-start">
                            <Grid container className="title1" direction="column" justify="flex-start" alignContent="flex-start">Join us in</Grid>
                            <Grid container className="title1" direction="column" justify="flex-start" alignContent="flex-start">this journey</Grid>
                            <Grid container className="paragraph" direction="column" justify="flex-start" alignContent="flex-start">
                                <span>Coming soon</span>
                            </Grid>
                        </StyledTitleMobile> */}

                        <StyledTitleMobile> 
                            <Grid container className="textMargin" direction="column" justify="flex-start" alignContent="flex-start">
                                <Grid container className="title1" direction="column" justify="flex-start" alignContent="flex-start">Join us in</Grid>
                                <Grid container className="title1" direction="column" justify="flex-start" alignContent="flex-start">this journey</Grid>
                            </Grid>
                            <Grid container className="textMargin" direction="column" justify="flex-start" alignContent="flex-start">
                                <Grid container className="paragraph" direction="column" justify="flex-start" alignContent="flex-start">
                                    <span>Coming soon...</span>
                                </Grid>
                            </Grid>
                        </StyledTitleMobile>

                        <StyledFromMobile container item direction="column" justify="center" alignItems="center">
                            <StyledButtonGrid container direction="column" justify="center" alignItems="center" className="styled-form-btn">
                                <Grid container xs={10} direction="row" justify="space-around" alignItems="center">
                                    <Grid container item xs={6} direction="column" justify="space-around" alignItems="center">
                                        <Button
                                            id="clientid"
                                            className="Styled-on-button"
                                            variant="outlined"
                                            disableRipple
                                            disableFocusRipple
                                            onClick={clientContent}
                                        >Customer
                                        </Button>
                                    </Grid>
                                    <Grid container item xs={6} direction="column" justify="space-around" alignItems="center">
                                        <Button
                                            id="professionalid"
                                            className="Styled-on-button"
                                            variant="outlined"
                                            disableRipple
                                            disableFocusRipple
                                            onClick={professionalContent}
                                        >Professional
                                        </Button>
                                    </Grid>
                                </Grid>
                            </StyledButtonGrid>

                            <Grid container xs={10} direction="column" justify="space-around" alignItems="flex-end" className="styled-form-size">
                                <StyledInputMobile container direction="column" justify="flex-start" alignItems="center">
                                    <Grid container xs={8} direction="column" justify="center" alignItems="center">
                                        <Grid container
                                            direction="column"
                                            justify="center"
                                            alignItems="center">
                                            <Grid container>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    autoComplete="off"
                                                    name="fullname"
                                                    value={data.fullname}
                                                    onChange={InputEvent}
                                                    placeholder="Name"
                                                />
                                            </Grid>
                                            <Grid container>
                                                <input
                                                    type="phone"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    autoComplete="off"
                                                    name="phone"
                                                    value={data.phone}
                                                    onChange={InputEvent}
                                                    placeholder="Mobile Number"
                                                />
                                            </Grid>
                                            <Grid container>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleFormControlInput1"
                                                    autoComplete="off"
                                                    name="email"
                                                    value={data.email}
                                                    onChange={InputEvent}
                                                    placeholder="E-mail"
                                                />
                                            </Grid>
                                            <Grid container>
                                                <Button
                                                    className="Styled-on-registered"
                                                    variant="outlined"
                                                    type="submit"
                                                    onClick={registeredContent}
                                                >Registered
                                                </Button>
                                                {registeredStatus && <Registered setModalIsOpen={setRegisteredStatus} modalIsOpen={registeredStatus} />}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </StyledInputMobile>
                            </Grid>
                        </StyledFromMobile>

                        <StyledImageMobile container item direction="column" justify="flex-end" alignItems="center">
                            <Grid container item direction="column" justify="center" alignItems="center">
                                <img src={painting} alt="painting-mob" height="140px" ></img>
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
                            <img className="logoBottom" src={brandlogoBottom} alt={brandlogoBottom}/>
                        </Grid>
                    </StyledFooterMobile>
                        
                    </StyledMobileView>
                </>
            ) : (
                    <>
                        <Grid container xs={12}>
                            <StyledLeftGrid container xs={8}>
                                <StyledHeaderLeftGrid container xs={12} direction="row">
                                    <Grid container item xs={4} alignItems="center" justify="center">
                                        <NavLink to="/"><img className="Styled-Brand-Logo" src={brandLogo} alt="brandLogo" /></NavLink>
                                    </Grid>
                                </StyledHeaderLeftGrid>

                                <Grid container xs={12}>
                                    <StyledTitleLeftGrid className="textMargin" item container xs={8} direction="column" justify="flex-start" alignContent="flex-start">
                                        <Grid container className="title1" direction="column" justify="flex-start" alignContent="flex-start">Join us</Grid>
                                        <Grid container className="title1" direction="column" justify="flex-start" alignContent="flex-start">in this journey</Grid>
                                        <Grid container className="paragraph" direction="column" justify="flex-start" alignContent="flex-start">
                                            <span>Coming soon</span>
                                        </Grid>
                                    </StyledTitleLeftGrid>

                                    <StyledButtonLeftGrid item container xs={4} direction="column" justify="flex-start" alignContent="flex-end">
                                        <Grid container xs={6} direction="column" justify="flex-start" alignContent="flex-end">
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
                                    </StyledButtonLeftGrid>
                                </Grid>
                            </StyledLeftGrid>

                            <StyledRightGrid container xs={4} direction="column" justify="flex-start" alignItems="center">
                                <Grid container xs={8} direction="column" justify="center" alignItems="center">
                                    <Grid container
                                        direction="column"
                                        justify="center"
                                        alignItems="center">
                                        <Grid container>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                autoComplete="off"
                                                name="fullname"
                                                value={data.fullname}
                                                onChange={InputEvent}
                                                placeholder="Name"
                                            />
                                        </Grid>
                                        <Grid container>
                                            <input
                                                type="phone"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                autoComplete="off"
                                                name="phone"
                                                value={data.phone}
                                                onChange={InputEvent}
                                                placeholder="Mobile Number"
                                            />
                                        </Grid>
                                        <Grid container>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                autoComplete="off"
                                                name="email"
                                                value={data.email}
                                                onChange={InputEvent}
                                                placeholder="E-mail"
                                            />
                                        </Grid>
                                        <Grid container>
                                            <Button
                                                className="Styled-on-registered"
                                                variant="outlined"
                                                type="submit"
                                                onClick={registeredContent}
                                            >Registered
                                    </Button>
                                            {registeredStatus && <Registered setModalIsOpen={setRegisteredStatus} modalIsOpen={registeredStatus} />}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </StyledRightGrid>
                        </Grid>
                    </>
                )
            }
        </React.Fragment>
    );
};
export default Loginpage;