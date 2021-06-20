import {isLoggedInVar} from "../apollo";
import styled from "styled-components";

const Title = styled.h1`
  color: blue;
`;

const Container = styled.div`
  background-color: tomato;
`;

function Home() {
    return (
        <Container>
            <Title>Home</Title>
            <button onClick={() => isLoggedInVar(false)}>Log Out Now</button>
        </Container>
    );
}

export default Home;