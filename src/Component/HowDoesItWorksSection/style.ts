import { Grid } from '@material-ui/core';
import styled from "@emotion/styled";

export const StyledWork = styled(Grid)`
text-align:center;
.worksHeader{
    padding-top: 42px;
    font-size: 45px;
    font-weight: 200;
    color:#0D2767;
}
.StyledImg{
    padding-top: 93px;
    // width: 1280px;
    // height: 720px;
    // width: 120px;
    // height: 120px;
}
/* Large desktops and laptops */
@media (min-width: 1200px) {
    .worksHeader{
        font-size: 45px;
    }
}

/* Landscape tablets and medium desktops */
@media (min-width: 992px) and (max-width: 1199px) {
    .worksHeader{
        font-size: 45px;
    }
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
    .worksHeader{
        font-size: 45px;
    }
}

/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
    .worksHeader{
        font-size: 45px;
    }
}

/* Portrait phones and smaller */
@media (max-width: 480px) {
    .worksHeader{
        font-size: 30px;
    }
}
`;