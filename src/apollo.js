import {ApolloClient, HttpLink, InMemoryCache, makeVar} from "@apollo/client";

const TOKEN = "token";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
    localStorage.setItem(TOKEN, token);
    isLoggedInVar(true);
};

export const logUserOut = () => {
    localStorage.removeItem(TOKEN);
    isLoggedInVar(false);
}
export const darkModeVar = makeVar(false);

const httpLink = new HttpLink({
    uri: "http://192.168.0.7:4500/graphql"
});

export const client = new ApolloClient({
    link: httpLink,
    connectToDevTools: true,
    cache: new InMemoryCache(),
});