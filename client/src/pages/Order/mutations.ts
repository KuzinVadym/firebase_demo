import gql from 'graphql-tag';

export const UPDATE_ORDER = gql`
    mutation updateOrder($uid: ID, $title: String) {
        updateOrder(uid: $uid, title: $title) {
            uid
            title
        }
    }
`;