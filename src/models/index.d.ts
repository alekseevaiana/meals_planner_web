import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Measure {
  CUP = "CUP",
  GRAMM = "GRAMM",
  TSP = "TSP",
  TBSP = "TBSP",
  ML = "ML"
}

export enum IngredientTypeEnum {
  DAIRY = "DAIRY",
  OTHER = "OTHER",
  VEGETABLES = "VEGETABLES",
  FRUITS = "FRUITS"
}



type PantryIngredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GroceryIngredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AttachmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MealIngridientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IngredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MealMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PantryIngredient {
  readonly id: string;
  readonly ingredientID: string;
  readonly quantity?: number | null;
  readonly measure?: Measure | keyof typeof Measure | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PantryIngredient, PantryIngredientMetaData>);
  static copyOf(source: PantryIngredient, mutator: (draft: MutableModel<PantryIngredient, PantryIngredientMetaData>) => MutableModel<PantryIngredient, PantryIngredientMetaData> | void): PantryIngredient;
}

export declare class GroceryIngredient {
  readonly id: string;
  readonly ingredientID: string;
  readonly quantity?: number | null;
  readonly measure?: Measure | keyof typeof Measure | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<GroceryIngredient, GroceryIngredientMetaData>);
  static copyOf(source: GroceryIngredient, mutator: (draft: MutableModel<GroceryIngredient, GroceryIngredientMetaData>) => MutableModel<GroceryIngredient, GroceryIngredientMetaData> | void): GroceryIngredient;
}

export declare class Attachment {
  readonly id: string;
  readonly name?: string | null;
  readonly mealID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Attachment, AttachmentMetaData>);
  static copyOf(source: Attachment, mutator: (draft: MutableModel<Attachment, AttachmentMetaData>) => MutableModel<Attachment, AttachmentMetaData> | void): Attachment;
}

export declare class MealIngridient {
  readonly id: string;
  readonly quantity?: number | null;
  readonly measure?: Measure | keyof typeof Measure | null;
  readonly ingredientID: string;
  readonly mealID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MealIngridient, MealIngridientMetaData>);
  static copyOf(source: MealIngridient, mutator: (draft: MutableModel<MealIngridient, MealIngridientMetaData>) => MutableModel<MealIngridient, MealIngridientMetaData> | void): MealIngridient;
}

export declare class Ingredient {
  readonly id: string;
  readonly name?: string | null;
  readonly type?: IngredientTypeEnum | keyof typeof IngredientTypeEnum | null;
  readonly MealIngridients?: (MealIngridient | null)[] | null;
  readonly GroceryIngredients?: (MealIngridient | null)[] | null;
  readonly PantryIngredients?: (MealIngridient | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ingredient, IngredientMetaData>);
  static copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient, IngredientMetaData>) => MutableModel<Ingredient, IngredientMetaData> | void): Ingredient;
}

export declare class Meal {
  readonly id: string;
  readonly name?: string | null;
  readonly MealsAttachment?: (MealIngridient | null)[] | null;
  readonly MealIngridients?: (MealIngridient | null)[] | null;
  readonly note?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Meal, MealMetaData>);
  static copyOf(source: Meal, mutator: (draft: MutableModel<Meal, MealMetaData>) => MutableModel<Meal, MealMetaData> | void): Meal;
}