import {darkModeVar, isLoggedInVar} from "../apollo";
import styled from "styled-components";
import {
    faFacebook,
    faFacebookF,
    faFacebookSquare,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bgColor};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  height: 100vh;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px;
  margin-bottom: 10px;
  
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    margin-top: 35px;
    width: 100%;
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 10px 40px;
  text-align: center;
  
  a {
    font-weight: 600;
    color: ${props => props.theme.accent};
  }
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Separator = styled.div`
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  div {
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.borderColor};
  }
  
  span {
    margin: 0px 10px;
    font-weight: 600;
    color: #8e8e8e;
    font-size: 12px;
  }
`;

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Input = styled.input`
    width: 100%;
    border-radius: 3px;
    padding: 7px;
    background-color: #fafafa;
    border: 0.5px solid ${props => props.theme.borderColor};
    margin-top: 5px;
    box-sizing: border-box;

    &::placeholder {
      font-size: 12px;
    }
`;

const Button = styled.input`
  width: 100%;
  border-radius: 3px;
  border: none;
  margin-top: 12px;
  background-color: ${props => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;

  font-weight: 600;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <TopBox>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </div>
                    <form>
                        <Input type="text" placeholder="Username" />
                        <Input type="password" placeholder="Password" />
                        <Button type="submit" placeholder="Log in" />
                    </form>
                    <Separator>
                        <div></div>
                        <span>Or</span>
                        <div></div>
                    </Separator>
                    <FacebookLogin>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <span>Log in with facebook</span>
                    </FacebookLogin>
                </TopBox>
                <BottomBox>
                    <span>Don't have an account?</span> <Link to="/sign-up">Sign up</Link>
                </BottomBox>
            </Wrapper>
        </Container>
    );

}

export default Login;