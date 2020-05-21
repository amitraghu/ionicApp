import { ShoppingListService } from './services/shopping-list.service';
import { AddRecipeService } from 'src/app/services/add-recipe.service';
import {  FirstDirective } from './directive/first.directive';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {HeaderComponent} from './header/header.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RendererDirective } from './directive/renderer.directive';
import { UnlessDirective } from './directive/unless.directive';

// import { LoggingService } from './services/logging.service';

const appRoutes: Routes = [
{path: 'recipes', component: RecipesComponent},
{path: 'recipes/:name', component: RecipeItemComponent},
{path: 'shoppingList', component: ShoppingListComponent}
]

@NgModule({
  declarations: [AppComponent,
     HeaderComponent,
     RecipesComponent,
      RecipesListComponent,
      RecipeItemComponent,
       ShoppingEditComponent,
       ShoppingListComponent ,
       AddRecipeComponent,
      RecipeDetailComponent,
    FirstDirective,
    RendererDirective,
    UnlessDirective,
  HeaderComponent],
  entryComponents: [],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    ShoppingListService,
    AddRecipeService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
