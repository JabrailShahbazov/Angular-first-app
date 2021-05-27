import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "../recipes/recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private slService: ShoppingListService) {
  }

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is thinking Recipe',
      'https://images.immediate.co.uk/production/volatile' +
      '/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3' +
      '.jpg?quality=90&resize=960,872',
      [
        new Ingredient('meat', 23),
        new Ingredient('chechen', 3),
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}


