import { AddRecipeService } from 'src/app/services/add-recipe.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {Input} from '@angular/core'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {

  // @Input() recipe: {name: string , description: string, imagePath: string};
  // @Input() recipe =  new Recipe('', '', '');
  // tslint:disable-next-line: no-input-rename
  @Input('recipeItem') recipe =  new Recipe('', '', '', []);
  // @Input('index') i: any;

  // @Output() selectedRecipe = new EventEmitter<void>();
  // @Output() deleteRecipeItem = new EventEmitter<number>();
  // recipes: Recipe[] = [
  //   new Recipe('Matar Paneer',
  //   'A tasty spicy common Indian dish that can be found in every restaurant in India.',
  //    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Matar-Paneer.JPG/800px-Matar-Paneer.JPG'),
  //   new Recipe('Dahi Lassi',
  //    'A delicious dairy product that can be addictive.',
  //    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Matar-Paneer.JPG/800px-Matar-Paneer.JPG')
  // ];


  constructor(private recipes: AddRecipeService) { }

  ngOnInit() {}

  onSelect() {
    console.log("onSelect is getting called!");
    this.recipes.selectedRecipe.emit(this.recipe);
  }

  getColor(){
    // console.log(this.recipe.name === 'Matar Paneer' ? 'danger' : 'primary');
    return this.recipe.name === 'Matar Paneer' ? 'blue' : 'red';

  }
  // deleteRecipeItem(i){
  //   console.log(i);
  //   this.deleteRecipeItem.emit(i);
  // }

}
