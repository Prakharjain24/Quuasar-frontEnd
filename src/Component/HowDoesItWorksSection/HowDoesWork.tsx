import { Grid } from '@material-ui/core';
import React from 'react';
import styled from "@emotion/styled";
import workFlow from '../images/HowDoesItWork/how-does-it-work.gif';

const StyledWork = styled(Grid)`
text-align:center;
.worksHeader{
    padding-top: 62px;
    font-size: 68px;
    color:#0D2767;
}
.StyledImg{
    padding-top: 139px;
    width: 1280px;
    height: 720px;
}
`;

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