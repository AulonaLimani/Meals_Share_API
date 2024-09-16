import { gql } from "@apollo/client";

const mealSelect = ` 
      id
      title
      image
      summary
      instructions
      creator
      creator_email
      password`;

export const GET_ALL_MEALS = gql`
  query getAllMeals {
    getAllMeals {
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

export const GET_MEAL_BY_ID = gql`
  query findMealById($id: ID!) {
    findMealById(id: $id) {
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
