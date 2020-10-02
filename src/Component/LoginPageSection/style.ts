import { Grid } from '@material-ui/core';
import styled from "@emotion/styled";
import croppedLogoIcon from '../../images/Website Layout/Signup page assets/Cropped-logo-icon.png';
import painting from '../../images/Website Layout/Signup page assets/Painting.png';

//////////////// Loginpage //////////////////////

export const StyledLeftGrid = styled(Grid)`
    // background-color: lightgreen;
    height: 100vh;
    background-image: url(${painting});
    background-size: cover;
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: 1025px 350px;
`;

export const StyledHeaderLeftGrid = styled(Grid)`
    height: 80px;
    // background-color: green;
    .Styled-Brand-Logo{
        width: 160px;
        height: 25px;
    }
`;

export const StyledTitleLeftGrid = styled(Grid)`
    height: 80vh;
    // background-color: pink; 
    .title1{
        margin-left: 80px;
        font-weight: bold;
        color: #283479;
        font-size: 38px;
        }
    .paragraph{
        margin-left: 80px;
        font-weight: bold;
        color: #29ABE2;
        font-size: 75px;
    } 
`;

export const StyledButtonLeftGrid = styled(Grid)`
    height: 80%;
    width: 200px;
    heigh: 15px; 
    // background-color: grey;

    .Styled-on-button{
    width: 350px;
    height: 47px;
    border: 2px solid;
    border-radius: 2rem 0rem 0rem 2rem;
    font-size: 21px;
    font-weight: bold;
    border-color: #0D2767;
    border-right: 0;
    margin-top: 50px;
    text-transform: none;
    cursor: pointer;
    display: inline-block;
    }
    .Styled-on-button:hover{
        background-color: #29ABE2;
        color: #fff;
    }
    button:focus{
        background-color: #0D2767;
        color: #fff;
    }
`;

export const StyledRightGrid = styled(Grid)`
    height: 100vh;
    background-color: #0D2767;
    background-image: url(${croppedLogoIcon});
    background-size: cover;
    background-position: right bottom; 
    background-repeat: no-repeat;
    background-size: 400px 250px; 

    .form-control{
    width: 350px;
    height: 40px;
    border: 0px solid;
    border-radius: 18px;
    font-size: 22px;
    font-style: italic;
    margin-top: 18px;
    outline: none;
    }

    .Styled-on-registered{
    width: 350px;
    height: 47px;
    border: 0px solid;
    border-radius: 50px;
    font-size: 25px;
    font-weight: bold;  
    background-color: #29ABE2;
    color: #fff;
    margin-top: 45px;
    text-transform: none;
    }
    .Styled-on-registered:hover{
        background-color: #29ABE2;
    }
    .form-control::placeholder {
        padding-left: 13px;
    }
    input{
        padding-left: 15px;
    }
`;

////////////////// Registered css /////////////////////

export const StyledtextGrid = styled(Grid)`
 .message1{
     color: #29ABE2;
     font-size: 45px;
     padding-left: 30px;
 }
 .message2{
     color: #283479;
     font-size: 45px;
 }
 .paragraph{
     font-size: 22px; 
     padding-top: 10px;
     padding-left: 30px;
 }
`;
export const StyledImageGrid = styled(Grid)`
 .checkoutImage{
     width: 193px;
     height: 188px;
 }
`;