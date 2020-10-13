import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Joinus from '../LoginPageSection/Joinus';
import { StyledGetStart } from './style';

const GetStarted = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const [joinus, setJoinus] = useState(false);
    const joinusContent = (e) => {
        e.preventDefault();
        setJoinus(true)
    }
    return (
        <React.Fragment>
            {matches
                ? (<>
                    <StyledGetStart container item direction="column" justify="center" alignItems="center">
                        <Grid container item justify="center" alignItems="center" className="get-header-mobile" style={{ fontSize: "30px" }}>
                            Let's get started
                </Grid>
                        <Grid container item direction="column" justify="center" alignItems="center" className="get-btn-mobile">
                            <Button
                                className="Styled-btn-mobile"
                                variant="outlined"
                                onClick={joinusContent}
                            >Join us
                    </Button>
                            {joinus && <Joinus setModalIsOpen={setJoinus} modalIsOpen={joinus} />}
                        </Grid>
                    </StyledGetStart>
                </>)
                : (<>
                    <StyledGetStart container item direction="column" justify="center" alignItems="center">
                        <Grid container item justify="center" alignItems="center" className="getstartHeader">
                            Let's get started
                        </Grid>
                        <Grid container item direction="column" justify="center" alignItems="center" className="getstartButton">
                            <Button
                                className="Styled-on-button"
                                variant="outlined"
                                onClick={joinusContent}
                            >Join us
                            </Button>
                            {joinus && <Joinus setModalIsOpen={setJoinus} modalIsOpen={joinus} />}
                        </Grid>
                    </StyledGetStart>
                </>)
            }
        </React.Fragment>
    );
};
export default GetStarted; 