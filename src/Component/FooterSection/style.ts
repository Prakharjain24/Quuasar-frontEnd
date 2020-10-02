import { Grid } from '@material-ui/core';
import styled from "@emotion/styled";
import footerBgImg from '../../images/Website Layout/Landing page assets/footer-bg-rectangle.png'

export const StyledFooter = styled(Grid)`
    background-image: url(${footerBgImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 163px;
    width: 1920px;
    .footerbg{
        padding-top: 129px;
    }
    .footerText{
    padding-top: 22px;
    padding-left: 144px;
    font-size: 24px;
    font-weight: bold;
    color:#fff;
    }
    .facebook-icon{
        width:34px;
        height:34px;
        padding-top: 22px;
        padding-left: 144px;
    }
    .facebook-icon:hover{
        background-color: #0D2767;
        color: #fff;
    }
    .linkedin-icon{
        width:34px;
        height:34px;
        padding-top: 22px;
        padding-left: 22px;
    }
    .linkedin-icon:hover{
        background-color: grey;
        color: #fff;
    }
    .insta-icon{
        width:34px;
        height:34px;
        padding-top: 22px;
        padding-left: 22px;
    }
    .twitter-icon{
        width:34px;
        height:34px;
        padding-top: 22px;
        padding-left: 22px;
    }
    .logoBottom{
        width: 273px;
        height: 41px;
        padding-right:144px;
    }
    }
    `;