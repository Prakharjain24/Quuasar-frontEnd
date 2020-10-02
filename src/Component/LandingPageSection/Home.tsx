import React from 'react';
import Header from './Header';
import Grid from "@material-ui/core/Grid";
import { StyledHome } from './style';

const Home = () => {
    return (
        // <StyledHome container>
        //        <Header />
        //     <Grid item>
        //         <Grid className="heading1">Build relationships,</Grid>
        //         <Grid className="heading2">while building home</Grid>
        //         <Grid className="paragraph1">Trusted professionals to build and</Grid>
        //         <Grid className="paragraph2">maintain your house, under one roof.</Grid>
        //     </Grid>
        // </StyledHome>

        <StyledHome container direction="column" wrap="nowrap">
        <Header />
        <Grid container item alignItems="flex-end" justify="center" className="paragraphWrapper">
            <Grid item xs={11}>
                <Grid className="heading1">Build relationships,</Grid>
                <Grid className="heading2">while building home</Grid>
                <Grid container direction="column" className="paragraph">
                    <span>Trusted professionals to build and</span>
                    <span>maintain your house, under one roof.</span>
                </Grid>
            </Grid>
        </Grid>
    </StyledHome>
    );
};
export default Home;