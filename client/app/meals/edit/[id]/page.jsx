"use client";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MEAL_BY_ID } from "../../../../graphQL/Queries";
import { UPDATE_MEAL, DELETE_MEAL } from "@/graphQL/Mutation";
import { MealForm } from "@/components/forms/MealForm";
import { Login } from "../../../../components/forms/Login";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditMealPage({ params }) {
  const router = useRouter();

  const { data: mealData } = useQuery(GET_MEAL_BY_ID, {
    variables: { id: params.id },
  });

  const [updateMeal] = useMutation(UPDATE_MEAL);

  const [deleteMeal] = useMutation(DELETE_MEAL);

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
        <div>
          <button
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
