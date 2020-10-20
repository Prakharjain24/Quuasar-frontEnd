import React from 'react';
import { Button, Grid } from '@material-ui/core';
import styled from "@emotion/styled";
import './style.css';
import './tabs.css';


const StyledTabindex = styled(Grid)`
        .inputField{
            width: 300px;
            height: 40px;
            border: 0px solid;
            border-radius: 23px;
            font-size: 15px;
            font-style: italic;
            margin-top: 20px;
            outline: none;
        }
         .customer-register{
            width: 300px;
            height: 40px;
            border: 0px solid;
            border-radius: 23px;
            font-size: 16px;
            font-weight: bold;  
            background-color: #29ABE2;
            color: #fff;
            margin-top: 95px;
            margin-bottom: 14px;
            text-transform: none;
            outline: none;
        }
        .professional-register{
            width: 300px;
            height: 40px;
            border: 0px solid;
            border-radius: 23px;
            font-size: 16px;
            font-weight: bold;  
            background-color: #29ABE2;
            color: #fff;
            margin-top: 33px;
            margin-bottom: 14px;
            text-transform: none;
            outline: none;
        }
        .input::placeholder {
            }
            input{
                padding-left: 15px;
            }
        .listElement {
            z-index: 100;
        }
        .spanElement {
            background: #283479;
	        color: #fff;
        }
        .marginLeft {
            margin-left: -2px;
        }
`;

export const Tabform = (props) => {
    const [selectedTab, setSelectedTab] = React.useState(1);
    return (
        <React.Fragment>
            <StyledTabindex>
                <Grid container item direction="column" justify="center" alignItems="center">
                    <div className="container">
                        <section>
                            <div className="tabs tabs-style-shape">
                                <nav>
                                    <ul>
                                        <li className={selectedTab === 1 && 'listElement'}>
                                            <a href="javascript:;" onClick={e => {
                                                e.preventDefault();
                                                setSelectedTab(1);
                                            }} >
                                                <svg viewBox="10 0 200 60" preserveAspectRatio="none" className="marginLeft">
                                                    <path id="tabshape" d="M80,60C2,55.5,73.417,0,0,0v60H80z" />
                                                </svg>
                                                <span className={selectedTab === 1 && 'spanElement'}>Customer</span>
                                            </a>
                                        </li>
                                        <li className={selectedTab === 2 && 'listElement'}>
                                            <a href="javascript:;" onClick={e => {
                                                e.preventDefault();
                                                setSelectedTab(2);
                                            }}>
                                                <svg viewBox="10 0 200 60" preserveAspectRatio="none" className="marginLeft">
                                                    <path id="tabshape" d="M80,60C2,55.5,73.417,0,0,0v60H80z" />
                                                </svg>
                                                <span className={selectedTab === 2 && 'spanElement'}>Professional</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <Grid className="content-wrap" >
                                    {selectedTab === 1
                                        ? <Grid container justify="center">
                                            <input
                                                className="inputField"
                                                type="text"
                                                id="name"
                                                autoComplete="off"
                                                name="fullname"
                                                placeholder="Name"
                                                value={props.inputData.fullname}
                                                onChange={props.handleRegisterInputChange} />
                                            <input
                                                className="inputField"
                                                type="text"
                                                id="mobileNumber"
                                                autoComplete="off"
                                                name="phone"
                                                placeholder="Mobile Number"
                                                value={props.inputData.phone}
                                                onChange={props.handleRegisterInputChange} />
                                            <input
                                                className="inputField"
                                                type="text"
                                                id="email"
                                                autoComplete="off"
                                                name="email"
                                                placeholder="E-mail"
                                                value={props.inputData.email}
                                                onChange={props.handleRegisterInputChange} />
                                            <Button className="customer-register" onClick={props.handleRegisterButtonClick}>Register</Button>
                                        </Grid>
                                        : <Grid container justify="center" className="from-dimension">
                                            <input
                                                className="inputField"
                                                type="text"
                                                id="name"
                                                autoComplete="off"
                                                name="fullname"
                                                placeholder="Name"
                                                value={props.inputData.fullname}
                                                onChange={props.handleRegisterInputChange} />
                                            <input
                                                className="inputField"
                                                type="text"
                                                id="mobileNumber"
                                                autoComplete="off"
                                                name="phone"
                                                placeholder="Mobile Number"
                                                value={props.inputData.phone}
                                                onChange={props.handleRegisterInputChange} />
                                            <input
                                                className="inputField"
                                                type="text"
                                                id="email"
                                                autoComplete="off"
                                                name="email"
                                                placeholder="E-mail"
                                                value={props.inputData.email}
                                                onChange={props.handleRegisterInputChange} />
                                            <input
                                                className="inputField"
                                                type="text"
                                                id="professional"
                                                autoComplete="off"
                                                name="professional"
                                                placeholder="Profession"
                                                value={props.inputData.professional}
                                                onChange={props.handleRegisterInputChange} />
                                            <Button className="professional-register" onClick={props.handleRegisterButtonClick} >Register</Button>
                                        </Grid>
                                    }
                                </Grid>
                            </div>
                        </section>
                    </div>
                </Grid>
            </StyledTabindex>
        </React.Fragment>
    );
};