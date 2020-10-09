import { Grid } from '@material-ui/core';
import styled from "@emotion/styled";
import croppedLogoIcon from '../../images/Website Layout/Signup page assets/Cropped-logo-icon.png';
import painting from '../../images/Website Layout/Signup page assets/Painting.png';

//////////////// Loginpage Mobile view //////////////////////

export const StyledMobileView = styled(Grid)`
width: 100%;
`;

export const StyledHeaderMobile = styled(Grid)`
    height: 80px;
    // background-color: green;
    .Styled-Brand-Logo{
        width: 132px;
        height: 20px;
    }
`;

export const StyledTitleMobile = styled(Grid)`
    height: 21vh;
    // background-color: grey; 
    .title1{
        margin-left: 33px;
        font-weight: bold;
        color: #283479;
        font-size: 21px;
        }
    .paragraph{
        margin-left: 33px;
        font-weight: bold;
        color: #29ABE2;
        padding-top: 11px;
        font-size: 36px;
    } 
`;

export const StyledFromMobile = styled(Grid)`
height: 270px;
width: 100%;
// background-color: lightgreen;
.styled-form-size{
    // height: 304px;
    width: 100%;
    // border: 0px solid;
    border-radius: 0 0 1rem 1rem;
    border-top: 0;
    background-color: #0D2767;
    position: relative;
    text-align: center;
}
`;

export const StyledButtonGrid = styled(Grid)`
// background-color: pink;
.Styled-on-button{
    width: 171px;
    height: 45px;
    border: 2px solid;
    border-radius: 1rem 1rem 0 0;
    font-size: 14px;
    font-weight: bold;
    border-color: #0D2767;
    border-bottom: 0;
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

export const StyledInputMobile = styled(Grid)`
.form-control{
    width: 214px;
    height: 34px;
    border: 0px solid;
    border-radius: 17px;
    font-size: 13px;
    font-style: italic;
    margin-top: 14px;
    outline: none;
    }

    .Styled-on-registered{
    width: 228px;
    height: 34px;
    border: 0px solid;
    border-radius: 17px;
    font-size: 14px;
    font-weight: bold;  
    background-color: #29ABE2;
    color: #fff;
    margin-top: 27px;
    margin-bottom: 14px;
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

export const StyledImageMobile = styled(Grid)`
height: 45vh;
// background-color: grey; 
`;

export const StyledFooterMobile = styled(Grid)`
background-color: #283479;
height: 111px;
width: 100%;
.footerText{
    padding-top: 11px;
    padding-left: 23px;
    font-size: 13px;
    font-weight: bold; 
    color:#fff;
    }
.facebook-icon{
    width:20px;
    height:20px;
    padding-top: 9px;
    padding-left: 23px;
}
.linkedin-icon{
    width:20px;
    height:20px;
    padding-top: 9px;
    padding-left: 15px;
}
.insta-icon{
    width:20px;
    height:20px;
    padding-top: 9px;
    padding-left: 15px;
}
.twitter-icon{
    width:20px;
    height:20px;
    padding-top: 9px;
    padding-left: 15px;
}
.logoBottom{
    width: 107px;
    height: 16px;
    padding-right:23px;
}
`;

//////////////// Loginpage //////////////////////

export const StyledLeftGrid = styled(Grid)`
    height: 100vh;
    background-image: url(${painting});
    background-size: cover;
    background-position: right bottom;
    background-repeat: no-repeat;
    // background-size: 50px 50px;
    background-size: 825px 294px;
`;

export const StyledHeaderLeftGrid = styled(Grid)`
    height: 80px;

    .brandLogo{
        width: 160px;
        height: 25px;
    }
`;

export const StyledContentLeftGrid = styled(Grid)`
    height: 87%;

    .title{
        font-weight: 600;
        color: #283479;
        font-size: 29px;
        padding-top: 30px;
    }
    .paragraph{
        font-weight: 300;
        color: #29ABE2;
        font-size: 63px;
        padding-top: 20px;
    }
    .Styled-on-button{
        width: 250px;
        height: 43px;
        border: 2px solid;
        border-radius: 2rem 0rem 0rem 2rem;
        border-color: #0D2767;
        border-right: 0;
        text-transform: none;
        cursor: pointer;
        display: inline-block;
        font-family: 'Montserrat', sans-serif;
        font-size: 17px;
        font-weight: 500;
        margin-top: 30px;
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
    background-size: 350px 230px;

    .textFields{
        width: 283px;
        height: 30px;
        border: 0px solid;
        border-radius: 18px;
        font-size: 17px;
        font-style: italic;
        margin-top: 18px;
        outline: none;
    }

    .Styled-on-registered{
        width: 298px;
        height: 40px;
        border: 0px solid;
        border-radius: 50px;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        font-weight: bold;
        background-color: #29ABE2;
        color: #fff;
        margin-top: 45px;
        text-transform: none;
    }
    .Styled-on-registered:hover{
        background-color: #29ABE2;
    }
    .textFields::placeholder {
        color: #D3D3D3;
    }
    input{
        padding-left: 15px;
    }
`;

////////////////// Registered css /////////////////////

export const StyledModalPopUp = styled(Grid)`
height: 100%;
font-family: Montserrat, sans-serif;
font-weight: 600;

 .message1{
     color: #29ABE2;
     font-size: 35px;
     padding-left: 30px;
 }
 .message2{
     color: #283479;
     font-size: 35px;
 }
 .paragraph{
     font-size: 18px;
     padding-top: 28px;
     padding-left: 30px;
 }
 .mess1-mob{
    color: #29ABE2;
    font-size: 21px;
    padding-top: 34px;
}
.mess2-mob{
    color: #29ABE2;
    font-size: 21px;
}
.mess3-mob{
    color: #283479;
    font-size: 21px;
}
.paragraph-mob{
    font-size: 11px; 
    padding-top: 25px;
}

 .checkoutImage{
     width: 130px;
     height: 125px;
 }
//  .checkoutImg-mob{
//     width: 25px;
//     height: 25px;
// }
`;