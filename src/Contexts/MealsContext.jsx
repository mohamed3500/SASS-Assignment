import axios from "axios";
import { createContext, useState } from "react";

export let MealsContext = createContext();

export default function MealsContextProvider(props) {
  const [mealsCategories, setmealsCategories] = useState(null);
  const [allMeals, setAllMeals] = useState(null);

  function getMealsCategories() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      .then((res) => {
        setmealsCategories(res.data);
      })
      .catch((err) => console.log(err));
  }

  function getAllMeals() {
    setAllMeals(null);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) => {
        setAllMeals(res.data);
      })
      .catch((err) => console.log(err));
  }

  function getMealsByCategory(cat) {
    setAllMeals(null);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((res) => {
        console.log(res.data);
        setAllMeals(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <MealsContext.Provider
        value={{
          mealsCategories,
          setmealsCategories,
          allMeals,
          setAllMeals,
          getMealsCategories,
          getAllMeals,
          getMealsByCategory,
        }}
      >
        {props.children}
      </MealsContext.Provider>
    </>
  );
}
