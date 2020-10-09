import { Grid } from '@material-ui/core';
import styled from "@emotion/styled";
import footerBgImg from '../../images/Website Layout/Landing page assets/footer-bg-rectangle.png'

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
export const StyledFooter = styled(Grid)`
    background-image: url(${footerBgImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 108px;
    width: 100%;
    color:#fff;

    .footerText{
        font-size: 16px;
        font-weight: 600;
        padding: 10px 0px;
    }
    .socialSitesIcon{
        width:22px;
        height:22px;
        cursor: pointer;
    }
    .facebook-icon:hover{
        background-color: #0D2767;
        color: #fff;
    }
    .logoBottom{
        width: 182px;
        height: 27px;
        cursor: pointer;
    }
}
`;