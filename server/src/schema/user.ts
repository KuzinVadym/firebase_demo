import { gql } from 'apollo-server-koa';

export default gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
  }
  
  extend type Mutation {
    
    create(
      username: String!
      email: String!
    ): User
    
    update(
      id: ID
      username: String
      email: String
    ): User
    
    delete(
      id: ID
    ): User

  }
  
  type User {
    id: ID!
    username: String!
    email: String!
  }
`;
