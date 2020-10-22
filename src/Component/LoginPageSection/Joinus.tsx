import React from 'react'
import Modal from 'react-modal';
import { NavLink } from "react-router-dom";
import { Grid, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import styled from "@emotion/styled";
import ClientImage from '../../images/WebLayout/LandingPage/ClientIcon.png';
import ProfessionalImage from '../../images/WebLayout/LandingPage/ProfessionalIcon.png';

const StyledModal = styled(Grid)`
    .Styled-joinus-button{
        width: 185px;
        height: 38px;
        border: 2px solid rgb(13, 39, 103);
        border-radius: 2rem;
        font-family: Montserrat, sans-serif;
        font-size: 18px;
        font-weight: 600;
        margin-top: 35px;
        text-transform: none;
        cursor: pointer;
        background-color: rgb(13, 39, 103);
        color: rgb(255, 255, 255);
        text-decoration: none;
        
    }
    .Styled-joinus-button:hover {
        background-color: #0D2767;
        color: #fff;
    }
    .noSelect{
        text-decoration: none;
    }
    .Styled-joinus-btn-mob{
        width: 120px;
        height: 29px;
        border: 2px solid rgb(13, 39, 103);
        border-radius: 2rem;
        font-family: Montserrat, sans-serif;
        font-size: 12px;
        font-weight: 600;
        margin-top: 17px;
        text-transform: none;
        cursor: pointer;
        background-color: rgb(13, 39, 103);
        color: rgb(255, 255, 255);
        text-decoration: none;
        }
    
`;
const StyledClientGrid = styled(Grid)`
.client{
    width: 160px;
    height: 155px;
}
`;
const StyledProfessionalGrid = styled(Grid)`
.professional{
    width: 160px;
    height: 155px;
}
`;

Modal.setAppElement('#root')
const Joinus = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <React.Fragment>
            <Grid className='App'>
                <Grid className="gridCall">
                    {matches ? (
                        <>
                            <Modal
                                id="id01"
                                isOpen={props.modalIsOpen}
                                onRequestClose={() => props.setModalIsOpen(false)}
                                style={{
                                    overlay: {
                                        position: 'fixed',
                                        backgroundColor: 'rgba(0,0,0, 0.7)'
                                    },
                                    content: {
                                        position: 'absolute',
                                        left: '49%',
                                        top: '30%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '280px',
                                        height: '140px',
                                        border: '1px solid #ccc',
                                        background: '#fff',
                                        overflow: 'hidden',
                                        WebkitOverflowScrolling: 'touch',
                                        borderRadius: '40px',
                                        outline: 'none',
                                        padding: '20px'
                                    }
                                }}
                            >
                                <StyledModal container xs={12}>
                                    <StyledClientGrid item container xs={6} direction="column" justify="center" alignItems="center">
                                        <Grid container direction="column" justify="center" alignItems="center">
                                            <Grid container direction="column" justify="center" alignItems="center" className="client-mob">
                                                <img src={ClientImage} alt="Client Image" style={{ width: "100px", height: "100px" }} />
                                            </Grid>
                                            <Grid container direction="column" justify="center" alignItems="center">
                                                <NavLink to="/login?select=client">
                                                    <Button
                                                        className="Styled-joinus-btn-mob"
                                                        variant="outlined"
                                                        disableRipple
                                                        disableFocusRipple
                                                    >Client
                                                    </Button>
                                                </NavLink>
                                            </Grid>
                                        </Grid>
                                    </StyledClientGrid>

                                    <StyledProfessionalGrid item container xs={6} direction="column" justify="center" alignItems="center">
                                        <Grid container direction="column" justify="center" alignItems="center">
                                            <Grid container direction="column" justify="center" alignItems="center" className="professional-mob">
                                                <img src={ProfessionalImage} alt="Client Image" style={{ width: "100px", height: "100px" }} />
                                            </Grid>
                                            <Grid container direction="column" justify="center" alignItems="center">
                                                <NavLink to="/login/?select=professional" >
                                                    <Button
                                                        className="Styled-joinus-btn-mob"
                                                        variant="outlined"
                                                        disableRipple
                                                        disableFocusRipple
                                                    >Professional
                                                    </Button>
                                                </NavLink>
                                            </Grid>
                                        </Grid>
                                    </StyledProfessionalGrid>
                                </StyledModal>
                            </Modal>
                        </>
                    ) : (
                            <Modal
                                id="joinUsModal"
                                isOpen={props.modalIsOpen}
                                onRequestClose={() => props.setModalIsOpen(false)}
                                style={{
                                    overlay: {
                                        position: 'fixed',
                                        backgroundColor: 'rgba(0,0,0, 0.7)'
                                    },
                                    content: {
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '520px',
                                        height: '250px',
                                        border: '1px solid #ccc',
                                        background: '#fff',
                                        overflow: 'hidden',
                                        WebkitOverflowScrolling: 'touch',
                                        borderRadius: '40px',
                                        outline: 'none',
                                        padding: '20px'
                                    }
                                }}
                            >
                                <StyledModal container>
                                    <StyledClientGrid item container xs={6} direction="column" justify="center" alignItems="center">
                                        <Grid container direction="column" justify="center" alignItems="center">
                                            <Grid ><img src={ClientImage} alt="Client Image" className="client" /></Grid>
                                            <Grid container direction="column" justify="center" alignItems="center">
                                                <NavLink to="/login?select=client" className="noSelect">
                                                    <Button
                                                        className="Styled-joinus-button"
                                                        variant="outlined"
                                                    >Client
                                        </Button>
                                                </NavLink>
                                            </Grid>
                                        </Grid>
                                    </StyledClientGrid>

                                    <StyledProfessionalGrid item container xs={6} direction="column" justify="center" alignItems="center">
                                        <Grid container direction="column" justify="center" alignItems="center">
                                            <Grid ><img src={ProfessionalImage} alt="Client Image" className="professional" /></Grid>
                                            <Grid container direction="column" justify="center" alignItems="center">
                                                <NavLink to="/login?select=professional" className="noSelect">
                                                    <Button
                                                        className="Styled-joinus-button"
                                                        variant="outlined"
                                                    >Professional
                                        </Button>
                                                </NavLink>
                                            </Grid>
                                        </Grid>
                                    </StyledProfessionalGrid>
                                </StyledModal>
                            </Modal>
                        )
                    }
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default Joinus;