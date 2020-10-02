import { Button, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import brandLogo from '../../images/Website Layout/Signup page assets/brandLogo.png';
import Registered from '../LoginPageSection/Registered';
import { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { StyledButtonLeftGrid, StyledHeaderLeftGrid, StyledLeftGrid, StyledRightGrid, StyledTitleLeftGrid } from './style';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Loginpage = () => {
    // let query = useQuery();
    // console.log("hello : ",query.get("select"));

    // const [clientStatus, setClientStatus] = useState(false);
    // const [professionalStatus, setProfessionalStatus] = useState(false);
    const [selectedUserType, setSelectedUserType] = useState('client');
    
    const clientContent = () => {
        setSelectedUserType('client')
    }
    const professionalContent = () => {
        setSelectedUserType('professional');
    }


    let query = useQuery();
    useEffect(() => {
        let choice = query.get('select');
        switch (choice) {
            case 'client': {
                // document.getElementById("clientid")?.onselect={clientStatus} ;
                var btn = document.getElementById("clientid");
                if (btn != null) {
                    setSelectedUserType('client')
                    btn.style.backgroundColor = '#0D2767';
                    btn.style.color = '#fff';

                    // btn.onclick={clientContent};
                    // {btn == clientStatus}
                    // {btn.onselect=clientStatus;}
                    // if
                    // btn.style.visibility="visible";   
                }
                break;
            }
            case 'professional': {
                var btn = document.getElementById("professionalid");
                if (btn != null) {
                    setSelectedUserType('professional');
                    btn.style.backgroundColor = '#0D2767';
                    btn.style.color = '#fff';
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
                        {/* <form onSubmit={registeredContent}> */}
                            {/* {registeredStatus && <Registered setModalIsOpen={setRegisteredStatus} modalIsOpen={registeredStatus} />} */}
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
                        {/* </form> */}
                    </Grid>
                </StyledRightGrid>
            </Grid>
        </React.Fragment>
    );
};
export default Loginpage;