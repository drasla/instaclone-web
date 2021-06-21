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
import PageTitle from "../components/auth/pageTitle";
import {useForm} from "react-hook-form";

const FacebookLogin = styled.div`
  color: #385285;

  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Login = () => {
    const { register, watch, handleSubmit } = useForm();
    const onSubmitValid = (data) => {

    };
    const onSubmitInvalid = (data) => {

    };

    return (
        <AuthLayout>
            <PageTitle title="Log In" />
            <FormBox>
                <div style={{marginBottom: 30}}>
                    <FontAwesomeIcon icon={faInstagram} size="3x"/>
                </div>
                <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
                    <Input ref={register({
                        required: "Username is required.",
                        minLength: 5,
                        validate: (currentValue) => currentValue.includes("")
                    })} name="username" type="text"  placeholder="Username" />
                    <Input ref={register({
                        required: "Password is required."
                    })} name="password" type="password" placeholder="Password" />
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