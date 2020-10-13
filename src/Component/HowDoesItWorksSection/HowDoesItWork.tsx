import { Grid } from '@material-ui/core';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'
import { StyledWork } from './style';
import HowDoesItWorkGif from '../../images/WebLayout/LandingPage/HowDoesItWork.gif';

const HowDoesItWork = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <React.Fragment>
            {matches
                ? (
                    <>
                        <StyledWork container item direction="column" justify="center" alignItems="center">
                            <Grid container item direction="column" justify="center" alignItems="center" className="worksHeader" style={{ fontSize: "30px", paddingTop: "36px" }}>
                                How does it work?
                        </Grid>
                            <Grid>
                                <img className="StyledImg" src={HowDoesItWorkGif} alt="HowDoesItWork" srcSet={`${HowDoesItWorkGif} 1300w`} style={{ paddingTop: "50px" }} />
                            </Grid>
                        </StyledWork>
                    </>
                ) : (<>
                    <StyledWork container item direction="column" justify="center" alignItems="center">
                        <Grid container item justify="center" alignItems="center" className="worksHeader">
                            How does it work?
                            </Grid>
                        <Grid>
                            <img
                                className="StyledImg"
                                src={HowDoesItWorkGif}
                                alt="HowDoesItWork"
                                srcSet={`${HowDoesItWorkGif} 1300w`}
                            />
                        </Grid>
                    </StyledWork>
                </>)}
        </React.Fragment>
    );
};
export default HowDoesItWork;