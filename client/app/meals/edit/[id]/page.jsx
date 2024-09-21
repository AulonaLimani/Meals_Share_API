"use client";
import { toast } from "react-toastify";
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
  const { id, password, creator, creator_email, ...rest } = meal ?? {};

  const handleUpdate = (values) => {
    updateMeal({
      variables: { id, ...values },
      onCompleted(data) {
        toast.success(`${meal.title} updated successfully!`);
        router.push(`/meals/${data.updateMeal.id}`);
      },
      onError(error) {
        toast.error("Failed to update the meal");
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
        toast.error(`Failed to delete ${meal.title}`);
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
          initialData={{
            ...rest,
            creator,
            creator_email,
          }}
          onSubmit={handleUpdate}
          showPasswords={false}
        />
      </>
    ) : (
      <Login
        initialData={{ creator, creator_email, password }}
        setLoggedIn={setLoggedIn}
      />
    ))
  );
}
