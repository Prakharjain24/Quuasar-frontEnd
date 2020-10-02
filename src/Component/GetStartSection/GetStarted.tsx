import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import Joinus from '../LoginPageSection/Joinus';
import { StyledGetStart } from './style';

const GetStarted = () => {
    const [joinus, setJoinus] = useState(false);

    const joinusContent = (e) => {
        e.preventDefault();
        setJoinus(true)
    }
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};
export default GetStarted; 