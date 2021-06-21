import {Link} from "react-router-dom";
import styled from "styled-components";
import {BaseBox} from "../shared/WhiteBox";

const SBottomBox = styled(BaseBox)`
  padding: 10px 40px;
  text-align: center;

  a {
    font-weight: 600;
    color: ${props => props.theme.accent};
  }
`;

export const BottomBox = ({cta, link, linkText}) => {
    return (
        <SBottomBox>
            <span>{cta}</span> <Link to={link}>{linkText}</Link>
        </SBottomBox>
    );
};