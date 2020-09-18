import React from 'react';
import { Button, Grid } from '@material-ui/core';
import styled from "@emotion/styled";


const StyledGetStart = styled(Grid)`
.getstartHeader{
    padding-top: 45px;
    font-size: 68px;
    color:#0D2767;
}
.getstartButton{
    padding-top: 73px;
    padding-bottom: 129px;
}
.Styled-on-button{
    color: 0D2767;
    border-radius: 50px;
    border-color: #0D2767;
    width: 165px;
    height: 85px;
}
`;

const GetStarted = () => {
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
                    // color="#0D2767"
                    >Join us
                    </Button>
                </Grid>
            </StyledGetStart>
        </React.Fragment>
    );
};
export default GetStarted;