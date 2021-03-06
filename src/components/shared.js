import styled from "styled-components";

export const BaseBox = styled.div`
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.fontColor};
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;
`;

export const FatLink = styled.span`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;