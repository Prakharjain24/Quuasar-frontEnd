import React from 'react';
import Grid from "@material-ui/core/Grid";
import ServiceData from './ServiceData';
import { StyledApp, StyledServicesGrid } from './style';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'

const ServiceCard = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <React.Fragment>
            <StyledApp container item direction="column" justify="center" alignItems="center" >
                {matches ? (
                    <>
                        <Grid container item justify="center" alignItems="center" className="servicesHeaderMob">Services</Grid>
                        <StyledServicesGrid className="servicesGridMob" container item direction="column" justify="center" alignItems="center" >

                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.architech.imgsrc} alt="Architech icon" height="55px" width="42px" />
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.interiorDesigner.imgsrc} alt="Interior Designer icon" height="46px" width="45px" />
                                </Grid>
                            </Grid>
                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.architech.title}</Grid>
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.interiorDesigner.title}</Grid>
                                </Grid>
                            </Grid>

                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.contractor.imgsrc} alt="Contractor icon" height="48px" width="43px" />
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.civilEngineer.imgsrc} alt="CivilEngineer icon" height="44px" width="39px" />
                                </Grid>
                            </Grid>
                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.contractor.title}</Grid>
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.civilEngineer.title}</Grid>
                                </Grid>
                            </Grid>

                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.fabricator.imgsrc} alt="Fabricator icon" height="46px" width="46px" />
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.modularKitchen.imgsrc} alt="ModularKitchen icon" height="46px" width="43px" />
                                </Grid>
                            </Grid>
                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.fabricator.title}</Grid>
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.modularKitchen.title}</Grid>
                                </Grid>
                            </Grid>

                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.constructionCompanies.imgsrc} alt="Construction Companies icon" height="49px" width="50px" />
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.electricians.imgsrc} alt="Electricians icon" height="49px" width="35px" />
                                </Grid>
                            </Grid>
                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.constructionCompanies.title}</Grid>
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.electricians.title}</Grid>
                                </Grid>
                            </Grid>


                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.plumbers.imgsrc} alt="Plumbers icon" height="46px" width="36px" />
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.painters.imgsrc} alt="Painters icon" height="42px" width="25px" />
                                </Grid>
                            </Grid>
                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.plumbers.title}</Grid>
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.painters.title}</Grid>
                                </Grid>
                            </Grid>

                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.carpenters.imgsrc} alt="Carpenters icon" height="46px" width="45px" />
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <img src={ServiceData.rightSideAngleIcon.imgsrc} alt="RightSideAngle Icon" height="31px" width="19px" />
                                </Grid>
                            </Grid>
                            <Grid container xs={10} className="icon-img" direction="row" justify="space-around" alignItems="center">
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.carpenters.title}</Grid>
                                </Grid>
                                <Grid container item xs={4} className="icon-img" direction="column" justify="center" alignItems="center" >
                                    <Grid className="Styled-icon-title-mob">{ServiceData.rightSideAngleIcon.title}</Grid>
                                </Grid>
                            </Grid>



                        </StyledServicesGrid>
                    </>
                ) : (
                        <>
                            <Grid container item justify="center" alignItems="center" className="servicesHeader">Services</Grid>
                            <StyledServicesGrid container item sm={8} direction="column" justify="center" alignItems="center" >
                                <Grid container className="icon-line1" direction="column" justify-sm-center spacing={1}>
                                    <Grid container className="icon-img" direction="row" justify-sm-center spacing={1}>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.architech.imgsrc} alt="Architech icon" height="55px" width="43px" />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.interiorDesigner.imgsrc} alt="Interior Designer icon" height="46px" width="45px" />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.contractor.imgsrc} alt="Contractor icon" height="48px" width="43px" />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.civilEngineer.imgsrc} alt="CivilEngineer icon" height="44px" width="39px" />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.fabricator.imgsrc} alt="Fabricator icon" height="46px" width="46px" />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.modularKitchen.imgsrc} alt="ModularKitchen icon" height="46px" width="43px" />
                                        </Grid>
                                    </Grid>
                                    <Grid container className="icon-text" direction="row" justify-sm-center spacing={1}>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.architech.title}</Grid>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.interiorDesigner.title}</Grid>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.contractor.title}</Grid>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.civilEngineer.title}</Grid>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.fabricator.title}</Grid>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.modularKitchen.title}</Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container className="icon-line2" direction="column" justify-sm-center spacing={1}>
                                    <Grid container className="icon-img" direction="row" justify-sm-center spacing={1}>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.constructionCompanies.imgsrc} alt="Construction Companies icon" height="49px" width="50px" />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.electricians.imgsrc} alt="Electricians icon" height="49px" width="35px" />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.plumbers.imgsrc} alt="Plumbers icon" height="46px" width="36px" />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.painters.imgsrc} alt="Painters icon" height="30px" width="25px" />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.carpenters.imgsrc} alt="Carpenters icon" height="46px" width="45px" />
                                        </Grid>
                                        <Grid item sm={2}>
                                            <img src={ServiceData.rightSideAngleIcon.imgsrc} alt="RightSideAngle Icon" height="31px" width="19px" />
                                        </Grid>
                                    </Grid>
                                    <Grid container className="icon-text" direction="row" justify-sm-center spacing={1}>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.constructionCompanies.title}</Grid>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.electricians.title}</Grid>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.plumbers.title}</Grid>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.painters.title}</Grid>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.carpenters.title}</Grid>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <Grid className="Styled-icon-title">{ServiceData.rightSideAngleIcon.title}</Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </StyledServicesGrid>
                        </>
                    )
                }
            </StyledApp>

        </React.Fragment>
    );
}
export default ServiceCard;