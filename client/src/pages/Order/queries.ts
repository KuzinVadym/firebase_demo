import gql from 'graphql-tag';

export const GET_ORDER = gql`
    query order($uid: ID!){
        order(uid: $uid) {
            uid
            title
            bookingDate
            customer {
                email
                phone
                name
            }
            address {
                city
                country
                street
                zip
            }
        }
    }
`;
