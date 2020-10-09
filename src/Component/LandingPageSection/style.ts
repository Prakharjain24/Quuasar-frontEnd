import { Grid } from '@material-ui/core';
import styled from "@emotion/styled";
import Image from '../../images/Website Layout/Landing page assets/Backgroundimage.png';
import mobileBG from '../../images/Website Layout/Landing page assets/mobileBG.png';

// *************** Header css **************************

export const StyledHeader = styled(Grid)`
height: 80px;
// background-color: yellow;
.Styled-Brand-Logo{
    width: 160px;
    height: 25px;
}

.joinUsLink{
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}

.joinUsLink:hover{
    color: #fff;
    border-bottom: 2px solid #fff;
}
.joinus-border:hover{
    border-bottom: 2px solid #fff;
}
`;
 
// *************** Home css **************************

export const StyledMobileViewHome = styled(Grid)`
background-image: url(${mobileBG});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
height: 92vh;
width: 100%;
font-family: 'Montserrat-bold' !important;
.fullHeight{
    height: 100%;
    // background-color: lightgreen;
}
 
// //    height: 21vh;
//     // background-color: grey; 
//     .title1{
//         margin-left: 33px;
//         font-weight: 900;
//         color: #fff;
//         font-size: 29px;
//         }
//     .paragraph{
//         margin-left: 33px;
//         color: #fff;
//         padding-top: 10px;
//         font-size: 20px;
//     } 

.heading{
    color: #fff;
    font-size: 29px;
    font-weight: 900;
    }
    .paragraph{
        color: #fff;
        font-size: 20px;
        padding-top: 30px;
        }


        .Styled-on-button{
            border: 0px solid;
            border-radius: 50px;
            font-size: 12px;
            font-weight: bold;
            background-color: #fff;
            width: 100px;
            margin-top: 18px;
            margin-bottom: 30px;
            height: 50px;
        } 
        .Styled-on-button:hover{
            background-color: #29ABE2;
            color: #0D2767;
        }
`;

export const StyledHome = styled(Grid)`
    background-image: url(${Image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;

    .paragraphWrapper{
        height: 82%;
    }
    .heading{
    color: #fff;
    font-size: 50px;  
    font-weight: 900;
    }
    .heading1{
        color: rgb(255, 255, 255);
        font-size: 50px;
        font-weight: bold;
    }
    .heading2{
        color: rgb(255, 255, 255);
        font-size: 50px;
        margin-top: -10px;
        font-weight: bold; 
    }
    .paragraph{
        color: #fff;
        font-size: 20px;
        padding-top: 20px;
        font-weight: medium;
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