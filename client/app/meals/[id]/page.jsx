"use client";
import classes from "./page.module.css";
import Image from "next/image";
import { useFindMealByIdQuery } from "@/graphql/generated/graphql";
import ReactMarkDown from "react-markdown";
import Link from "next/link";

export default function MealDetailsPage({ params }) {
  const { data: mealData } = useFindMealByIdQuery({
    variables: { id: params.id },
    fetchPolicy: "network-only",
  });

  const meal = mealData?.findMealById;

  if (!meal) {
    return <>meal not found!</>;
  }

  const imageUrl = `http://localhost:3001/${meal.image}`;

  return (
    meal && (
      <>
        <header className={classes.header}>
          <div className={classes.image}>
            <Image src={imageUrl} alt={meal?.title} fill />
          </div>
          <div className={classes.headerText}>
            <h1>{meal?.title}</h1>
            <p className={classes.creator}>
              by <a href={`mailto:${meal?.creator_email}`}>{meal?.creator}</a>
            </p>
            <p className={classes.summary}>{meal?.summary}</p>
          </div>
        </header>
        <div className={classes.cta}>
          <Link href={`edit/${meal?.id}`}>Edit Your Meal</Link>
        </div>
        <main>
          <ReactMarkDown className={classes.instructions}>
            {meal?.instructions}
          </ReactMarkDown>
        </main>
      </>
    )
  );
}
