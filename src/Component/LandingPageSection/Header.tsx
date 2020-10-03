import React, { useState } from 'react';
import brandLogo from '../../images/Website Layout/Landing page assets/brandLogo.png';
import Joinus from '../LoginPageSection/Joinus';
import { NavLink } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { StyledHeader } from './style';

const Header = () => {

    const [joinus, setJoinus] = useState(false);

    const joinusContent = (e) => {
        e.preventDefault();
        setJoinus(true)
    }
    
    return (
        <React.Fragment>
            {/* <StyledHeader container>
                <Grid container>
                    <table width="100%">
                        <tr>
                            <td width="90%">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <NavLink to="/"><img className="Styled-Brand-Logo" src={brandLogo} alt="brandLogo" /></NavLink>
                                </nav>
                            </td>
                            <td>
                                <NavLink to="/"><Grid className="Styled-Join-us">Join us</Grid></NavLink>
                            </td>
                        </tr>
                    </table>
                </Grid>
            </StyledHeader>  */} 

            <StyledHeader container direction="row">
                <Grid container item lg={3} alignItems="center" justify="center">
                    <NavLink to="/"><img className="Styled-Brand-Logo" src={brandLogo} alt="brandLogo" /></NavLink>
                </Grid>
                <Grid container item lg={9} alignItems="center" justify="flex-end">
                    <Grid container item lg={3} alignItems="center" justify="center">
                        {/* <NavLink to={joinusContent} ><Grid className="Styled-Join-us" >Join us</Grid></NavLink> */}
                        <Grid className="Styled-Join-us"><span className="joinus-border" onClick={joinusContent} >Join us</span></Grid>
                        {joinus && <Joinus setModalIsOpen={setJoinus} modalIsOpen={joinus}/>}
                    </Grid>
                </Grid>
            </StyledHeader>
            
        </React.Fragment>
    );
};
export default Header;