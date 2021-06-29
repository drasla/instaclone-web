import {useQuery, useReactiveVar} from "@apollo/client";
import {isLoggedInVar} from "../apollo";
import {gql} from "@apollo/client/core";

const ME_QUERY = gql`
    query me {
        me {
            usename
            avatar
        }
    }
`;

const useUser = () => {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    const {data, error} = useQuery(ME_QUERY, {
        skip: !isLoggedIn
    });
    return;
}

export default useUser;