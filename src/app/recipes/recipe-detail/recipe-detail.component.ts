import { ShoppingListService } from './../../services/shopping-list.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {

  @Input() currentRecipe: Recipe;


  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit() {}

 

  moveToShoppingList()
  {
    console.log("moveToShoppingList getting called");
this.ShoppingListService.moveToList(this.currentRecipe.Ingredients);
// this.reset()
  }

}