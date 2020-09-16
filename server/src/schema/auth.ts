import { gql } from 'apollo-server-koa';

export default gql`
    extend type Query {
        authenticatedUser: AuthUser
    }
    
    extend type Mutation {
        login(
            email: String!
            password: String!
        ): AuthUser

        logout(
            uid: ID!
        ): String!
    }

    type AuthUser {
        uid: ID!
        email: String!
        refreshToken: String!
    }
`;
