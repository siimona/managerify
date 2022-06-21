import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      initialStock
      currentStock
      purchases
      category
      provider
      price
      weight
      unit
      description
      sku
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($id: String!) {
    product(id: $id) {
      id
      name
      initialStock
      currentStock
      purchases
      category
      provider
      price
      weight
      unit
      description
      sku
    }
  }
`;

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(
      loginInput: {
        email: $email
        password: $password
      }
    ) {
      id
      name
      email
      phone
      role
    }
  }
`;

export const GET_STATISTICS = gql`
  query {
    mostPurchased {
      id
      name
      purchases
    }
    leastPurchased {
      id
      name
      purchases
    }
    purchasedCategories {
      purchases
      category
    }
    leastStock {
      id
      name
      currentStock
    }
  }
`;
