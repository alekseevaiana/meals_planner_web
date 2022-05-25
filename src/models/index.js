// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Measure = {
  "CUP": "CUP",
  "GRAMM": "GRAMM",
  "TSP": "TSP",
  "TBSP": "TBSP",
  "ML": "ML"
};

const IngredientTypeEnum = {
  "DAIRY": "DAIRY",
  "OTHER": "OTHER",
  "VEGETABLES": "VEGETABLES",
  "FRUITS": "FRUITS"
};

const { PantryIngredient, GroceryIngredient, Attachment, MealIngridient, Ingredient, Meal } = initSchema(schema);

export {
  PantryIngredient,
  GroceryIngredient,
  Attachment,
  MealIngridient,
  Ingredient,
  Meal,
  Measure,
  IngredientTypeEnum
};