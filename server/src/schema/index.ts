import { gql } from 'apollo-server-koa';

import authSchema from './auth';
import ordersSchema from './orders';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, authSchema, ordersSchema];
