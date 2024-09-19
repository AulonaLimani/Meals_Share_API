import { GraphQLID, GraphQLString } from "graphql";
import { MealType } from "../TypeDefs/Meal";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    return await prisma.meal.create({ data: args });
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

    return await prisma.meal.update({
      where: { id: parseInt(id) },
      data: args,
    });
  },
};

export const DELETE_MEAL = {
  type: MealType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_parent: any, args: any) {
    const id = args.id;
    return await prisma.meal.delete({
      where: { id: parseInt(id) },
    });
  },
};
