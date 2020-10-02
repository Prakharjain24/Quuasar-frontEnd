import { Grid } from '@material-ui/core';
import styled from "@emotion/styled";
import Image from '../../images/Website Layout/Landing page assets/Backgroundimage.png';

export const StyledHeader = styled(Grid)`
height: 80px;

.Styled-Brand-Logo{
    width: 160px;
    height: 25px;
    }
.Styled-Join-us{
    font-size: 18px;
    // width: 80px;
    color: #fff;
    font-weight: bold;
    }
.Styled-Join-us:hover{
    color: #fff;
    border-bottom: 2px solid #fff;
}
.joinus-border:hover{
    border-bottom: 2px solid #fff;
    // border-bottom-style:solid;
    // border-bottom-width:thin;
}
`;
 
export const StyledHome = styled(Grid)`
    background-image: url(${Image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    font-family: 'Montserrat-bold' !important;

    .paragraphWrapper{
        height: 82%;
    }

    .heading1{
    color: #fff;
    font-size: 50px;
    }
    .heading2{
    color: #fff;
    font-size: 50px;
    margin-top: -10px; 
    }
    .paragraph{
    color: #fff;
    font-size: 20px;
    padding-top: 20px;
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