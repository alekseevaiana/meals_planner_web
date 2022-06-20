/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePantryIngredient = /* GraphQL */ `
  subscription OnCreatePantryIngredient($owner: String) {
    onCreatePantryIngredient(owner: $owner) {
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
export const onUpdatePantryIngredient = /* GraphQL */ `
  subscription OnUpdatePantryIngredient($owner: String) {
    onUpdatePantryIngredient(owner: $owner) {
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
export const onDeletePantryIngredient = /* GraphQL */ `
  subscription OnDeletePantryIngredient($owner: String) {
    onDeletePantryIngredient(owner: $owner) {
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
export const onCreateGroceryIngredient = /* GraphQL */ `
  subscription OnCreateGroceryIngredient($owner: String) {
    onCreateGroceryIngredient(owner: $owner) {
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
export const onUpdateGroceryIngredient = /* GraphQL */ `
  subscription OnUpdateGroceryIngredient($owner: String) {
    onUpdateGroceryIngredient(owner: $owner) {
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
export const onDeleteGroceryIngredient = /* GraphQL */ `
  subscription OnDeleteGroceryIngredient($owner: String) {
    onDeleteGroceryIngredient(owner: $owner) {
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
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment($owner: String) {
    onCreateAttachment(owner: $owner) {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment($owner: String) {
    onUpdateAttachment(owner: $owner) {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment($owner: String) {
    onDeleteAttachment(owner: $owner) {
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
export const onCreateMealIngridient = /* GraphQL */ `
  subscription OnCreateMealIngridient($owner: String) {
    onCreateMealIngridient(owner: $owner) {
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
export const onUpdateMealIngridient = /* GraphQL */ `
  subscription OnUpdateMealIngridient($owner: String) {
    onUpdateMealIngridient(owner: $owner) {
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
export const onDeleteMealIngridient = /* GraphQL */ `
  subscription OnDeleteMealIngridient($owner: String) {
    onDeleteMealIngridient(owner: $owner) {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
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
export const onCreateMeal = /* GraphQL */ `
  subscription OnCreateMeal($owner: String) {
    onCreateMeal(owner: $owner) {
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
export const onUpdateMeal = /* GraphQL */ `
  subscription OnUpdateMeal($owner: String) {
    onUpdateMeal(owner: $owner) {
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
export const onDeleteMeal = /* GraphQL */ `
  subscription OnDeleteMeal($owner: String) {
    onDeleteMeal(owner: $owner) {
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
