import {Injectable, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Tomatoes', 21),
  ];
  ingredientsChanced = new EventEmitter<Ingredient[]>();

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanced.emit(this.ingredients.slice());
  }
}
