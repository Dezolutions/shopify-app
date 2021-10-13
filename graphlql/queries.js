import gql from 'graphql-tag';

export const GET_CUSTOMER = (email) => gql`
  query getCustomer {
    customers(first: 20 query: "${email}") {
      edges{
        node{
          id,
          firstName,
          lastName,
          email,
          phone
        }
      }
    }
  }`;

export const GET_STORE = gql`
  query getShop{
    shop{
      name,
      description
    }
  }
`