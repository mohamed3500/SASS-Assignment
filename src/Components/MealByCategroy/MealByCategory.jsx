import React, { useContext, useEffect } from "react";
import styles from "./MealByCategory.module.scss";
import Header from "./../Header/Header";
import { MealsContext } from "../../Contexts/MealsContext";
import { Link, useParams } from "react-router-dom";
import DisplayCards from "../DisplayCards/DisplayCards";

export default function MealByCategory() {
  let { cat } = useParams();
  let { allMeals, getMealsCategories, getMealsByCategory } =
    useContext(MealsContext);

  useEffect(() => {
    getMealsByCategory(cat);
    getMealsCategories();
  }, []);

  return (
    <>
      <Header />
      <DisplayCards />
    </>
  );
}
