import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from './Context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import Loader from './Loader';

class Modal extends Component {

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal, showLogin, showRegister, registerPopup, loginPopup, handleUserName, handleEmail, handlePassword, handleConfirmPassword, disableRegister, disableLogin, registerInDb, showLoader, checkLogin } = value;
                    if(!modalOpen)
                        return null;
                    else {
                        if(showLogin)
                            return <ModalContainer>
                                {showLoader && <Loader/>}
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-capital">
                                            <form className="mt-2" onSubmit={checkLogin}>
                                                <span className="float-right" onClick={() => closeModal()}>&times;</span>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="text" onChange={handleEmail} className="form-control" placeholder="Enter your username"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Password:</label>
                                                    <input type="password" onChange={handlePassword} className="form-control" placeholder="Enter your password"/>
                                                </div>
                                                <div className="ml-auto">
                                                    <ButtonContainer type="submit" className="float-right" disabled={disableLogin}>Login</ButtonContainer>
                                                </div>
                                            </form>
                                            <a href="#" onClick={() => registerPopup()}>Register</a>
                                            {/* <Link to="/"> */}
                                                {/* <ButtonContainer onClick={() => closeModal()}>continue shopping</ButtonContainer> */}
                                            {/* </Link> */}
                                            {/* <Link to="/cart"> */}
                                                {/* <ButtonContainer onClick={() => closeModal()}>go to cart</ButtonContainer> */}
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>                
                            </ModalContainer>
                        if(showRegister)
                            return <ModalContainer>
                                {showLoader && <Loader/>}
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-capital">
                                            <form className="mt-2" onSubmit={registerInDb}>
                                                <span className="float-right" onClick={() => closeModal()}>&times;</span>
                                                <div className="form-group">
                                                    <label htmlFor="first name">User Name:</label>
                                                    <input type="text" onChange={handleUserName} className="form-control" placeholder="Enter your username"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="lastt_name">Email:</label>
                                                    <input type="text" onChange={handleEmail} className="form-control" placeholder="Enter your password"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password:</label>
                                                    <input type="password" onChange={handlePassword} className="form-control" placeholder="Enter your password"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="confirm_password">Confirm Password:</label>
                                                    <input type="password" onChange={handleConfirmPassword} className="form-control" placeholder="Enter your password"/>
                                                </div>
                                                <div className="ml-auto">
                                                    <ButtonContainer type="submit" disabled={disableRegister} className="float-right" disabled={disableRegister}>Register</ButtonContainer>
                                                </div>
                                            </form>
                                            <a href="#" onClick={() => loginPopup()}>Login</a>
                                            {/* <Link to="/"> */}
                                                {/* <ButtonContainer onClick={() => closeModal()}>continue shopping</ButtonContainer> */}
                                            {/* </Link> */}
                                            {/* <Link to="/cart"> */}
                                                {/* <ButtonContainer onClick={() => closeModal()}>go to cart</ButtonContainer> */}
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>                
                            </ModalContainer>
                    }
                }}
            </ProductConsumer>
        )
    }
}

export default Modal;

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite)
    }
`;