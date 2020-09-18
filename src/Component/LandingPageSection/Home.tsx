import React from 'react';
import Header from './Header';
import styled from "@emotion/styled";
import Image from '../images/Backgroundimage.png';
import Grid from "@material-ui/core/Grid";

const StyledHome = styled(Grid)`
    background-image: url(${Image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;

    .heading1{
    padding-top: 300px;
    padding-left:144px;
    color: #fff;
    font-size: 86px;
    font-weight: bold;
    }
    .heading2{
    padding-left:144px;
    color: #fff;
    font-size: 86px;
    font-weight: bold;
    }
    .paragraph1{
    color: #fff;
    font-size: 33px;
    padding-top: 10px;
    font-style: normal;
    padding-left:144px;
    }
    .paragraph2{
    color: #fff;
    font-size: 33px;
    font-style: normal;
    padding-left:144px;
    }

    @media only screen and (max-width: 1920px){
    .container{
    width: 100%;
    padding: 0 10%;
    }
    }
    @media only screen and (max-width: 998px){
    .heading, .paragraph{
        font-size: 200%;
    }
    .paragraph{
        font-size: 100%;
    }
    }
`;

const Home = () => {
    return (
        <StyledHome container>
               <Header />
            <Grid item>
                <Grid className="heading1">Build relationships,</Grid>
                <Grid className="heading2">while building home</Grid>
                <Grid className="paragraph1">Trusted professionals to build and</Grid>
                <Grid className="paragraph2">maintain your house, under one roof.</Grid>
            </Grid>

        </StyledHome>
    );
};
export default Home;