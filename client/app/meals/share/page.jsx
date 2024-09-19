"use client";
import { useCreateMealMutation } from "@/graphql/generated/graphql";
import { MealForm } from "@/components/forms/MealForm";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";

export default function ShareMealPage() {
  const router = useRouter();
  const [createMeal] = useCreateMealMutation();

  const handleCreate = async (values) => {
    console.log("values", values);
    try {
      await createMeal({
        variables: values,
        onCompleted(data) {
          router.push(`/meals/${data.createMeal.id}`);
        },
      });
    } catch (error) {
      console.error("Error creating meal:", error);
    }
  };

  return (
    <div className={classes.createForm}>
      <MealForm onSubmit={handleCreate} />
    </div>
  );
}
