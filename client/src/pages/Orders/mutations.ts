import gql from 'graphql-tag';

export const CREATE_ORDER = gql`
    mutation createOrder($title: String!, $bookingDate: Date!, $customer: OrderCustomerInput, $address: OrderAddressInput) {
        createOrder(title: $title, bookingDate: $bookingDate, customer: $customer, address: $address ) {
            uid
            title
            bookingDate
        }
    }
`;