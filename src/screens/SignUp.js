import {
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
import styled from "styled-components";
import {FatLink} from "../components/shared";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  text-align: center;
  margin-top: 10px;
`;

const SignUp = () => {
    return (
        <AuthLayout>
            <FormBox>
                <HeaderContainer>
                    <FontAwesomeIcon icon={faInstagram} size="3x"/>
                    <Subtitle>
                        Sign up to see photos and videos from your friends.
                    </Subtitle>
                </HeaderContainer>
                <Separator>
                    <div></div>
                    <span>Or</span>
                    <div></div>
                </Separator>
                <form>
                    <Input type="text" placeholder="Name"/>
                    <Input type="text" placeholder="Email"/>
                    <Input type="text" placeholder="Username"/>
                    <Input type="password" placeholder="Password"/>
                    <Button type="submit" placeholder="Sign Up"/>
                </form>

            </FormBox>
            <BottomBox cta="Have an account?" link={routes.home} linkText="Log in" />
        </AuthLayout>
    );
}

export default SignUp;