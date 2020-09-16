import { GraphQLDateTime } from 'graphql-iso-date';

import authResolvers from './auth';
import userResolvers from './user';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  authResolvers,
  userResolvers
];
