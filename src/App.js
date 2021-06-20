import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import {useReactiveVar} from "@apollo/client";
import {darkModeVar, isLoggedInVar} from "./apollo";
import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./styles";
import SignUp from "./screens/SignUp";

function App() {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    const darkMode = useReactiveVar(darkModeVar);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            {isLoggedIn ? <Home/> : <Login/>}
                        </Route>
                        {!isLoggedIn ? (
                            <Route path="/sign-up" exact>
                                <SignUp/>
                            </Route>
                            ) : null}
                        <Route>
                            <NotFound/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
