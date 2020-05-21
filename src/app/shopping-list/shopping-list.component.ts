import { ShoppingListService } from './../services/shopping-list.service';
import { Ingredient } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {

//   ingredient: Ingredient[] = [
// new Ingredient('Matar', 500),
// new Ingredient('Paneer', 100)
// ]
ingredient: Ingredient[];

  constructor(
    private ShoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
     this.ingredient = this.ShoppingListService.getIngredient();
     this.ShoppingListService.sendUpdatedArray.subscribe(() => {
       this.ingredient = this.ShoppingListService.getIngredient();

     })
  }

  // addToList(newIngredient: Ingredient) {
  //   console.log(newIngredient);
  //   this.ingredient.push(newIngredient);
  // }

  deleteFromList(i){
    this.ShoppingListService.deleteFromList(i);
  }

}
