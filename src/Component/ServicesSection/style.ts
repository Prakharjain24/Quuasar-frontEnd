import Grid from "@material-ui/core/Grid";
import styled from "@emotion/styled";

export const StyledApp = styled(Grid)`
text-align:center;
// padding-top: 239px;
.servicesHeader{
    padding-top:100px;
    font-size: 68px;
    color:#0D2767;
}
.servicesGrid{
    padding-left: 300px;
    padding-right: 300px;
}
// .servicesImage{
//     height:83px; 
//     width:64px;
// }
.Styled-icon-title{
    font-size: 25px;
    padding-top: 24px;
}
.icon-line1{
    padding-top: 56px;
}
.icon-line2{
    padding-top: 90px;
}
`;

export const StyledServicesGrid = styled(Grid)`
padding:112px 60px;
`;