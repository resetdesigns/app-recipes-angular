import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  // set to private so this cannot be overwritten outside of the service
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty schnitzel for your enjoyment.',
      'https://1r6s7piqcip1uwgh2vlwrt15-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/TNWC-Article-Cover-Image.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Burger',
      'Juicy burger with all the fillings',
      'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
