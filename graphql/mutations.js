/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createText = /* GraphQL */ `
  mutation CreateText(
    $input: CreateTextInput!
    $condition: ModelTextConditionInput
  ) {
    createText(input: $input, condition: $condition) {
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
export const updateText = /* GraphQL */ `
  mutation UpdateText(
    $input: UpdateTextInput!
    $condition: ModelTextConditionInput
  ) {
    updateText(input: $input, condition: $condition) {
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
export const deleteText = /* GraphQL */ `
  mutation DeleteText(
    $input: DeleteTextInput!
    $condition: ModelTextConditionInput
  ) {
    deleteText(input: $input, condition: $condition) {
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
