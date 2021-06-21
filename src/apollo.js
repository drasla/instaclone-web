import {ApolloClient, HttpLink, InMemoryCache, makeVar} from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);

const httpLink = new HttpLink({
    uri: "http://192.168.0.7:4500/graphql"
});

export const client = new ApolloClient({
    link: httpLink,
    connectToDevTools: true,
    cache: new InMemoryCache(),
});