import { Routes } from '@angular/router';
import { Explore } from './explore/explore';
import { States } from './states/states';
import { Recipes } from './recipes/recipes';
import { RecipeDetails } from './recipe-details/recipe-details';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'explore',
    pathMatch: 'full'
  },
  {
    path: 'explore',
    component: Explore
  },
  {
    path: 'states',
    component: States
  },
  {
    path: 'recipes',
    component: Recipes
  },
  {
    path: 'recipe-details',
    component: RecipeDetails
  }
];