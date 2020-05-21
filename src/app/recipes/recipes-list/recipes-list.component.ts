import { Recipe } from './../recipe.model';
import { Component, OnInit, ViewEncapsulation, OnDestroy, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AddRecipeService } from 'src/app/services/add-recipe.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  // providers: [AddRecipeService]
//  encapsulation: ViewEncapsulation.Emulated // by default it ensures CSS can be applied to this module only
//  encapsulation: ViewEncapsulation.None // it ensures CSS can be applied globally
//  encapsulation: ViewEncapsulation.Native //similar to emulated uses shadow DOM not supported by all browsers

})
export class RecipesListComponent implements OnInit, OnDestroy {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];
  // recipes: Recipe[] = [
  //   new Recipe('Matar Paneer',
  //   'A tasty spicy common Indian dish that can be found in every restaurant in India.',
  //    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Matar-Paneer.JPG/800px-Matar-Paneer.JPG'),
  //   new Recipe('Dahi Lassi',
  //    'A delicious dairy product that can be addictive.',
  //    'https://parulkirecipes.com/wp-content/uploads/2016/07/lassi.jpg/')
  // ];

  // onRecipeAdded(recipeData: {recipeName: string, recipeDesc: string, recipeImagePath: string}) {
  //   console.log('Inside list', recipeData);
  //   this.recipes.push(new Recipe(recipeData.recipeName, recipeData.recipeDesc, recipeData.recipeImagePath));
  // }
constructor(private recipeService: AddRecipeService ) {

  // this.recipeService.emitter.subscribe(
  //   (status: string) => alert('message:'+ status )
  // );
 }

ngOnInit() {
  this.recipes = this.recipeService.getRecipe();
  console.log('this.recipe', this.recipes);

  this.recipeService.recipeChanged.subscribe((recipe: Recipe []) => {
   this.recipes = recipe;
      })

  this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
this.onSelectRecipe(recipe);
  })
}

deleteRecipe(i){
  console.log(i);
  this.recipes.splice(i, 1);
}

onSelectRecipe(recipe: Recipe) {
console.log('recipe:', recipe);
this.recipeWasSelected.emit(recipe);
}
ngOnDestroy() {

  console.log('ngOnDestroy Called!');
 }

}
