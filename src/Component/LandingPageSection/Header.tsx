import React, { useState } from 'react';
import brandLogo from '../../images/Website Layout/Landing page assets/brandLogo.png';
import mobileBrandLogo from '../../images/Quuasar Logo/Large files/mobileBrandLogo.png'
import Joinus from '../LoginPageSection/Joinus';
import { NavLink } from "react-router-dom";
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'
import { StyledHeader } from './style';

const Header = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const [joinus, setJoinus] = useState(false);
    const joinusContent = (e) => {
        e.preventDefault();
        setJoinus(true)
    }

    return (
        <React.Fragment>
            <StyledHeader container direction="row">
                {matches ?
                    (
                        <> 
                            <Grid container item xs={6} alignItems="center" justify="center">
                                <NavLink to="/"><img src={mobileBrandLogo} alt="brandLogo" height="20px" width="132px" /></NavLink>
                            </Grid>
                        </>
                    )
                    : (
                        <>
                            <Grid container item xs={3} alignItems="center" justify="center">
                                <NavLink to="/"><img className="Styled-Brand-Logo" src={brandLogo} alt="brandLogo" /></NavLink>
                            </Grid>
                            <Grid container item xs={9} alignItems="center" justify="flex-end">
                                <Grid container item xs={3} alignItems="center" justify="center">
                                    <Grid className="Styled-Join-us"><span className="joinus-border" onClick={joinusContent} >Join us</span></Grid>
                                    {joinus && <Joinus setModalIsOpen={setJoinus} modalIsOpen={joinus} />}
                                </Grid>
                            </Grid>
                        </>
                    )

                }
                {/* <Grid container item xs={3} alignItems="center" justify="center">
                    <NavLink to="/"><img className="Styled-Brand-Logo" src={brandLogo} alt="brandLogo" /></NavLink>
                </Grid>
                <Grid container item lg={9} alignItems="center" justify="flex-end">
                    <Grid container item lg={3} alignItems="center" justify="center">
                        <Grid className="Styled-Join-us"><span className="joinus-border" onClick={joinusContent} >Join us</span></Grid>
                        {joinus && <Joinus setModalIsOpen={setJoinus} modalIsOpen={joinus} />}
                    </Grid>
                </Grid> */}
            </StyledHeader>

        </React.Fragment>
    );
};
export default Header;