import styled from "styled-components";
import {BaseBox} from "../shared";

const Container = styled(BaseBox)`
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

    width: 100%;
  }
`;

export const FormBox = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
};