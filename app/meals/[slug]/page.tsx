import Image from "next/image";
import classes from "./page.module.css";
import { getMealBySlug } from "@/lib/meal";
const MealDetailPage = ({ params }) => {
  const meal = getMealBySlug(params.slug);
  const instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>
            <span dangerouslySetInnerHTML={{ __html: meal.summary }} />
          </p>
        </div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailPage;
