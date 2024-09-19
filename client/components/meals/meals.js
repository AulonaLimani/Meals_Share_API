import { useQuery } from "@apollo/client";
import MealGrid from "./meals-grid";
import { GET_ALL_MEALS } from "../../graphql/Queries";

export const Meals = ({ meals }) => {
  //   const { data: mealsData, loading, error } = useQuery(GET_ALL_MEALS);
  //   console.log("meal data", mealsData);

  // if (loading) return <p>Loading meals...</p>;
  // if (error) return <p>Error fetching meals: {error.message}</p>;

  return <MealGrid meals={meals} />;
};
