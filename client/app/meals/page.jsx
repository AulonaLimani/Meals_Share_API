"use client";

import { useState } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import { useGetAllMealsQuery } from "@/graphql/generated/graphql";
import MealGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  const [page, setPage] = useState(1);
  const limit = 6;

  const {
    data: mealsData,
    loading: mealsLoading,
    error: mealsError,
  } = useGetAllMealsQuery({
    variables: { page, limit },
    fetchPolicy: "network-only",
  });

  const totalPages = mealsData?.getAllMeals?.totalPages || 1;

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

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
        {mealsLoading && <>Loading meals...</>}
        {mealsError && <p>Failed to load meals. Please try again later.</p>}
        {mealsData?.getAllMeals?.meals?.length > 0 && (
          <>
            <MealGrid meals={mealsData.getAllMeals.meals} />
            <div className={classes.pagination}>
              <span
                className={`${classes.arrow} ${
                  page === 1 ? classes.disabled : ""
                }`}
                onClick={handlePreviousPage}
              >
                {"<<"}
              </span>
              <span>
                Page {page} of {totalPages}
              </span>
              <span
                className={`${classes.arrow} ${
                  page === totalPages ? classes.disabled : ""
                }`}
                onClick={handleNextPage}
              >
                {">>"}
              </span>
            </div>
          </>
        )}
      </main>
    </>
  );
}
