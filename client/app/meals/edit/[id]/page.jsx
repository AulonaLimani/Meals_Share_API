"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useFindMealByIdQuery,
  useUpdateMealMutation,
  useDeleteMealMutation,
} from "@/graphql/generated/graphql";
import { MealForm } from "@/components/forms/MealForm";
import { Login } from "@/components/forms/Login";
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
  const [loggedIn, setLoggedIn] = useState(false);

  const meal = mealData?.findMealById;

  const handleUpdate = (values) => {
    updateMeal({
      variables: values,
      onCompleted(data) {
        router.push(`/meals/${data.updateMeal.id}`);
      },
    });
  };

  const handleDelete = () => {
    deleteMeal({
      variables: { id: params.id },
      onCompleted(data) {
        toast.success(`${meal.title} deleted successfully!`);
        router.push("/meals");
      },
      onError(error) {
        toast.error(`Failed to delete ${meal.title}: ${error.message}`);
      },
    });
  };

  return (
    meal &&
    (loggedIn ? (
      <>
        <div className={classes.deleteButtonContainer}>
          <button className={classes.deleteButton} onClick={handleDelete}>
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
