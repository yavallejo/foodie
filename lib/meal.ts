import Database from "better-sqlite3";
const db = new Database("meals.db");

export const getMeals = async () => {
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
};
