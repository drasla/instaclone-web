import {darkModeVar, isLoggedInVar} from "../apollo";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bgColor};
`;

const Login = () => {
    return (
        <>
            <Title>Login</Title>
            <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
            <button onClick={() => darkModeVar(true)}>To Dark</button>
            <button onClick={() => darkModeVar(false)}>To Light</button>
        </>
    );

}

export default Login;