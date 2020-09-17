import gql from 'graphql-tag';

export const GET_ORDERS = gql`
    {
        orders {
            uid
            title
            bookingDate
        }
    }
`;
