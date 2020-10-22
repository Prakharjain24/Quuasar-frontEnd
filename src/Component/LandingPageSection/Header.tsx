import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'
import Joinus from '../LoginPageSection/Joinus';
import { StyledHeader } from './style';
import WhiteHorizontalLetterLogo from '../../images/QuuasarLogo/White/WhiteHorizontalLetterLogo.svg';
import BlueHorizontalLetterLogo from '../../images/QuuasarLogo/Blue/BlueHorizontalLetterLogo.svg';

const Header = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const [joinus, setJoinus] = useState(false);

    const joinusContent = () => {
        setJoinus(true)
    }

    return (
        <React.Fragment>
            <StyledHeader container direction="row" justify="center">
                {matches ?
                    (<>
                        <Grid container direction="row" item xs={10} wrap="nowrap" justify="flex-start" alignItems="center">
                            <Grid container item xs={3} alignItems="center" justify="flex-start">
                                <NavLink to="/"><img src={BlueHorizontalLetterLogo} alt="brandLogo" height="20px" width="132px" /></NavLink>
                            </Grid>
                        </Grid>
                    </>)
                    : (<>
                        <Grid container direction="row" item sm={10} wrap="nowrap" justify="center" alignItems="center">
                            <Grid container item sm={3} alignItems="center" justify="flex-start">
                                <NavLink to="/"><img className="Styled-Brand-Logo" src={WhiteHorizontalLetterLogo} alt="brandLogo" /></NavLink>
                            </Grid>
                            <Grid container item sm={9} alignItems="center" justify="flex-end">
                                <Grid className="joinUsLink hover"><span className="joinus-border" onClick={joinusContent} >Join us</span></Grid>
                                {joinus && <Joinus setModalIsOpen={setJoinus} modalIsOpen={joinus} />}
                            </Grid>
                        </Grid>
                    </>)
                }
            </StyledHeader>
        </React.Fragment>
    );
};
export default Header;