import {ApolloClient, HttpLink, InMemoryCache, makeVar} from "@apollo/client";

const TOKEN = "TOKEN";
const DARK_MODE = "DARK_MODE";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
    localStorage.setItem(TOKEN, token);
    isLoggedInVar(true);
};

export const logUserOut = (history) => {
    localStorage.removeItem(TOKEN);
    window.location.reload();
    isLoggedInVar(false);
}
export const darkModeVar = makeVar(Boolean(localStorage.getItem(DARK_MODE)));

export const enableDarkMode = () => {
    localStorage.setItem(DARK_MODE, "enable");
    darkModeVar(true);
}

export const disableDarkMode = () => {
    localStorage.removeItem(DARK_MODE);
    darkModeVar(false);
}

const httpLink = new HttpLink({
    uri: "http://192.168.0.7:4500/graphql"
});

export const client = new ApolloClient({
    link: httpLink,
    connectToDevTools: true,
    cache: new InMemoryCache(),
});