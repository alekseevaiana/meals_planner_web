/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPantryIngredient = /* GraphQL */ `
  mutation CreatePantryIngredient(
    $input: CreatePantryIngredientInput!
    $condition: ModelPantryIngredientConditionInput
  ) {
    createPantryIngredient(input: $input, condition: $condition) {
      id
      ingredientID
      quantity
      measure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updatePantryIngredient = /* GraphQL */ `
  mutation UpdatePantryIngredient(
    $input: UpdatePantryIngredientInput!
    $condition: ModelPantryIngredientConditionInput
  ) {
    updatePantryIngredient(input: $input, condition: $condition) {
      id
      ingredientID
      quantity
      measure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deletePantryIngredient = /* GraphQL */ `
  mutation DeletePantryIngredient(
    $input: DeletePantryIngredientInput!
    $condition: ModelPantryIngredientConditionInput
  ) {
    deletePantryIngredient(input: $input, condition: $condition) {
      id
      ingredientID
      quantity
      measure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createGroceryIngredient = /* GraphQL */ `
  mutation CreateGroceryIngredient(
    $input: CreateGroceryIngredientInput!
    $condition: ModelGroceryIngredientConditionInput
  ) {
    createGroceryIngredient(input: $input, condition: $condition) {
      id
      ingredientID
      quantity
      measure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateGroceryIngredient = /* GraphQL */ `
  mutation UpdateGroceryIngredient(
    $input: UpdateGroceryIngredientInput!
    $condition: ModelGroceryIngredientConditionInput
  ) {
    updateGroceryIngredient(input: $input, condition: $condition) {
      id
      ingredientID
      quantity
      measure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteGroceryIngredient = /* GraphQL */ `
  mutation DeleteGroceryIngredient(
    $input: DeleteGroceryIngredientInput!
    $condition: ModelGroceryIngredientConditionInput
  ) {
    deleteGroceryIngredient(input: $input, condition: $condition) {
      id
      ingredientID
      quantity
      measure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
      id
      name
      mealID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
      id
      name
      mealID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
      id
      name
      mealID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createMealIngridient = /* GraphQL */ `
  mutation CreateMealIngridient(
    $input: CreateMealIngridientInput!
    $condition: ModelMealIngridientConditionInput
  ) {
    createMealIngridient(input: $input, condition: $condition) {
      id
      quantity
      measure
      ingredientID
      mealID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateMealIngridient = /* GraphQL */ `
  mutation UpdateMealIngridient(
    $input: UpdateMealIngridientInput!
    $condition: ModelMealIngridientConditionInput
  ) {
    updateMealIngridient(input: $input, condition: $condition) {
      id
      quantity
      measure
      ingredientID
      mealID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteMealIngridient = /* GraphQL */ `
  mutation DeleteMealIngridient(
    $input: DeleteMealIngridientInput!
    $condition: ModelMealIngridientConditionInput
  ) {
    deleteMealIngridient(input: $input, condition: $condition) {
      id
      quantity
      measure
      ingredientID
      mealID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
      id
      name
      type
      MealIngridients {
        nextToken
        startedAt
      }
      GroceryIngredients {
        nextToken
        startedAt
      }
      PantryIngredients {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
      id
      name
      type
      MealIngridients {
        nextToken
        startedAt
      }
      GroceryIngredients {
        nextToken
        startedAt
      }
      PantryIngredients {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
      id
      name
      type
      MealIngridients {
        nextToken
        startedAt
      }
      GroceryIngredients {
        nextToken
        startedAt
      }
      PantryIngredients {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMeal = /* GraphQL */ `
  mutation CreateMeal(
    $input: CreateMealInput!
    $condition: ModelMealConditionInput
  ) {
    createMeal(input: $input, condition: $condition) {
      id
      name
      MealsAttachment {
        nextToken
        startedAt
      }
      MealIngridients {
        nextToken
        startedAt
      }
      note
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateMeal = /* GraphQL */ `
  mutation UpdateMeal(
    $input: UpdateMealInput!
    $condition: ModelMealConditionInput
  ) {
    updateMeal(input: $input, condition: $condition) {
      id
      name
      MealsAttachment {
        nextToken
        startedAt
      }
      MealIngridients {
        nextToken
        startedAt
      }
      note
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteMeal = /* GraphQL */ `
  mutation DeleteMeal(
    $input: DeleteMealInput!
    $condition: ModelMealConditionInput
  ) {
    deleteMeal(input: $input, condition: $condition) {
      id
      name
      MealsAttachment {
        nextToken
        startedAt
      }
      MealIngridients {
        nextToken
        startedAt
      }
      note
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
