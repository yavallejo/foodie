import MealGrid from "@/components/meals/MealGrid";
import classes from "./page.module.css";
import Link from "next/link";
const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicius meals, created{" "}
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
        <MealGrid meals={[]} />
      </main>
    </>
  );
};

export default MealsPage;
