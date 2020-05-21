import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { AddRecipeService } from '../services/add-recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  // providers: [AddRecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {}

}
