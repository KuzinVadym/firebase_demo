import { GraphQLDateTime } from 'graphql-iso-date';

import authResolvers from './auth';
import ordersResolvers from './orders';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  authResolvers,
  ordersResolvers
];
