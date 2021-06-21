import {logUserOut} from "../apollo";
import styled from "styled-components";

const Container = styled.div`
  background-color: tomato;
`;

function Home() {
    return (
        <Container>
            <h1>Welcome we did it!</h1>
            <button onClick={() => logUserOut()}>Log Out Now</button>
        </Container>
    );
}

export default Home;