// import { Ingredient } from './../shared/ingredients.model';
import { Recipe } from './../recipes/recipe.model';
import { Injectable, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable()
export class AddRecipeService implements OnInit{

  emitter = new EventEmitter<string>();

  recipeChanged = new EventEmitter<Recipe[]>();
  
  selectedRecipe = new EventEmitter<Recipe>();

  // recipes: Recipe[] = [
  //   new Recipe('Matar Paneer',
  //   'A tasty spicy common Indian dish that can be found in every restaurant in India.',
  //    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Matar-Paneer.JPG/800px-Matar-Paneer.JPG'),
  //   new Recipe('Dahi Lassi',
  //    'A delicious dairy product that can be addictive.',
  //    'https://parulkirecipes.com/wp-content/uploads/2016/07/lassi.jpg/')
  // ];

  private recipes: Recipe[] = [
    new Recipe('Matar Paneer',
    'A tasty spicy common Indian dish that can be found in every restaurant in India.',
     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Matar-Paneer.JPG/800px-Matar-Paneer.JPG',
     [new Ingredient('matar', 20), new Ingredient('paneer', 30)]),

    new Recipe('Dahi Lassi',
     'A delicious dairy product that can be addictive.',
     'https://parulkirecipes.com/wp-content/uploads/2016/07/lassi.jpg/',
     [new Ingredient('Dahi', 10), new Ingredient('sugar', 15)]),
  ];

  onRecipeAdded(recipeData: {recipeName: string, recipeDesc: string, recipeImagePath: string}) {
    console.log('Inside list', recipeData);
    this.recipes.push(new Recipe(recipeData.recipeName, recipeData.recipeDesc, recipeData.recipeImagePath,[]));
    console.log('Inside list this.recipes', this.recipes);
    this.logging.log();
this.recipeChanged.emit(this.recipes.slice());
  }

  getRecipe(){
    return this.recipes.slice();
  }

  //return this.recipes.splice() (to send copy of this array somewhere else if recipe variable is private)
  constructor(private logging: LoggingService)  { 

  }

  ngOnInit(){
  }
    
}
