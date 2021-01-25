/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getText = /* GraphQL */ `
  query GetText($id: ID!) {
    getText(id: $id) {
      id
      phoneNumber
      message
      deliveryTime
      ttl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTexts = /* GraphQL */ `
  query ListTexts(
    $filter: ModelTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTexts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phoneNumber
        message
        deliveryTime
        ttl
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const textsByDeliveryTime = /* GraphQL */ `
  query TextsByDeliveryTime(
    $deliveryTime: AWSDateTime
    $sortDirection: ModelSortDirection
    $filter: ModelTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    textsByDeliveryTime(
      deliveryTime: $deliveryTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        phoneNumber
        message
        deliveryTime
        ttl
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
