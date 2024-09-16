import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const MealType = new GraphQLObjectType({
  name: "Meal",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    summary: { type: GraphQLString },
    instructions: { type: GraphQLString },
    creator: { type: GraphQLString },
    creator_email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
