import { MealType } from "../TypeDefs/Meal";
import { GraphQLID, GraphQLList } from "graphql";
import { Meal } from "./../../Entities/Meal";
import { resolve } from "path";

export const GET_ALL_MEALS = {
  type: new GraphQLList(MealType),
  resolve() {
    return Meal.find();
  },
};

export const GET_MEAL_BY_ID = {
  type: MealType,
  args: { id: { type: GraphQLID } },
  async resolve(_parent: any, args: any) {
    const id = args.id;

    const meal = await Meal.findOne({ id });

    if (!meal) {
      throw new Error("Could not find a meal with that id");
    }

    return meal;
  },
};
