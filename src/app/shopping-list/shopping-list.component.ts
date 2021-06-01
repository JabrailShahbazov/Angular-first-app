import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../service/shopping-list.service";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]
  private isChangeSub: Subscription;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.isChangeSub = this.slService.ingredientsChanced.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.isChangeSub.unsubscribe();
  }


}
