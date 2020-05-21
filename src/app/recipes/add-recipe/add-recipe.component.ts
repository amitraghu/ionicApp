import { AddRecipeService } from 'src/app/services/add-recipe.service';
import { NgForm } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { Component, OnInit, Output, ViewChild, ElementRef, OnChanges,
  AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck, SimpleChange} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  // providers: [AddRecipeService]

})
export class AddRecipeComponent implements OnInit {

// OnChanges, DoCheck, AfterContentInit,  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
// @Output('alias') addRecipe = new EventEmitter<{recipeName: string,
//  recipeDesc: string,
//  recipeImagePath: string}>();
//  @Output() addRecipe = new EventEmitter<{recipeName: string, recipeDesc: string, recipeImagePath: string}>();
   newRecipe =  new Recipe('', '', '', []);
   @ViewChild('recipeName', {read: ElementRef, static: false }) recipeName: ElementRef;

onAddRecipe(recipeName: HTMLInputElement) {
  console.log('Inside on Add recipe', this.recipeName.nativeElement);

   // two way binding

  // this.addRecipe.emit({recipeName: this.newRecipe.name,
  //  recipeDesc: this.newRecipe.description,
  //   recipeImagePath: this.newRecipe.imagePath });



  // local reference

  // this.addRecipe.emit({recipeName: recipeName.value,
  // recipeDesc: this.newRecipe.description,
  // recipeImagePath: this.newRecipe.imagePath });


  // local reference with @viewchild decorator
  // this.addRecipe.emit({recipeName: this.recipeName.nativeElement.value,
  //   recipeDesc: this.newRecipe.description,
  //   recipeImagePath: this.newRecipe.imagePath });

  // using service
  this.serviceRecipe.onRecipeAdded({recipeName: this.recipeName.nativeElement.value,
    recipeDesc: this.newRecipe.description,
    recipeImagePath: this.newRecipe.imagePath });
    this.serviceRecipe.emitter.emit('Hello event emitted');
}
constructor( private serviceRecipe: AddRecipeService) { }

ngOnInit() {
console.log('ngOnInit Called!');

}

// ngAfterContentInit() {
//   console.log('ngAfterContentInit Called!');
// }

// ngAfterContentChecked() {
//   console.log('ngAfterContentChecked Called!');
// }

// ngAfterViewChecked() {
//   console.log('ngAfterViewChecked Called!');
// }

// ngDoCheck() {
//   console.log('ngDoCheck Called!');
// }

// ngAfterViewInit() {
//   console.log('ngAfterViewInit Called!');
// }

// ngOnChanges(changes: any){
//   console.log('ngOnChanges Called!');
//   console.log(changes);
// }

// ngOnDestroy() {

//   console.log('ngOnDestroy Called!');
//  }


}
