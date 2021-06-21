import {darkModeVar, isLoggedInVar} from "../apollo";
import styled from "styled-components";
import {
    faFacebookSquare,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import {Separator} from "../components/auth/Separator";
import Input from "../components/auth/Input";
import {FormBox} from "../components/auth/FormBox";
import {BottomBox} from "../components/auth/BottomBox";
import routes from "../routes";


const FacebookLogin = styled.div`
  color: #385285;

  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Login = () => {
    return (
        <AuthLayout>
            <FormBox>
                <div style={{marginBottom: 30}}>
                    <FontAwesomeIcon icon={faInstagram} size="3x"/>
                </div>
                <form>
                    <Input type="text" placeholder="Username"/>
                    <Input type="password" placeholder="Password"/>
                    <Button type="submit" placeholder="Log in"/>
                </form>
                <Separator>
                    <div></div>
                    <span>Or</span>
                    <div></div>
                </Separator>
                <FacebookLogin>
                    <FontAwesomeIcon icon={faFacebookSquare}/>
                    <span>Log in with facebook</span>
                </FacebookLogin>
            </FormBox>
            <BottomBox cta="Don't have an account?" link={routes.signUp} linkText="Sign Up" />
        </AuthLayout>
    );

}

export default Login;