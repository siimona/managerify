import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $description: String!
    $price: Int!
    $sku: String!
    $weight: Int!
    $provider: String!
    $unit: String!
    $initialStock: Int!
    $currentStock: Int!
    $purchases: Int!
    $category: String!
  ) {
    createProduct(
      createProductInput: {
        name: $name
        description: $description
        price: $price
        sku: $sku
        weight: $weight
        provider: $provider
        unit: $unit
        initialStock: $initialStock
        currentStock: $currentStock
        purchases: $purchases
        category: $category
      }
    ) {
      id
      name
      description
      price
      sku
      weight
      provider
      unit
      initialStock
      currentStock
      purchases
      category
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: String!
    $name: String!
    $description: String!
    $price: Int!
    $sku: String!
    $weight: Int!
    $provider: String!
    $unit: String!
    $initialStock: Int!
    $currentStock: Int!
    $purchases: Int!
    $category: String!
  ) {
    updateProduct(
      updateProductInput: {
        id: $id
        name: $name
        description: $description
        price: $price
        sku: $sku
        weight: $weight
        provider: $provider
        unit: $unit
        initialStock: $initialStock
        currentStock: $currentStock
        purchases: $purchases
        category: $category
      }
    ) {
      id
      name
      description
      price
      sku
      weight
      provider
      unit
      initialStock
      currentStock
      purchases
      category
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String!) {
    removeProduct(id: $id) {
      id
      createdOn
      modifiedOn
      name
      description
      price
      sku
      provider
      initialStock
      currentStock
      purchases
      category
      weight
      unit
    }
  }
`;
