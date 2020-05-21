import { Ingredient } from './../shared/ingredients.model';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  sendUpdatedArray = new EventEmitter<void>();

  ingredient: Ingredient[] = [
    new Ingredient('Matar', 500),
    new Ingredient('Paneer', 100)
    ]
    
    getIngredient(){
     return this.ingredient.slice();
    }

    addIngredient(data: Ingredient){

      this.ingredient.push(new Ingredient(data.name, data.amount));
      this.sendUpdatedArray.emit();

    }

    deleteFromList(i){
      this.ingredient.splice(i, 1);
      this.sendUpdatedArray.emit();
    }

    moveToList(data: Ingredient[]){
      this.ingredient.push(...data);
      this.sendUpdatedArray.emit();
      console.log("this.ingredients",this.ingredient);
    }
  constructor() { }
}
