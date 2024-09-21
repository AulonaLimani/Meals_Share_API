"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateMealMutation } from "@/graphql/generated/graphql";
import { MealForm } from "@/components/forms/MealForm";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";

export default function ShareMealPage() {
  const router = useRouter();
  const [createMeal] = useCreateMealMutation();

  const handleCreate = (values) => {
    createMeal({
      variables: values,
      onCompleted(data) {
        toast.success("Meal created successfully!");
        router.push(`/meals/${data.createMeal.id}`);
      },
      onError(error) {
        toast.error(`Error creating meal: ${error.message}`);
      },
    });
  };

  return (
    <div className={classes.createForm}>
      <MealForm onSubmit={handleCreate} />
    </div>
  );
}
