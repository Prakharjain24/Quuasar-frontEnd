import { Grid } from '@material-ui/core';
import React from 'react'
import Modal from 'react-modal';
import CheckoutAnimation from '../../images/Website Layout/Signup page assets/CheckOut.gif';
import { StyledImageGrid, StyledtextGrid } from './style';

Modal.setAppElement('#root')
const Registered = (props) => {
    return (
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
                            width:'780px',
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
            </Grid>
        </Grid>
    );
};
export default Registered;