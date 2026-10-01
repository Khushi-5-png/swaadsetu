import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'explore',
    pathMatch: 'full'
  },

  {
    path: 'explore',
    loadComponent: () =>
      import('./explore/explore').then(m => m.Explore)
  },

  {
    path: 'states',
    loadComponent: () =>
      import('./states/states').then(m => m.States)
  },

  {
    path: 'recipes',
    loadComponent: () =>
      import('./recipes/recipes').then(m => m.Recipes)
  },

  {
    path: 'recipe-details',
    loadComponent: () =>
      import('./recipe-details/recipe-details').then(m => m.RecipeDetails)
  },

  {
    path: 'ai-chef',
    loadComponent: () =>
      import('./ai-chef/ai-chef').then(m => m.AiChef)
  }

];