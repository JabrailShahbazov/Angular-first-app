import {Injectable, EventEmitter } from '@angular/core';
import {Recipe} from "../recipes/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() {
  }

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is thinking Recipe',
      'https://images.immediate.co.uk/production/volatile' +
      '/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3' +
      '.jpg?quality=90&resize=960,872'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}


