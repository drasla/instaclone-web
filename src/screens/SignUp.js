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
import PageTitle from "../components/auth/pageTitle";
import {gql} from "@apollo/client/core";
import {useForm} from "react-hook-form";
import {useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";

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

const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount($firstName: String!, $lastName: String, $username: String!, $email: String!, $password: String!) {
        createAccount(firstName: $firstName, lastName: $lastName, username:$username, email: $email, password:$password) {
            ok
            error
        }
    }
`;

const SignUp = () => {
    const history = useHistory();
    const onCompleted = (data) => {
        const { createAccount: { ok, error } } = data;
        if(!ok) {
            return;
        }
        history.push(routes.home);
    };
    const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, onCompleted);
    const { register, handleSubmit, errors, formState, getValues, setError, clearErrors } = useForm({
        mode: "onChange"
    });

    const onSubmitValid = (data) => {
        if(loading) {
            return;
        }

        createAccount({
            variables: {
                ...data
            }
        })
    };

    return (
        <AuthLayout>
            <PageTitle title="Sign Up" />
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
                <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input ref={register({
                        required: "FirstName is required.",
                    })} name="firstName" type="text" placeholder="First Name"/>
                    <Input ref={register({

                    })} name="lastName" type="text" placeholder="Last Name"/>
                    <Input ref={register({
                        required: "Email is required.",
                    })} name="email" type="email" placeholder="Email"/>
                    <Input ref={register({
                        required: "Username is required.",
                    })} name="username" type="text" placeholder="Username"/>
                    <Input ref={register({
                        required: "Password is required.",
                    })} name="password" type="password" placeholder="Password"/>
                    <Button type="submit" value={loading ? "loading..." : "Sign Up"} disabled={!formState.isValid || loading}/>
                </form>
            </FormBox>
            <BottomBox cta="Have an account?" link={routes.home} linkText="Log in" />
        </AuthLayout>
    );
}

export default SignUp;