import { ShoppingListService } from './../../services/shopping-list.service';
import { Ingredient } from './../../shared/ingredients.model';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
   newIngredient = new Ingredient('', 0);

//  @Output() newIngredientEmit = new EventEmitter<Ingredient>();

  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit() {
   
  }

  addToList(){
    // this.newIngredientEmit.emit(this.newIngredient);
    this.ShoppingListService.addIngredient(this.newIngredient);
  }

}
