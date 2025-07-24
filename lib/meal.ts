import Database from "better-sqlite3";

// Replace 'meals.db' with your actual database file path
const db = new Database("meals.db");

export const getMeals = () => {
  // TODO: "Implement the logic to fetch meals from the database";
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
};
