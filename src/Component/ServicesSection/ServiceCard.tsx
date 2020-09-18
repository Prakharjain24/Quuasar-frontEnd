import React from 'react';
import Grid from "@material-ui/core/Grid";
import ServiceData from './ServiceData';
import { StyledApp, StyledServicesGrid } from './style';

const ServiceCard = (props) => {
    return (
        <React.Fragment>
            <StyledApp container item direction="column" justify="center" alignItems="center" >
                <Grid container item justify="center" alignItems="center" className="servicesHeader">Services</Grid>
                <StyledServicesGrid className="servicesGrid" container item direction="column" justify="center" alignItems="center" >
                    <Grid container className="icon-line1" direction="row" justify-xs-center spacing={1}>
                        <Grid item xs={2}>
                            <img src={ServiceData.architech.imgsrc} alt="Architech icon" height="83px" width="64px" />
                            <Grid className="Styled-icon-title">{ServiceData.architech.title}</Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={ServiceData.interiorDesigner.imgsrc} alt="Interior Designer icon" height="69px" width="67px" />
                            <Grid className="Styled-icon-title">{ServiceData.interiorDesigner.title}</Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={ServiceData.contractor.imgsrc} alt="Contractor icon" height="72px" width="65px" />
                            <Grid className="Styled-icon-title">{ServiceData.contractor.title}</Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={ServiceData.civilEngineer.imgsrc} alt="CivilEngineer icon" height="66px" width="58px" />
                            <Grid className="Styled-icon-title">{ServiceData.civilEngineer.title}</Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={ServiceData.fabricator.imgsrc} alt="Fabricator icon" height="69px" width="69px" />
                            <Grid className="Styled-icon-title">{ServiceData.fabricator.title}</Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={ServiceData.modularKitchen.imgsrc} alt="ModularKitchen icon" height="69px" width="64px"/>
                            <Grid className="Styled-icon-title">{ServiceData.modularKitchen.title}</Grid>
                        </Grid>
                    </Grid>


                    <Grid container className="icon-line2" direction="row" justify-xs-center spacing={1}>
                        <Grid item xs={2}>
                            <img src={ServiceData.constructionCompanies.imgsrc} alt="Construction Companies icon" height="74px" width="75px" />
                            <Grid className="Styled-icon-title">{ServiceData.constructionCompanies.title}</Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={ServiceData.electricians.imgsrc} alt="Electricians icon" height="74px" width="53px" />
                            <Grid className="Styled-icon-title">{ServiceData.electricians.title}</Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={ServiceData.plumbers.imgsrc} alt="Plumbers icon" height="69px" width="54px" />
                            <Grid className="Styled-icon-title">{ServiceData.plumbers.title}</Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={ServiceData.painters.imgsrc} alt="Painters icon" height="33px" width="38px" />
                            <Grid className="Styled-icon-title">{ServiceData.painters.title}</Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={ServiceData.carpenters.imgsrc} alt="Carpenters icon" height="69px" width="68px" />
                            <Grid className="Styled-icon-title">{ServiceData.carpenters.title}</Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={ServiceData.rightSideAngleIcon.imgsrc} alt="RightSideAngle Icon" height="46px" width="28px" />
                            <Grid className="Styled-icon-title">{ServiceData.rightSideAngleIcon.title}</Grid>
                        </Grid>
                    </Grid>
                </StyledServicesGrid>
            </StyledApp>
        </React.Fragment>
    );
}
export default ServiceCard;