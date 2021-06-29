import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Content = styled.main`
  margin: 45px auto 0;
  max-width: 930px;
  width: 100%;
`;

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Content>
                {children}
            </Content>
        </>
    );
};

export default Layout;