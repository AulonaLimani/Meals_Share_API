import { GraphQLID, GraphQLString } from "graphql";
import { MealType } from "../TypeDefs/Meal";
import { Meal } from "../../Entities/Meal";

export const CREATE_MEAL = {
  type: MealType,
  args: {
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    summary: { type: GraphQLString },
    instructions: { type: GraphQLString },
    creator: { type: GraphQLString },
    creator_email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(_parent: any, args: any) {
    await Meal.insert(args);
    return args;
  },
};

export const UPDATE_MEAL = {
  type: MealType,
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    summary: { type: GraphQLString },
    instructions: { type: GraphQLString },
    creator: { type: GraphQLString },
    creator_email: { type: GraphQLString },
  },
  async resolve(_parent: any, args: any) {
    const id = args.id;

    const meal = await Meal.findOne({ id });

    if (!meal) {
      throw new Error("This meal does not exist");
    }

    await Meal.update({ id }, args);

    return args;
  },
};

export const DELETE_MEAL = {
  type: MealType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_parent: any, args: any) {
    await Meal.delete(args.id);
    return args.id;
  },
};
