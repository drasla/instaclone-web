import {ApolloClient, InMemoryCache, makeVar} from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
    uri: "http://localhost:4500/graphql",
    cache: new InMemoryCache(),
});

