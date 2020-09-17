import { gql } from 'apollo-server-koa';

export default gql`
  extend type Query {
    orders: [Order]
    order(uid: ID!): Order
  }
  
  extend type Mutation {

    createOrder(
      title: String!
      bookingDate: Date!
      customer: OrderCustomerInput
      address: OrderAddressInput
    ): Order
    
    updateOrder(
      uid: ID
      title: String
      bookingDate: Date
    ): Order

    deleteOrder(
      uid: ID!
    ): String
    
  }
  
  type Order {
    uid: ID
    title: String
    bookingDate: Date
    customer: OrderCustomer
    address: OrderAddress
  }

  type OrderCustomer {
    email: String
    phone: String
    name: String
  }

  input OrderCustomerInput {
    email: String
    phone: String
    name: String
  }
  
  type OrderAddress {
    city: String
    country: String
    street: String
    zip: String
  }

  input OrderAddressInput {
    city: String
    country: String
    street: String
    zip: String
  }
`;