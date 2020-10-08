import { Grid } from '@material-ui/core';
import React from 'react'
import Modal from 'react-modal';
import CheckoutAnimation from '../../images/Website Layout/Signup page assets/CheckOut.gif';
import { StyledImageGrid, StyledtextGrid } from './style';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

Modal.setAppElement('#root')
const Registered = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    return (
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
                            <StyledImageGrid>
                                <Grid container direction="column" justify="center" alignItems="center">
                                    <img className=".checkoutImg-mob" src={CheckoutAnimation} alt="Checkout animation" style={{ width:"81px", height:"80px"}}/></Grid>
                            </StyledImageGrid>
                            <StyledtextGrid>
                                <Grid container direction="column" justify="center" alignItems="center">
                                    <Grid className="mess1-mob">Thank you</Grid>
                                    <Grid className="mess2-mob">for joining</Grid>
                                    <Grid className="mess3-mob">Quuasar</Grid>
                                </Grid>
                                <Grid container direction="column" justify="center" alignItems="center" className="paragraph-mob">
                                    <Grid>You have been added to</Grid>
                                    <Grid>our community.</Grid>
                                </Grid>
                            </StyledtextGrid>

                        </Modal>
                    </>
                ) : (
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
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '780px',
                                        height: '180px',
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
                                <Grid container xs={12}>
                                    <StyledtextGrid item container xs={7} direction="column" justify="flex-start" alignItems="flex-start">
                                        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                                            <Grid className="message1">Thank you</Grid>
                                            <Grid className="message1">for joining<span className="message2"> Quuasar</span></Grid>
                                        </Grid>
                                        <Grid container className="paragraph" direction="column" justify="flex-start" alignItems="flex-start">
                                            <Grid>You have been added to our</Grid>
                                            <Grid>community.</Grid>
                                        </Grid>
                                    </StyledtextGrid>
                                    <StyledImageGrid item container xs={5} direction="column" justify="center" alignItems="center">
                                        <Grid><img className="checkoutImage" src={CheckoutAnimation} alt="Checkout animation" /></Grid>
                                    </StyledImageGrid>
                                </Grid>
                            </Modal>
                        </>
                    )
                }
            </Grid>
        </Grid>
    );
};
export default Registered;