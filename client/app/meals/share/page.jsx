"use client";
import { CREATE_MEAL } from "@/graphQL/Mutation";
import { useMutation } from "@apollo/client";
import { MealForm } from "@/components/forms/MealForm";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";

export default function ShareMealPage() {
  const router = useRouter();

  const [createMeal] = useMutation(CREATE_MEAL);

  const handleCreate = (values) => {
    createMeal({
      variables: values,
      onCompleted(data) {
        router.push(`/meals/${data.createMeal.id}`);
      },
    });
  };

  return (
    <div className={classes.createForm}>
      <MealForm onSubmit={handleCreate} />
    </div>
  );
}
