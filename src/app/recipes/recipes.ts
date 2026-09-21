import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface RecipeCard {
  name: string;
  nativeName: string;
  description: string;
}

@Component({
  selector: 'app-recipes',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css'
})
export class Recipes {

  state = '';

  recipes: RecipeCard[] = [];

  private recipeData: Record<string, RecipeCard[]> = {

    'odisha': [
      {
        name: 'Dalma',
        nativeName: 'ଡାଲମା',
        description: 'A traditional Odia dish made with dal, vegetables and aromatic spices.'
      },
      {
        name: 'Pakhala Bhata',
        nativeName: 'ପଖାଳ ଭାତ',
        description: 'A traditional fermented rice dish enjoyed especially during the warm months.'
      },
      {
        name: 'Dahi Pakhala',
        nativeName: 'ଦହି ପଖାଳ',
        description: 'A refreshing version of Pakhala prepared with curd, rice and traditional seasonings.'
      }
    ],

    'punjab': [
      {
        name: 'Sarson da Saag',
        nativeName: 'ਸਰੋਂ ਦਾ ਸਾਗ',
        description: 'A traditional Punjabi preparation made with mustard greens and spices.'
      }
    ],

    'rajasthan': [
      {
        name: 'Dal Baati Churma',
        nativeName: 'दाल बाटी चूरमा',
        description: 'A famous Rajasthani combination of lentils, baked baati and sweet churma.'
      }
    ],

    'uttar-pradesh': [
      {
        name: 'Awadhi Biryani',
        nativeName: 'अवधी बिरयानी',
        description: 'A fragrant rice preparation associated with the rich culinary tradition of Awadh.'
      }
    ],

    'tamil-nadu': [
      {
        name: 'Pongal',
        nativeName: 'பொங்கல்',
        description: 'A traditional South Indian rice and lentil dish prepared with simple aromatic ingredients.'
      }
    ],

    'kerala': [
      {
        name: 'Avial',
        nativeName: 'അവിയൽ',
        description: 'A traditional Kerala vegetable preparation cooked with coconut and yogurt.'
      }
    ],

    'karnataka': [
      {
        name: 'Bisi Bele Bath',
        nativeName: 'ಬಿಸಿ ಬೇಳೆ ಬಾತ್',
        description: 'A comforting Karnataka dish combining rice, lentils, vegetables and spices.'
      }
    ],

    'west-bengal': [
      {
        name: 'Macher Jhol',
        nativeName: 'মাছের ঝোল',
        description: 'A traditional Bengali fish curry prepared with light spices and vegetables.'
      }
    ],

    'bihar': [
      {
        name: 'Litti Chokha',
        nativeName: 'लिट्टी चोखा',
        description: 'A popular Bihari dish made with roasted litti served with mashed vegetables.'
      }
    ],

    'jharkhand': [
      {
        name: 'Dhuska',
        nativeName: 'धुस्का',
        description: 'A traditional Jharkhand fried rice-and-lentil preparation.'
      }
    ],

    'maharashtra': [
      {
        name: 'Misal Pav',
        nativeName: 'मिसळ पाव',
        description: 'A popular Maharashtrian dish made with spicy sprouts, farsan and pav.'
      }
    ],

    'gujarat': [
      {
        name: 'Dhokla',
        nativeName: 'ઢોકળા',
        description: 'A soft and steamed Gujarati snack made from fermented batter.'
      }
    ],

    'goa': [
      {
        name: 'Goan Fish Curry',
        nativeName: 'गोवन फिश करी',
        description: 'A coastal Goan curry prepared with fish, coconut and aromatic spices.'
      }
    ],

    'assam': [
      {
        name: 'Masor Tenga',
        nativeName: 'মাছৰ টেঙা',
        description: 'A traditional Assamese light and tangy fish curry.'
      },
      {
        name: 'Khar',
        nativeName: 'খাৰ',
        description: 'A distinctive Assamese preparation known for its alkaline flavour.'
      }
    ],

    'sikkim': [
      {
        name: 'Momos',
        nativeName: 'मोमो',
        description: 'Steamed dumplings widely enjoyed as part of Sikkimese food culture.'
      }
    ],

    'nagaland': [
      {
        name: 'Smoked Pork with Bamboo Shoot',
        nativeName: 'बांस की कोंपल के साथ स्मोक्ड पोर्क',
        description: 'A traditional Naga preparation combining smoked meat with bamboo shoot.'
      }
    ],

    'arunachal-pradesh': [
      {
        name: 'Thukpa',
        nativeName: 'थुकपा',
        description: 'A warm noodle soup popular across the Himalayan food traditions of Arunachal Pradesh.'
      }
    ],

    'mizoram': [
      {
        name: 'Bai',
        nativeName: 'बाई',
        description: 'A traditional Mizo vegetable-based dish prepared with simple ingredients.'
      }
    ],

    'tripura': [
      {
        name: 'Mui Borok',
        nativeName: 'মুই বোরোক',
        description: 'A traditional Tripuri food style known for simple and locally sourced ingredients.'
      }
    ],

    'madhya-pradesh': [
      {
        name: 'Poha',
        nativeName: 'पोहा',
        description: 'A popular breakfast preparation made with flattened rice and aromatic seasonings.'
      }
    ],

    'chhattisgarh': [
      {
        name: 'Faraa',
        nativeName: 'फरा',
        description: 'A traditional Chhattisgarhi steamed rice preparation.'
      }
    ]

  };

  constructor(private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {

      this.state = params['state'] || '';

      this.recipes = this.recipeData[this.state] || [];

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