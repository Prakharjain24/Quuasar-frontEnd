import { Grid } from '@material-ui/core';
import React from 'react';
import workFlow from '../../images/Website Layout/Landing page assets/How-does-it-work.gif';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'
import { StyledWork } from './style';

const HowDoesItWork = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <React.Fragment> 
            {matches ? (
                <>
                    <StyledWork container item direction="column" justify="center" alignItems="center">
                        <Grid container item direction="column" justify="center" alignItems="center" className="worksHeader" style={{fontSize : "30px", paddingTop : "36px"}}>
                            How does it work?
                        </Grid>
                        <Grid>
                            <img className="StyledImg" src={workFlow} alt="HowDoesItWork" width="417px" height="400px" style={{paddingTop : "50px"}}/>
                        </Grid>
                    </StyledWork>
                </>
            ) : (
                    <>
                        <StyledWork container item direction="column" justify="center" alignItems="center">
                            <Grid container item justify="center" alignItems="center" className="worksHeader">
                                How does it work?
            </Grid>
                            <Grid>
                                <img className="StyledImg" src={workFlow} alt="HowDoesItWork" width="1280px" height="720px" />
                            </Grid>
                        </StyledWork>
                    </>
                )}
            {/* <StyledWork container item direction="column" justify="center" alignItems="center">
            <Grid container item justify="center" alignItems="center" className="worksHeader">
            How does it work?
            </Grid>
                <Grid>
                    <img className="StyledImg" src={workFlow} alt="HowDoesItWork" width="1351px" height="951px" />
                </Grid>
            </StyledWork> */}
        </React.Fragment>
    );
};
export default HowDoesItWork;