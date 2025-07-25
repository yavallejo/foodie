import { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/MealGrid";
import { getMeals } from "@/lib/meal";

const Meals = async () => {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<div className={classes.loading}>Fetching Meals....</div>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
