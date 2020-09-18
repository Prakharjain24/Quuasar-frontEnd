import React from 'react';
import styled from "@emotion/styled";
import brandLogo from '../images/brandLogo.png'
import { NavLink } from "react-router-dom";
import { Grid } from '@material-ui/core';

const StyledHeader = styled(Grid)`
.Styled-Brand-Logo{
    padding-top: 46px;
    padding-left: 144px;
    width: 210px;
    height: 31px;
    }

    .Styled-Join-us{
    padding-top: 46px;
    padding-right: 144px;
    font-size: 22px;
    width: 80px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    }
`;

const Header = () => {
    return (
        <React.Fragment>
            <StyledHeader container>
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
            </StyledHeader>
        </React.Fragment>
    );
};
export default Header;