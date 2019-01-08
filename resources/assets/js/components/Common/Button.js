import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.1rem;
    // background: transparent;
    background: #ff0081;
    disabled: true;
    // border: 0.05 rem solid;
    // border-color:${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
    // color: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
    color: var(--mainWhite);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5em;
    cursor: ${props => props.disabled ? "not-allowed !important": "pointer !important"};
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
&:hover {
    // background: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
    // color: var(--mainBlue);
}
&:focus {
    outline: none
}
`;