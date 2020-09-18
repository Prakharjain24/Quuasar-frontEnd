import { Grid } from '@material-ui/core';
import styled from "@emotion/styled";
import Image from '../images/Backgroundimage.png';

const StyledHeader = styled(Grid)`
.Styled-Brand-Logo{
    padding-top: 46px;
    padding-left: 144px;
    width: 210px;
    height: 31px;
    }

    .Styled-Join-us{
    padding-top: 46px;
    padding-right: 144px;
    font-size: 22px;
    width: 80px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    }
`;

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