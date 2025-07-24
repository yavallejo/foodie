import classes from "./MealGrid.module.css";
import MealItem from "./MealItem";
const MealGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          {/* ...meal => Extract all the properties of the meal object and extend them as key-value pairs */}
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealGrid;
