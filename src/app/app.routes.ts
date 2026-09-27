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
    path: 'ai-chef',
    loadComponent: () =>
      import('./ai-chef/ai-chef').then(m => m.AiChef)
  }
];