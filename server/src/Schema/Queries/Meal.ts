import { MealType } from "../TypeDefs/Meal";
import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType } from "graphql";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const MealPaginationType = new GraphQLObjectType({
  name: "MealPagination",
  fields: {
    meals: { type: new GraphQLList(MealType) },
    totalPages: { type: GraphQLInt },
    currentPage: { type: GraphQLInt },
  },
});

export const GET_ALL_MEALS = {
  type: MealPaginationType,
  args: {
    page: { type: GraphQLInt },
    limit: { type: GraphQLInt },
  },
  async resolve(_parent: any, args: { page: number; limit: number }) {
    const { page = 1, limit = 10 } = args;

    const skip = (page - 1) * limit;

    const meals = await prisma.meal.findMany({
      skip,
      take: limit,
    });

    const totalMeals = await prisma.meal.count();
    const totalPages = Math.ceil(totalMeals / limit);

    return {
      meals,
      totalPages,
      currentPage: page,
    };
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
