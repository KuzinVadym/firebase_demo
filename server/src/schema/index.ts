import { gql } from 'apollo-server-koa';

import authSchema from './auth';
import userSchema from './user';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, authSchema, userSchema];
