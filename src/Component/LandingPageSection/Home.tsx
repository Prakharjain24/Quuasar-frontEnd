import React, { useState } from 'react';
import Header from './Header';
import Grid from "@material-ui/core/Grid";
import { Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'
import { StyledHome, StyledMobileViewHome } from './style';
import Joinus from '../LoginPageSection/Joinus';

const Home = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const [joinus, setJoinus] = useState(false);
    const joinusContent = (e) => {
        e.preventDefault();
        setJoinus(true)
    }
    return (
        < React.Fragment >
            {matches ? (
                <>
                    <Header />
                    <StyledMobileViewHome>
                        <Grid container direction="column" justify="flex-end" alignItems="center" className="fullHeight">
                            <Grid container item xs={10} direction="column" justify="flex-end" alignItems="flex-end" wrap="nowrap">
                                <Grid container className="heading" direction="column" justify="center" alignItems="flex-start">Build relationships,</Grid>
                                <Grid container className="heading" direction="column" justify="center" alignItems="flex-start">while building</Grid>
                                <Grid container className="heading" direction="column" justify="center" alignItems="flex-start">home</Grid>
                                <Grid container direction="column" className="paragraph" justify="flex-end" alignItems="flex-start">
                                    <span>Trusted professionals to build and</span>
                                    <span>maintain your house, under one</span>
                                    <span>roof.</span>
                                </Grid>

                                <Grid container item direction="column" justify="flex-end" alignItems="flex-start" spacing={0} className="getstartButton">
                                    <Button
                                        className="Styled-on-button"
                                        variant="outlined"
                                        onClick={joinusContent}
                                    >Join us
                                        </Button>
                                    {joinus && <Joinus setModalIsOpen={setJoinus} modalIsOpen={joinus} />}
                                </Grid>
                            </Grid>
                        </Grid>
                    </StyledMobileViewHome>
                </>
            ) : (
                    <>
                        <StyledHome container direction="column" wrap="nowrap">
                            <Header />
                            <Grid container item alignItems="flex-end" justify="center" className="paragraphWrapper">
                                <Grid container direction="column" item sm={10} alignItems="center" justify="flex-start" wrap="nowrap">
                                    <Grid container className="heading1">Build relationships,</Grid>
                                    <Grid container className="heading2">while building home</Grid>
                                    <Grid container direction="column" className="paragraph">
                                        <span>Trusted professionals to build and</span>
                                        <span>maintain your house, under one roof.</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StyledHome>
                    </>
                )}
        </React.Fragment >
    );
};
export default Home;