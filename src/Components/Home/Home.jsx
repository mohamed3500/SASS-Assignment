import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import MealByCategory from "../MealByCategroy/MealByCategory";
import { MealsContext } from "../../Contexts/MealsContext";
import Header from "./../Header/Header";
import DisplayCards from "../DisplayCards/DisplayCards";

export default function Home() {
  let { getMealsCategories, getAllMeals } = useContext(MealsContext);

  useEffect(() => {
    getMealsCategories();
    getAllMeals();
  }, []);

  return (
    <>
      <Header />
      <DisplayCards />
    </>
  );
}
