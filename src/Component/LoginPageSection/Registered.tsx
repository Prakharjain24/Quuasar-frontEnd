import React from 'react'
import Modal from 'react-modal';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Tick from '../../images/WebLayout/SignupPage/Tick.gif';
import { StyledModalPopUpWrapper, StyledModalPopUp } from './style';

Modal.setAppElement('#root')
const Registered = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <>
            {matches ? (
                <Modal
                    id="registeredMobileModal"
                    isOpen={props.modalIsOpen}
                    onRequestClose={() => props.setModalIsOpen(false)}
                    style={{
                        overlay: {
                            position: 'fixed',
                            backgroundColor: 'rgba(0,0,0, 0.7)',
                            zIndex: 1000
                        },
                        content: {
                            position: 'absolute',
                            left: '49%',
                            top: '30%',
                            transform: 'translate(-50%, -50%)',
                            width: '140px',
                            height: '245px',
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
                    <StyledModalPopUp>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <img className=".checkoutImg-mob" src={Tick} alt="Tick animation" style={{ width: "81px", height: "80px" }} />
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid className="mess1-mob">Thank you</Grid>
                            <Grid className="mess2-mob">for joining</Grid>
                            <Grid className="mess3-mob">Quuasar</Grid>
                        </Grid>
                        <Grid container direction="column" justify="center" alignItems="center" className="paragraph-mob">
                            <Grid>You have been added to</Grid>
                            <Grid>our community.</Grid>
                        </Grid>
                    </StyledModalPopUp>

                </Modal>
            ) : (
                    <Modal
                        id="registeredModal"
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
                                width: '680px',
                                height: '270px',
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
                        <StyledModalPopUp container justify="center" alignItems="center">
                            <Grid item container sm={7} direction="column" justify="center" alignItems="flex-start">
                                <Grid container direction="column" justify="center" alignItems="flex-start">
                                    <Grid className="message1">Thank you</Grid>
                                    <Grid className="message1">for joining<span className="message2"> Quuasar</span></Grid>
                                </Grid>
                                <Grid container className="paragraph" direction="column" justify="center" alignItems="flex-start">
                                    <Grid>You have been added to our</Grid>
                                    <Grid>community.</Grid>
                                </Grid>
                            </Grid>
                            <Grid item container sm={5} direction="column" justify="center" alignItems="center">
                                <Grid><img className="checkoutImage" src={Tick} alt="Tick animation" /></Grid>
                            </Grid>
                        </StyledModalPopUp>
                    </Modal>
                )
            }
        </>
    );
};
export default Registered;