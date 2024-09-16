import { gql } from "@apollo/client";

export const CREATE_MEAL = gql`
  mutation createMeal(
    $title: String!
    $image: String!
    $summary: String!
    $instructions: String!
    $creator: String!
    $creator_email: String!
    $password: String!
  ) {
    createMeal(
      title: $title
      image: $image
      summary: $summary
      instructions: $instructions
      creator: $creator
      creator_email: $creator_email
      password: $password
    ) {
      id
      title
      image
      summary
      instructions
      creator
      creator_email
      password
    }
  }
`;

export const UPDATE_MEAL = gql`
  mutation updateMeal(
    $id: ID!
    $title: String!
    $image: String!
    $summary: String!
    $instructions: String!
    $creator: String!
    $creator_email: String!
  ) {
    updateMeal(
      id: $id
      title: $title
      image: $image
      summary: $summary
      instructions: $instructions
      creator: $creator
      creator_email: $creator_email
    ) {
      id
      title
      image
      summary
      instructions
      creator
      creator_email
      password
    }
  }
`;

export const DELETE_MEAL = gql`
  mutation deleteMeal($id: ID!) {
    deleteMeal(id: $id) {
      id
    }
  }
`;
