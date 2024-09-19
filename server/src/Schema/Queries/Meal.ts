import { MealType } from "../TypeDefs/Meal";
import { GraphQLID, GraphQLList } from "graphql";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET_ALL_MEALS = {
  type: new GraphQLList(MealType),
  async resolve() {
    return await prisma.meal.findMany();
  },
};

export const GET_MEAL_BY_ID = {
  type: MealType,
  args: { id: { type: GraphQLID } },
  async resolve(_parent: any, args: any) {
    const id = args.id;

    const meal = await prisma.meal.findUnique({ where: { id: parseInt(id) } });

    if (!meal) {
      throw new Error("Could not find a meal with that id");
    }

    return meal;
  },
};
