import classes from "./MealGrid.module.css";
const MealGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>{meal.title}</li>
      ))}
    </ul>
  );
};

export default MealGrid;
