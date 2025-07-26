import Database from "better-sqlite3";
const db = new Database("meals.db");

export const getMeals = async () => {
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
};

export const getMealBySlug = (slug: string) => {
  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  return meal;
};
