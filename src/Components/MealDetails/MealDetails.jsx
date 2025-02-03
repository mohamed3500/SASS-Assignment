import React, { useEffect, useState } from "react";
import styles from "./MealDetails.module.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function MealDetails() {
  const [mealDetails, setMealDetails] = useState(null);

  let text1 = "";
  let text2 = "";
  let { mealId } = useParams();
  const arrWithNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const getMealById = (id) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setMealDetails(res.data.meals[0]);
        console.log(res.data.meals[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMealById(mealId);
  }, []);

  return (
    <>
      {mealDetails ? (
        <>
          <section className="meal-details container mx-auto pt-4">
            <h1 className="text-5xl font-semibold mb-4 md:mb-4">
              {mealDetails.strMeal}
            </h1>
            <div className={`meal-details-data ${styles.flexClass} flex-wrap`}>
              <div className="item lg:w-1/3 p-3">
                <div className="">
                  <img
                    className="rounded-xl"
                    src={mealDetails.strMealThumb}
                    alt=""
                  />
                  <div className={`${styles.btnGroup} flex justify-center`}>
                    <button className="bg-red-600  text-white py-2 px-4 rounded-lg ">
                      <Link
                        to={mealDetails.strYoutube}
                        target="_blank"
                        className="flex items-center"
                      >
                        <i className="fa-brands fa-youtube me-2"></i>
                        youtube
                      </Link>
                    </button>
                    <button className="bg-[#21BA75]  text-white py-2 px-4 rounded-lg ">
                      <Link
                        to={mealDetails.strSource}
                        target="_blank"
                        className="flex items-center"
                      >
                        <i className="fa-solid fa-globe me-2"></i>
                        source
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="item lg:w-1/3 p-3">
                <div className="">
                  <p>{mealDetails.strInstructions}</p>
                </div>
              </div>
              <div className="item w-full lg:w-1/3 p-3">
                <div className=" bg-white rounded-2xl p-4 w-full">
                  <h3 className="text-2xl font-semibold mb-4 border-b-4 p-2">
                    Ingredients
                  </h3>

                  {arrWithNumber.map((numb) => {
                    text1 = "strIngredient" + numb;
                    text2 = "strMeasure" + numb;
                    let x =
                      mealDetails[text1] && mealDetails[text2] ? (
                        <div className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 ">
                          <span>{mealDetails[text1]}</span>
                          <span>{mealDetails[text2]}</span>
                        </div>
                      ) : null;
                    return x;
                  })}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <BeatLoader color="#10b981" />
      )}
    </>
  );
}
