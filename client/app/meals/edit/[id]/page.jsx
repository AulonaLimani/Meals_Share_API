"use client";
import {
  useFindMealByIdQuery,
  useUpdateMealMutation,
  useDeleteMealMutation,
} from "@/graphql/generated/graphql";
import { MealForm } from "@/components/forms/MealForm";
import { Login } from "../../../../components/forms/Login";
import { useState } from "react";
import { useRouter } from "next/navigation";
import classes from "./page.module.css";

export default function EditMealPage({ params }) {
  const router = useRouter();

  const { data: mealData } = useFindMealByIdQuery({
    variables: { id: params.id },
  });

  const [updateMeal] = useUpdateMealMutation();

  const [deleteMeal] = useDeleteMealMutation();

  const handleUpdate = (values) => {
    updateMeal({
      variables: values,
      onCompleted(data) {
        router.push(`/meals/${data.updateMeal.id}`);
      },
    });
  };

  const [loggedIn, setLoggedIn] = useState(false);

  const meal = mealData?.findMealById;

  return (
    meal &&
    (loggedIn ? (
      <>
        <div className={classes.deleteButtonContainer}>
          <button
            className={classes.deleteButton}
            onClick={() => {
              deleteMeal({
                variables: { id: params.id },
                onCompleted(data) {
                  alert(`${meal.title} deleted successfully!`);
                  router.push("/meals");
                },
              });
            }}
          >
            Delete Meal
          </button>
        </div>
        <MealForm
          initialData={{ ...meal }}
          onSubmit={handleUpdate}
          showPasswords={false}
        />
      </>
    ) : (
      <Login initialData={{ ...meal }} setLoggedIn={setLoggedIn} />
    ))
  );
}
