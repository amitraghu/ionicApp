import { Ingredient } from './../shared/ingredients.model';


export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public Ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredient: Ingredient[]) {
this.name = name;
this.description = desc;
this.imagePath = imagePath;
this.Ingredients  = ingredient;
  }
}
