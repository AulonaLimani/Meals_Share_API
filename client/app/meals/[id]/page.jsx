"use client";
import { useQuery } from "@apollo/client";
import classes from "./page.module.css";
import Image from "next/image";
import { GET_MEAL_BY_ID } from "../../../graphQL/Queries";
import ReactMarkDown from "react-markdown";
import Link from "next/link";

export default function MealDetailsPage({ params }) {
  const { data: mealData } = useQuery(GET_MEAL_BY_ID, {
    variables: { id: params.id },
  });

  const meal = mealData?.findMealById;

  if (!meal) {
    return <>meal not found!</>;
  }

  return (
    meal && (
      <>
        <header className={classes.header}>
          <div className={classes.image}>
            <Image src={meal?.image} alt={meal?.title} fill />
          </div>
          <div className={classes.headerText}>
            <h1>{meal?.title}</h1>
            <p className={classes.creator}>
              by <a href={`mailto:${meal?.creator_email}`}>{meal?.creator}</a>
            </p>
            <p className={classes.summary}>{meal?.summary}</p>
          </div>
        </header>
        <main>
          <ReactMarkDown className={classes.instructions}>
            {meal?.instructions}
          </ReactMarkDown>
        </main>
        <div className={classes.editContainer}>
          If you are the createor of this meal, and you want to edit it{" "}
          <Link href={`edit/${meal?.id}`}>click here</Link>
        </div>
      </>
    )
  );
}
