import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface RecipeCard {
  id: number;
  name: string;
  nativeName: string;
  description: string;
  state: string;
  region: string;
}

@Component({
  selector: 'app-recipes',
  imports: [CommonModule],
  
  templateUrl: './recipes.html',
  styleUrl: './recipes.css'
})
export class Recipes {

  state = '';

  recipes: RecipeCard[] = [];

  private apiUrl = 'http://localhost:8080/api/recipes';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {

    this.route.queryParams.subscribe(params => {

      this.state = params['state'] || '';

      this.loadRecipes();

    });

  }

  loadRecipes(): void {

    this.http.get<RecipeCard[]>(this.apiUrl).subscribe({

      next: (data) => {

        if (this.state) {

          this.recipes = data.filter(
            recipe =>
              recipe.state.toLowerCase() ===
              this.getStateName().toLowerCase()
          );

        } else {

          this.recipes = data;

        }

      },

      error: (error) => {

        console.error('Error loading recipes:', error);

        this.recipes = [];

      }

    });

  }

  getStateName(): string {

    const names: Record<string, string> = {

      'odisha': 'Odisha',
      'punjab': 'Punjab',
      'rajasthan': 'Rajasthan',
      'uttar-pradesh': 'Uttar Pradesh',
      'tamil-nadu': 'Tamil Nadu',
      'kerala': 'Kerala',
      'karnataka': 'Karnataka',
      'west-bengal': 'West Bengal',
      'bihar': 'Bihar',
      'jharkhand': 'Jharkhand',
      'maharashtra': 'Maharashtra',
      'gujarat': 'Gujarat',
      'goa': 'Goa',
      'assam': 'Assam',
      'sikkim': 'Sikkim',
      'nagaland': 'Nagaland',
      'arunachal-pradesh': 'Arunachal Pradesh',
      'mizoram': 'Mizoram',
      'tripura': 'Tripura',
      'madhya-pradesh': 'Madhya Pradesh',
      'chhattisgarh': 'Chhattisgarh'

    };

    return names[this.state] || 'India';

  }

}