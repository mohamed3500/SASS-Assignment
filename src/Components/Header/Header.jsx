import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MealsContext } from "./../../Contexts/MealsContext";
import styles from "./Header.module.scss";
import { BeatLoader } from "react-spinners";

export default function Header() {
  let { mealsCategories, getAllMeals, getMealsByCategory } =
    useContext(MealsContext);
  // px-4 py-2
  return (
    <>
      <header className="container mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 mx-4 my-6">
          Learn, Cook, Eat Your Food
        </h1>
        <ul className="sm:flex hidden mt-8 flex-wrap gap-4 font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 pb-4 mb-4">
          <li className="me-2 ">
            <NavLink
              className={`inline-block anchorStyle  border border-gray-500 transition-all hover:bg-white hover:shadow-xl shadow duration-300 rounded-full  dark:hover:bg-gray-800 dark:hover:text-gray-300`}
              to="/"
              onClick={() => {
                getAllMeals();
              }}
            >
              All
            </NavLink>
          </li>

          {mealsCategories?.meals?.length > 0 ? (
            mealsCategories.meals.map((cat, index) => (
              <li className="me-2" key={index}>
                <NavLink
                  className={`inline-block anchorStyle  border border-gray-500 transition-all hover:bg-white hover:shadow-xl shadow duration-300 rounded-full  dark:hover:bg-gray-800 dark:hover:text-gray-300`}
                  to={`/category/${cat.strCategory}`}
                  onClick={() => {
                    getMealsByCategory(cat.strCategory);
                  }}
                >
                  {cat.strCategory}
                </NavLink>
              </li>
            ))
          ) : (
            <BeatLoader color="#10b981" />
          )}
        </ul>
        <select
          name="cars"
          id="cars"
          className="sm:hidden w-full mt-8 border p-2 rounded-lg"
          onChange={(e) => {
            getMealsByCategory(e.target.value);
          }}
        >
          {mealsCategories?.meals?.length > 0
            ? mealsCategories.meals.map((cat, index) => (
                <option key={index} value={`${cat.strCategory}`}>
                  {cat.strCategory}
                </option>
              ))
            : null}
        </select>
      </header>
    </>
  );
}
