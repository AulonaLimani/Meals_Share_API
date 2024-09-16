"use client";

import Link from "next/link";
import classes from "./page.module.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_MEALS } from "@/graphQL/Queries";
import MealGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  const { data: mealsData, loading: mealsLoading } = useQuery(GET_ALL_MEALS);
  console.log("meal data", mealsData);

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {mealsLoading && <>Loading meals</>}
        {mealsData?.getAllMeals && <MealGrid meals={mealsData.getAllMeals} />}
      </main>
    </>
  );
}
