import gql from 'graphql-tag';

export const LOG_IN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            uid
            email
            refreshToken
        }
    }
`;

export const LOG_OUT = gql`
    mutation logout($uid: ID!) {
        logout(uid: $uid)
    }
`;