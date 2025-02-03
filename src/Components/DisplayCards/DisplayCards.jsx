import React, { useContext } from "react";
import { MealsContext } from "../../Contexts/MealsContext";
import styles from "./DisplayCards.module.scss";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function DisplayCards() {
  let { allMeals } = useContext(MealsContext);
  return (
    <>
      <section className="meals-cards my-20">
        <div className="container mx-auto flex flex-wrap">
          {allMeals?.meals?.length > 0 ? (
            allMeals?.meals?.map((meal, index) => (
              <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-20" key={index}>
                <div className="item mx-4 h-full">
                  <div className="meal text-center hover:shadow-xl group h-full hover:scale-105 duration-300 transition-all bg-white p-12 pb-4  rounded-[35px]">
                    <img
                      src={meal.strMealThumb}
                      className="w-full group-hover:rotate-[360deg] duration-700 transition-all rounded-full drop-shadow-xl  -translate-y-20  shadow-2xl"
                      alt={meal.strMealThumb}
                    />
                    <h3 className="font-semibold -mt-12 font-Pacifico tracking-wider	 text-xl">
                      {meal.strMeal.split(" ").slice(0, 2).join(" ")}
                    </h3>
                    {meal.strArea ? (
                      <h5 className="flex justify-center items-center gap-2 text-emerald-600">
                        <i className="fa-solid fa-earth-americas" />
                        {meal.strArea}
                      </h5>
                    ) : null}

                    <button
                      className={`text-white ${styles.bgColor} mt-4 bg-secondary hover:bg-emerald-600 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300  px-8 py-2 rounded-full`}
                    >
                      <Link
                        to={`/mealdetails/${meal.idMeal}`}
                        data-discover="true"
                      >
                        View Recipe
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <BeatLoader color="#10b981" />
          )}
        </div>
      </section>
    </>
  );
}
