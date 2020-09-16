import gql from 'graphql-tag';

export const GET_AUTH_USER = gql`
    {
        authenticatedUser {
            uid
            email
            refreshToken
        }
    }
`;
