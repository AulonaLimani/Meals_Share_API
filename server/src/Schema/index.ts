import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_MEALS, GET_MEAL_BY_ID } from "./Queries/Meal";
import { CREATE_MEAL, DELETE_MEAL, UPDATE_MEAL } from "./Mutations/Meal";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllMeals: GET_ALL_MEALS,
    findMealById: GET_MEAL_BY_ID,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createMeal: CREATE_MEAL,
    updateMeal: UPDATE_MEAL,
    deleteMeal: DELETE_MEAL,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
