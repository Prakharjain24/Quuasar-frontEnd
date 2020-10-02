import { Grid } from '@material-ui/core';
import React from 'react';
import workFlow from '../../images/Website Layout/Landing page assets/How-does-it-work.gif';
import { StyledWork } from './style';

const HowDoesItWork = () => {
    return (
        <React.Fragment>
            <StyledWork container item direction="column" justify="center" alignItems="center">
            <Grid container item justify="center" alignItems="center" className="worksHeader">
            How does it work?
            </Grid>
                <Grid>
                    <img className="StyledImg" src={workFlow} alt="HowDoesItWork" width="1351px" height="951px" />
                </Grid>
            </StyledWork>
        </React.Fragment>
    );
};
export default HowDoesItWork;