import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import styled from "styled-components";
import { ButtonContainer } from './Button';
import { ProductConsumer } from './Context';

class Navbar extends Component {

    render() {
        // return (
        //     <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        //     <a className="navbar-brand" href="#">
        //         <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
        //         Bootstrap
        //     </a>
        //     </nav>
        // );
        return (
            <ProductConsumer>
                {(value) => {
                    const { loginPopup, authenticate, logout } = value;
                    return (
                        <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                        <Link to='/upload'>
                            <img src={logo} alt="store" width="30" height="30" className="navbar-brand"></img>
                        </Link>
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item ml-5">
                                <Link to='/' className="nav-link">
                                    Bilal
                                </Link>
                            </li>
                        </ul>
                        {/* <Link to='' className="ml-auto"> */}
                            {/* <ButtonContainer> */}
                                <span className='ml-auto' onClick={() => authenticate ? logout() : loginPopup()}>
                                    <i className="fa fa-user">
                                    {authenticate ? "name" : "Login"}
                                    </i>
                                </span>
                            {/* </ButtonContainer> */}
                        {/* </Link> */}
                        </NavWrapper>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
    background: #ff0081 !important;
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize !important;
    }
`;