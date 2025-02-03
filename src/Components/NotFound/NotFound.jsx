import React, { useContext, useEffect } from "react";
import "./NotFound.module.scss";
import notFound from "../../assets/images/notfound.png";
import Header from "../Header/Header";
import { MealsContext } from "./../../Contexts/MealsContext";
export default function NotFound() {
  let { getMealsCategories } = useContext(MealsContext);
  useEffect(() => {
    getMealsCategories();
  }, []);

  return (
    <div>
      <Header />
      <img src={notFound} alt="error" />
    </div>
  );
}
