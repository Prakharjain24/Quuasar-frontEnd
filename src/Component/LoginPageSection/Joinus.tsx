import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core';
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import ClientImage from '../../images/Website Layout/Landing page assets/client.png';
import ProfessionalImage from '../../images/Website Layout/Landing page assets/professional.png';
import Modal from 'react-modal';
import Loginpage from './Loginpage';

const StyledModal = styled(Grid)`
    .Styled-joinus-button{
    width: 270px;
    height: 53px;
    border: 2px solid;
    border-radius: 2rem 2rem 2rem 2rem;
    font-size: 21px;
    font-weight: bold;
    border-color: #0D2767;
    margin-top: 50px;
    text-transform: none;
    cursor: pointer;
    display: inline-block;
    }
    .Styled-joinus-button:hover{
        background-color: #0D2767;
        color: #fff;
    }
    button:focus{
        background-color: #0D2767;
        color: #fff;
    }
`;
const StyledClientGrid = styled(Grid)`
.client{
    width: 193px;
    height: 188px;
}
`;
const StyledProfessionalGrid = styled(Grid)`
.professional{
    width: 193px;
    height: 188px;
}
`;

Modal.setAppElement('#root')
const Joinus = (props) => {
   
    return (
        <React.Fragment>
            <Grid className='App'>
                <Grid className="gridCall">
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
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '650px',
                                height: '300px',
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
                                    <Grid className="client"><img src={ClientImage} alt="Client Image" /></Grid>
                                    <Grid container direction="column" justify="center" alignItems="center">
                                        <NavLink to="/login?select=client">
                                            <Button
                                                className="Styled-joinus-button"
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
                                    <Grid className="professional"><img src={ProfessionalImage} alt="Client Image" /></Grid>
                                    <Grid container direction="column" justify="center" alignItems="center">
                                        <NavLink to="/login/?select=professional" >
                                            <Button
                                                className="Styled-joinus-button"
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
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default Joinus;