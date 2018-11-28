import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [


    new Recipe('A Test Recipe', 'This simply a tes', 'https://static.businessinsider.sg/2018/02/02/5a7dc169d03072af008b4bf2.png',
    
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),

    new Recipe('A Test Recipe two', 'This simply a tes', 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png',
    [
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ])
  ];

  constructor(private slsService:ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index]= newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

}
