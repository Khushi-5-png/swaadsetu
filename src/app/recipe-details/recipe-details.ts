import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Recipe {
  name: string;
  nativeName: string;
  state: string;
  language: string;
  category: string;
  type: string;
  time: string;
  serves: number;
  difficulty: string;
  description: string;
  about: string;
  story: string;
  ingredients: string[];
  masala: string[];
  preparation: string[];
  serving: string;
  chefTip: string;
  nativeCaption: string;
  englishCaption: string;
}

@Component({
  selector: 'app-recipe-details',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css'
})
export class RecipeDetails {

  servingOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  selectedServings: number = 4;

  recipe = '';

  recipeData!: Recipe;


  // =========================================================
  // SCALE INGREDIENT QUANTITY
  // =========================================================

  getScaledIngredient(ingredient: string): string {

    if (!this.recipeData) {
      return ingredient;
    }

    const baseServings = this.recipeData.serves;

    const multiplier = this.selectedServings / baseServings;

    /*
     * Matches ingredients such as:
     * Toor dal – 1 cup
     * Potato – 2
     * Curd – ½ cup
     * Rice – 1/2 cup
     */

    const match = ingredient.match(
      /^(.+?)\s*[–-]\s*(\d+(?:\.\d+)?|\d+\/\d+|½|¼|¾|⅓|⅔)(.*)$/
    );

    if (!match) {
      return ingredient;
    }

    const name = match[1];

    const quantity = match[2];

    const unit = match[3];

    let numericQuantity: number;

    switch (quantity) {

      case '½':
        numericQuantity = 0.5;
        break;

      case '¼':
        numericQuantity = 0.25;
        break;

      case '¾':
        numericQuantity = 0.75;
        break;

      case '⅓':
        numericQuantity = 1 / 3;
        break;

      case '⅔':
        numericQuantity = 2 / 3;
        break;

      default:

        if (quantity.includes('/')) {

          const parts = quantity.split('/');

          numericQuantity =
            Number(parts[0]) / Number(parts[1]);

        } else {

          numericQuantity = Number(quantity);

        }

        break;
    }

    const scaledQuantity =
      numericQuantity * multiplier;

    return `${name} – ${Number(
      scaledQuantity.toFixed(2)
    )}${unit}`;
  }


  // =========================================================
  // ADJUST COOKING TIME BASED ON SERVINGS
  // =========================================================

  getAdjustedTime(time: string): string {

    if (!this.recipeData) {
      return time;
    }

    const match = time.match(/(\d+)/);

    if (!match) {
      return time;
    }

    const baseMinutes = Number(match[1]);

    const baseServings = this.recipeData.serves;

    const difference =
      this.selectedServings - baseServings;

    /*
     * Cooking time does not increase exactly
     * in the same ratio as ingredients.
     *
     * We approximately add 5 minutes for every
     * serving above the original serving size.
     */

    const adjustedMinutes = Math.max(
      10,
      baseMinutes + difference * 5
    );

    return `${adjustedMinutes} minutes`;
  }


  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {

      this.recipe = params['recipe'] || '';

      switch (this.recipe) {

        case 'Dalma':
          this.recipeData = this.dalmaData;
          break;

        case 'Pakhala Bhata':
          this.recipeData = this.pakhalaData;
          break;

        case 'Dahi Pakhala':
          this.recipeData = this.dahiPakhalaData;
          break;

        case 'Sarson da Saag':
          this.recipeData = this.sarsonSaagData;
          break;

        case 'Dal Baati Churma':
          this.recipeData = this.dalBaatiChurmaData;
          break;

        case 'Awadhi Biryani':
          this.recipeData = this.awadhiBiryaniData;
          break;

        case 'Macher Jhol':
          this.recipeData = this.macherJholData;
          break;

        case 'Litti Chokha':
          this.recipeData = this.littiChokhaData;
          break;

        case 'Dhuska':
          this.recipeData = this.dhuskaData;
          break;

        case 'Pongal':
          this.recipeData = this.pongalData;
          break;

        case 'Avial':
          this.recipeData = this.avialData;
          break;

        case 'Bisi Bele Bath':
          this.recipeData = this.bisiBeleBathData;
          break;

        case 'Misal Pav':
          this.recipeData = this.misalPavData;
          break;

        case 'Dhokla':
          this.recipeData = this.dhoklaData;
          break;

        case 'Goan Fish Curry':
          this.recipeData = this.goanFishCurryData;
          break;

        case 'Masor Tenga':
          this.recipeData = this.masorTengaData;
          break;

        case 'Khar':
          this.recipeData = this.kharData;
          break;

        case 'Momos':
          this.recipeData = this.momosData;
          break;

        case 'Smoked Pork with Bamboo Shoot':
          this.recipeData = this.smokedPorkData;
          break;

        case 'Thukpa':
          this.recipeData = this.thukpaData;
          break;

        case 'Bai':
          this.recipeData = this.baiData;
          break;

        case 'Mui Borok':
          this.recipeData = this.muiBorokData;
          break;

        case 'Poha':
          this.recipeData = this.pohaData;
          break;
          
        case 'Machha Besara':
  this.recipeData = this.machhaBesaraData;
  break;
  
        case 'Faraa':
          this.recipeData = this.faraaData;
          break;

        default:
          this.recipeData = this.dalmaData;
          break;
      }

    });
  }


  // =========================================================
  // ODISHA
  // =========================================================

  dalmaData: Recipe = {

    name: 'Dalma',
    nativeName: 'ଡାଲମା',
    state: 'Odisha',
    language: 'Odia',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '45 minutes',
    serves: 4,
    difficulty: 'Easy',

    description:
      'A traditional Odia dish made with lentils, vegetables and aromatic spices.',

    about:
      'Dalma is one of Odisha’s most comforting traditional dishes. It combines dal with vegetables and roasted spices to create a wholesome and naturally flavorful meal.',

    story:
      'Dalma has long been part of everyday Odia cooking. Its simple preparation reflects the region’s preference for nutritious food made with seasonal vegetables and familiar spices.',

    ingredients: [
      'Toor dal – 1 cup',
      'Raw papaya – 1 cup',
      'Potato – 1',
      'Raw banana – 1',
      'Pumpkin – 1 cup',
      'Tomato – 1',
      'Drumstick – 1'
    ],

    masala: [
      'Cumin seeds',
      'Dry red chillies',
      'Turmeric',
      'Ginger',
      'Salt',
      'Ghee'
    ],

    preparation: [
      'Wash and pressure cook the dal with turmeric.',
      'Add chopped vegetables and cook until tender.',
      'Dry roast cumin seeds and dry red chillies.',
      'Grind the roasted spices lightly.',
      'Add the roasted spice mixture to the cooked dal and vegetables.',
      'Finish with a small amount of ghee and serve hot.'
    ],

    serving:
      'Serve hot with steamed rice and a drizzle of ghee.',

    chefTip:
      'Use seasonal vegetables for a more authentic traditional flavour.',

    nativeCaption:
      'ଡାଲମା — ସରଳତାରେ ଲୁଚିଥିବା ଓଡ଼ିଶାର ଅସଲି ସ୍ୱାଦ।',

    englishCaption:
      'Dalma — the true taste of Odisha hidden in simplicity.'
  };


  pakhalaData: Recipe = {

    name: 'Pakhala Bhata',
    nativeName: 'ପଖାଳ ଭାତ',
    state: 'Odisha',
    language: 'Odia',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '15 minutes',
    serves: 2,
    difficulty: 'Easy',

    description:
      'Fermented rice soaked in water and traditionally enjoyed with curd, salt and seasonal accompaniments.',

    about:
      'Pakhala Bhata is one of Odisha’s most loved traditional summer foods. Its cooling and refreshing nature makes it especially popular during hot weather.',

    story:
      'For generations, pakhala has been a simple everyday meal in Odia households, valued for its refreshing character and uncomplicated preparation.',

    ingredients: [
      'Cooked rice – 2 cups',
      'Water – 2 cups',
      'Curd – ½ cup',
      'Salt – to taste',
      'Green chilli – 2',
      'Lemon – 1'
    ],

    masala: [
      'Roasted cumin powder',
      'Salt',
      'Green chilli',
      'Fresh coriander'
    ],

    preparation: [
      'Place cooked rice in a bowl.',
      'Add water and allow the rice to soak.',
      'Add curd and salt.',
      'Mix gently.',
      'Add roasted cumin powder and green chilli.',
      'Serve chilled or at room temperature.'
    ],

    serving:
      'Traditionally served with fried vegetables, saga bhaja, fish or badi.',

    chefTip:
      'Let the rice ferment naturally for a richer traditional flavour.',

    nativeCaption:
      'ପଖାଳ ଭାତ — ଖରାଦିନରେ ଓଡ଼ିଶାର ଥଣ୍ଡା ସୁଖ।',

    englishCaption:
      'Pakhala Bhata — Odisha’s refreshing comfort on a summer day.'
  };


  dahiPakhalaData: Recipe = {

    name: 'Dahi Pakhala',
    nativeName: 'ଦହି ପଖାଳ',
    state: 'Odisha',
    language: 'Odia',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '15 minutes',
    serves: 2,
    difficulty: 'Easy',

    description:
      'A cooling variation of pakhala made with rice, water and creamy curd.',

    about:
      'Dahi Pakhala combines fermented rice with curd to create a cooling and refreshing traditional Odia meal.',

    story:
      'Dahi pakhala is especially associated with warm days in Odisha, when simple meals provide both comfort and refreshment.',

    ingredients: [
      'Cooked rice – 2 cups',
      'Curd – 1 cup',
      'Water – 1 cup',
      'Salt – to taste',
      'Green chilli – 2'
    ],

    masala: [
      'Roasted cumin',
      'Green chilli',
      'Fresh coriander'
    ],

    preparation: [
      'Place cooked rice in a bowl.',
      'Add water and curd.',
      'Mix gently until creamy.',
      'Add salt and roasted cumin.',
      'Garnish with coriander and green chilli.',
      'Serve cool.'
    ],

    serving:
      'Serve with fried vegetables, saga bhaja or traditional Odia sides.',

    chefTip:
      'Use fresh homemade curd for the best creamy texture.',

    nativeCaption:
      'ଦହି ପଖାଳ — ଓଡ଼ିଆ ଘରର ସରଳତାରେ ମିଳେ ଶୀତଳ ସନ୍ତୋଷ।',

    englishCaption:
      'Dahi Pakhala — cool comfort found in the simplicity of an Odia home.'
  };


  // =========================================================
  // PUNJAB
  // =========================================================

  sarsonSaagData: Recipe = {

    name: 'Sarson da Saag',
    nativeName: 'ਸਰੋਂ ਦਾ ਸਾਗ',
    state: 'Punjab',
    language: 'Punjabi',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '60 minutes',
    serves: 4,
    difficulty: 'Medium',

    description:
      'A classic Punjabi preparation made with mustard greens and other leafy greens.',

    about:
      'Sarson da Saag is a beloved Punjabi winter dish traditionally served with makki di roti.',

    story:
      'The dish is closely connected with Punjab’s winter harvest and agricultural food traditions.',

    ingredients: [
      'Mustard greens – 500 g',
      'Spinach – 200 g',
      'Bathua – 100 g',
      'Onion – 1',
      'Tomato – 2',
      'Ginger – 1 inch'
    ],

    masala: [
      'Green chilli',
      'Red chilli powder',
      'Turmeric',
      'Salt',
      'Ghee'
    ],

    preparation: [
      'Wash and chop all the greens.',
      'Cook the greens until soft.',
      'Blend them into a coarse paste.',
      'Prepare a tempering with onion, tomato and spices.',
      'Add the greens and simmer.',
      'Finish with ghee.'
    ],

    serving:
      'Serve hot with makki di roti and a spoonful of white butter.',

    chefTip:
      'Slow cooking helps develop the deep earthy flavour of the greens.',

    nativeCaption:
      'ਸਰੋਂ ਦਾ ਸਾਗ — ਪੰਜਾਬ ਦੀ ਮਿੱਟੀ ਦੀ ਖੁਸ਼ਬੂ, ਹਰ ਨਿਵਾਲੇ ਵਿੱਚ।',

    englishCaption:
      'Sarson da Saag — the fragrance of Punjab’s soil in every bite.'
  };


  // =========================================================
  // RAJASTHAN
  // =========================================================

  dalBaatiChurmaData: Recipe = {

    name: 'Dal Baati Churma',
    nativeName: 'दाल बाटी चूरमा',
    state: 'Rajasthan',
    language: 'Hindi',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '75 minutes',
    serves: 4,
    difficulty: 'Medium',

    description:
      'A famous Rajasthani combination of dal, baked baati and sweet churma.',

    about:
      'Dal Baati Churma is one of Rajasthan’s most recognizable traditional meals.',

    story:
      'The dish developed around the region’s dry climate and ingredients that could be stored and cooked efficiently.',

    ingredients: [
      'Wheat flour – 2 cups',
      'Toor dal – ½ cup',
      'Moong dal – ½ cup',
      'Ghee – 4 tbsp',
      'Jaggery – ½ cup'
    ],

    masala: [
      'Cumin',
      'Red chilli',
      'Turmeric',
      'Coriander powder',
      'Salt'
    ],

    preparation: [
      'Prepare a firm dough with wheat flour.',
      'Shape the dough into round baatis.',
      'Bake or roast until golden.',
      'Cook the mixed dals until soft.',
      'Prepare a spiced tempering for the dal.',
      'Crush baati with ghee and serve with dal and churma.'
    ],

    serving:
      'Serve hot with generous amounts of ghee, dal and sweet churma.',

    chefTip:
      'Traditional baati develops the best flavour when cooked slowly.',

    nativeCaption:
      'दाल बाटी चूरमा — राजस्थान की शान, थाली में सजा स्वाद।',

    englishCaption:
      'Dal Baati Churma — the pride of Rajasthan served on a plate.'
  };


  // =========================================================
  // UTTAR PRADESH
  // =========================================================

  awadhiBiryaniData: Recipe = {

    name: 'Awadhi Biryani',
    nativeName: 'अवधी बिरयानी',
    state: 'Uttar Pradesh',
    language: 'Hindi',
    category: 'Traditional',
    type: 'Non-Vegetarian',
    time: '90 minutes',
    serves: 4,
    difficulty: 'Medium',

    description:
      'Fragrant layered rice inspired by the refined culinary traditions of Awadh.',

    about:
      'Awadhi cuisine is known for delicate spices, slow cooking and aromatic dishes.',

    story:
      'The culinary traditions of Awadh developed a distinctive style of cooking that emphasizes fragrance and gentle seasoning.',

    ingredients: [
      'Basmati rice – 2 cups',
      'Chicken – 500 g',
      'Onion – 2',
      'Yogurt – ½ cup',
      'Milk – ½ cup'
    ],

    masala: [
      'Cardamom',
      'Cinnamon',
      'Cloves',
      'Bay leaf',
      'Saffron',
      'Garam masala'
    ],

    preparation: [
      'Marinate the chicken with yogurt and spices.',
      'Cook the basmati rice until partially done.',
      'Prepare the chicken masala.',
      'Layer rice over the chicken.',
      'Add saffron milk.',
      'Cover and cook on low heat.'
    ],

    serving:
      'Serve with raita and a fresh salad.',

    chefTip:
      'Keep the final cooking temperature low to preserve the delicate aroma.',

    nativeCaption:
      'अवधी बिरयानी — नफ़ासत और खुशबू का स्वाद, हर परत में।',

    englishCaption:
      'Awadhi Biryani — elegance and fragrance layered into every bite.'
  };


  // =========================================================
  // WEST BENGAL
  // =========================================================

  macherJholData: Recipe = {

    name: 'Macher Jhol',
    nativeName: 'মাছের ঝোল',
    state: 'West Bengal',
    language: 'Bengali',
    category: 'Traditional',
    type: 'Non-Vegetarian',
    time: '40 minutes',
    serves: 4,
    difficulty: 'Easy',

    description:
      'A light Bengali fish curry prepared with potatoes, tomatoes and fragrant spices.',

    about:
      'Macher Jhol is a familiar everyday Bengali fish preparation appreciated for its light and comforting character.',

    story:
      'Fish has a central place in Bengali food culture, and simple jhol preparations are common across Bengali households.',

    ingredients: [
      'Rohu fish – 500 g',
      'Potato – 2',
      'Tomato – 2',
      'Mustard oil – 3 tbsp',
      'Green chilli – 2'
    ],

    masala: [
      'Turmeric',
      'Cumin',
      'Coriander',
      'Red chilli',
      'Salt'
    ],

    preparation: [
      'Marinate the fish with turmeric and salt.',
      'Lightly fry the fish.',
      'Fry the potatoes.',
      'Prepare the spice base with tomatoes.',
      'Add water and simmer.',
      'Add the fish and cook gently.'
    ],

    serving:
      'Serve hot with steamed rice.',

    chefTip:
      'Mustard oil adds the characteristic Bengali aroma to the dish.',

    nativeCaption:
      'মাছের ঝোল — বাঙালির পাতে ঘরের চেনা স্বাদ।',

    englishCaption:
      'Macher Jhol — the familiar taste of home on a Bengali plate.'
  };


  // =========================================================
  // BIHAR
  // =========================================================

  littiChokhaData: Recipe = {

    name: 'Litti Chokha',
    nativeName: 'लिट्टी चोखा',
    state: 'Bihar',
    language: 'Hindi',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '60 minutes',
    serves: 4,
    difficulty: 'Medium',

    description:
      'Roasted wheat balls filled with spiced sattu and served with mashed vegetables.',

    about:
      'Litti Chokha is a famous traditional food associated with Bihar and the surrounding region.',

    story:
      'Its simple ingredients and roasting method made litti a practical and satisfying food for rural communities.',

    ingredients: [
      'Wheat flour – 2 cups',
      'Sattu – 1 cup',
      'Potato – 2',
      'Tomato – 2',
      'Brinjal – 1'
    ],

    masala: [
      'Ajwain',
      'Cumin',
      'Garlic',
      'Green chilli',
      'Mustard oil',
      'Salt'
    ],

    preparation: [
      'Prepare a wheat dough.',
      'Mix sattu with spices and mustard oil.',
      'Stuff the dough balls with the sattu mixture.',
      'Roast until cooked and lightly charred.',
      'Prepare mashed potato, tomato and brinjal chokha.',
      'Serve with ghee.'
    ],

    serving:
      'Serve hot with chokha and melted ghee.',

    chefTip:
      'A light smoky roast gives litti its characteristic flavour.',

    nativeCaption:
      'लिट्टी चोखा — मिट्टी की खुशबू और बिहार की सादगी, एक ही थाली में।',

    englishCaption:
      'Litti Chokha — the earthy aroma and simplicity of Bihar on one plate.'
  };


  // =========================================================
  // JHARKHAND
  // =========================================================

  dhuskaData: Recipe = {

    name: 'Dhuska',
    nativeName: 'धुस्का',
    state: 'Jharkhand',
    language: 'Hindi',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '40 minutes',
    serves: 4,
    difficulty: 'Easy',

    description:
      'A traditional crispy preparation made from fermented rice and lentil batter.',

    about:
      'Dhuska is a popular traditional food of Jharkhand made from rice and lentils.',

    story:
      'The dish reflects Jharkhand’s food traditions built around locally available grains and pulses.',

    ingredients: [
      'Rice – 1 cup',
      'Chana dal – ½ cup',
      'Potato – 2',
      'Green chilli – 2'
    ],

    masala: [
      'Cumin',
      'Turmeric',
      'Green chilli',
      'Salt'
    ],

    preparation: [
      'Soak rice and dal.',
      'Grind them into a smooth batter.',
      'Add spices and allow the batter to rest.',
      'Heat oil in a pan.',
      'Pour small portions of batter.',
      'Fry until golden and crisp.'
    ],

    serving:
      'Serve with potato curry or spicy chutney.',

    chefTip:
      'Allowing the batter to rest improves its texture.',

    nativeCaption:
      'धुस्का — झारखंड की देसी रसोई का कुरकुरा और अपनापन भरा स्वाद।',

    englishCaption:
      'Dhuska — the crisp, homely taste of Jharkhand’s traditional kitchen.'
  };


  // =========================================================
  // TAMIL NADU
  // =========================================================

  pongalData: Recipe = {

    name: 'Pongal',
    nativeName: 'பொங்கல்',
    state: 'Tamil Nadu',
    language: 'Tamil',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '35 minutes',
    serves: 4,
    difficulty: 'Easy',

    description:
      'A comforting rice and lentil dish seasoned with ghee, pepper and cumin.',

    about:
      'Pongal is one of Tamil Nadu’s most familiar traditional preparations and is closely associated with the harvest festival of the same name.',

    story:
      'The dish represents abundance, gratitude and the importance of rice in Tamil food culture.',

    ingredients: [
      'Rice – 1 cup',
      'Moong dal – ½ cup',
      'Ghee – 3 tbsp',
      'Cashews – 10',
      'Ginger – 1 inch'
    ],

    masala: [
      'Black pepper',
      'Cumin',
      'Curry leaves',
      'Ginger',
      'Salt'
    ],

    preparation: [
      'Wash the rice and dal.',
      'Cook them together until soft.',
      'Prepare a ghee tempering.',
      'Add pepper, cumin, ginger and curry leaves.',
      'Mix the tempering into the cooked rice and dal.',
      'Finish with roasted cashews.'
    ],

    serving:
      'Serve warm with coconut chutney or sambar.',

    chefTip:
      'Use generous ghee for the traditional aroma and creamy texture.',

    nativeCaption:
      'பொங்கல் — பாரம்பரியத்தின் மணம் கலந்த இனிய தொடக்கம்.',

    englishCaption:
      'Pongal — a beautiful beginning filled with the aroma of tradition.'
  };


  // =========================================================
  // KERALA
  // =========================================================

  avialData: Recipe = {

    name: 'Avial',
    nativeName: 'അവിയൽ',
    state: 'Kerala',
    language: 'Malayalam',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '40 minutes',
    serves: 4,
    difficulty: 'Easy',

    description:
      'A traditional Kerala vegetable preparation made with coconut and yogurt.',

    about:
      'Avial combines several vegetables with coconut, green chilli and yogurt to create a balanced traditional dish.',

    story:
      'Avial is closely associated with Kerala’s festive meals and the elaborate Sadya tradition.',

    ingredients: [
      'Mixed vegetables – 4 cups',
      'Grated coconut – 1 cup',
      'Yogurt – ½ cup',
      'Green chilli – 3',
      'Coconut oil – 1 tbsp'
    ],

    masala: [
      'Cumin',
      'Green chilli',
      'Curry leaves',
      'Salt'
    ],

    preparation: [
      'Cut vegetables into long pieces.',
      'Cook them with minimal water.',
      'Grind coconut, cumin and green chilli.',
      'Mix the coconut paste with the vegetables.',
      'Add yogurt after reducing the heat.',
      'Finish with coconut oil and curry leaves.'
    ],

    serving:
      'Serve as part of a traditional Kerala Sadya with rice.',

    chefTip:
      'Do not overcook the vegetables; they should retain their shape.',

    nativeCaption:
      'അവിയൽ — നാടൻ രുചിയുടെ ലാളിത്യവും നിറവും ഒരുമിച്ച്.',

    englishCaption:
      'Avial — the simplicity and richness of Kerala’s traditional flavours together.'
  };


  // =========================================================
  // KARNATAKA
  // =========================================================

  bisiBeleBathData: Recipe = {

    name: 'Bisi Bele Bath',
    nativeName: 'ಬಿಸಿ ಬೇಳೆ ಬಾತ್',
    state: 'Karnataka',
    language: 'Kannada',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '50 minutes',
    serves: 4,
    difficulty: 'Medium',

    description:
      'A warm rice and lentil dish cooked with vegetables and aromatic spices.',

    about:
      'Bisi Bele Bath is a classic Karnataka dish combining rice, lentils, vegetables and a distinctive spice blend.',

    story:
      'The dish is a staple of Karnataka home cooking and is known for its rich balance of spice, tang and warmth.',

    ingredients: [
      'Rice – 1 cup',
      'Toor dal – ½ cup',
      'Mixed vegetables – 2 cups',
      'Tamarind – small lemon-sized piece',
      'Peanuts – 2 tbsp'
    ],

    masala: [
      'Coriander',
      'Cumin',
      'Cloves',
      'Cinnamon',
      'Dry red chilli'
    ],

    preparation: [
      'Cook rice and dal together.',
      'Cook the vegetables separately.',
      'Prepare the spice mixture.',
      'Combine rice, dal and vegetables.',
      'Add tamarind and spice mixture.',
      'Simmer until thick and aromatic.'
    ],

    serving:
      'Serve hot with ghee, boondi or papad.',

    chefTip:
      'Allow the dish to rest for a few minutes before serving.',

    nativeCaption:
      'ಬಿಸಿ ಬೇಳೆ ಬಾತ್ — ಕರ್ನಾಟಕದ ಮನದಾಳದ ಉಷ್ಣತೆ, ಒಂದು ತಟ್ಟೆಯಲ್ಲಿ.',

    englishCaption:
      'Bisi Bele Bath — the warmth of Karnataka’s heart in a single plate.'
  };


  // =========================================================
  // MAHARASHTRA
  // =========================================================

  misalPavData: Recipe = {

    name: 'Misal Pav',
    nativeName: 'मिसळ पाव',
    state: 'Maharashtra',
    language: 'Marathi',
    category: 'Street Food',
    type: 'Vegetarian',
    time: '45 minutes',
    serves: 4,
    difficulty: 'Medium',

    description:
      'A spicy sprouted-lentil preparation topped with farsan and served with pav.',

    about:
      'Misal Pav is one of Maharashtra’s most popular spicy and filling foods.',

    story:
      'Different regions of Maharashtra have developed their own variations of misal, each with a distinctive level of spice and flavour.',

    ingredients: [
      'Mixed sprouts – 2 cups',
      'Onion – 1',
      'Tomato – 2',
      'Potato – 1',
      'Farsan – 1 cup',
      'Pav – 8'
    ],

    masala: [
      'Goda masala',
      'Red chilli powder',
      'Cumin',
      'Turmeric',
      'Ginger-garlic',
      'Salt'
    ],

    preparation: [
      'Cook the mixed sprouts until tender.',
      'Prepare a spicy onion and tomato base.',
      'Add the cooked sprouts.',
      'Simmer until the curry develops flavour.',
      'Top with farsan and chopped onion.',
      'Serve with toasted pav.'
    ],

    serving:
      'Serve hot with pav, lemon and chopped onion.',

    chefTip:
      'Adjust the amount of spicy tari according to your preference.',

    nativeCaption:
      'मिसळ पाव — तिखटपणातही महाराष्ट्राची खास ओळख.',

    englishCaption:
      'Misal Pav — Maharashtra’s distinctive character in every spicy bite.'
  };


  // =========================================================
  // GUJARAT
  // =========================================================

  dhoklaData: Recipe = {

    name: 'Dhokla',
    nativeName: 'ઢોકળા',
    state: 'Gujarat',
    language: 'Gujarati',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '35 minutes',
    serves: 4,
    difficulty: 'Easy',

    description:
      'A soft steamed Gujarati preparation made from fermented gram flour batter.',

    about:
      'Dhokla is a popular Gujarati snack known for its soft texture and light savoury flavour.',

    story:
      'Steamed snack traditions are an important part of Gujarati food culture, and dhokla is enjoyed across the state.',

    ingredients: [
      'Besan – 2 cups',
      'Curd – ½ cup',
      'Water – as required',
      'Sugar – 1 tsp',
      'Lemon juice – 1 tbsp'
    ],

    masala: [
      'Mustard seeds',
      'Sesame seeds',
      'Green chilli',
      'Curry leaves',
      'Salt'
    ],

    preparation: [
      'Prepare a smooth besan batter.',
      'Allow it to rest.',
      'Add the leavening ingredients.',
      'Steam until fluffy.',
      'Prepare a mustard and sesame tempering.',
      'Pour the tempering over the dhokla.'
    ],

    serving:
      'Serve with green chutney and sweet tamarind chutney.',

    chefTip:
      'Do not over-steam the batter, as it can make the dhokla dense.',

    nativeCaption:
      'ઢોકળા — ગુજરાતની નરમાઈ, સાદગી અને સ્વાદનો સુંદર સંગમ.',

    englishCaption:
      'Dhokla — a beautiful blend of Gujarat’s softness, simplicity and flavour.'
  };


  // =========================================================
  // GOA
  // =========================================================

  goanFishCurryData: Recipe = {

    name: 'Goan Fish Curry',
    nativeName: 'आंबट तिखट गोवन फिश करी',
    state: 'Goa',
    language: 'Konkani',
    category: 'Coastal',
    type: 'Non-Vegetarian',
    time: '40 minutes',
    serves: 4,
    difficulty: 'Medium',

    description:
      'A coastal fish curry made with coconut, spices and a characteristic tang.',

    about:
      'Goan fish curry reflects Goa’s coastal food culture, combining seafood with coconut and tangy local flavours.',

    story:
      'The cuisine of Goa is deeply connected with its coastline, tropical ingredients and distinctive spice traditions.',

    ingredients: [
      'Fish – 500 g',
      'Grated coconut – 1 cup',
      'Tamarind – small amount',
      'Onion – 1',
      'Tomato – 1'
    ],

    masala: [
      'Red chillies',
      'Coriander',
      'Cumin',
      'Turmeric',
      'Garlic'
    ],

    preparation: [
      'Marinate the fish lightly with salt and turmeric.',
      'Grind coconut and spices.',
      'Cook the masala with onion and tomato.',
      'Add water and tamarind.',
      'Place the fish into the curry.',
      'Simmer gently until cooked.'
    ],

    serving:
      'Serve with steamed rice or traditional Goan rice.',

    chefTip:
      'Balance the sourness carefully so it complements rather than overpowers the fish.',

    nativeCaption:
      'गोवन फिश करी — समुद्राच्या चवीत मिसळलेली गोव्याची उबदार ओळख.',

    englishCaption:
      'Goan Fish Curry — Goa’s warm identity blended with the flavour of the sea.'
  };


  // =========================================================
  // ASSAM
  // =========================================================

  masorTengaData: Recipe = {

    name: 'Masor Tenga',
    nativeName: 'মাছৰ টেঙা',
    state: 'Assam',
    language: 'Assamese',
    category: 'Traditional',
    type: 'Non-Vegetarian',
    time: '40 minutes',
    serves: 4,
    difficulty: 'Easy',

    description:
      'A light and refreshing Assamese fish curry with a naturally tangy flavour.',

    about:
      'Masor Tenga is one of Assam’s signature fish preparations, known for its light texture and refreshing sourness.',

    story:
      'The dish reflects Assam’s preference for delicate cooking and naturally sour ingredients.',

    ingredients: [
      'Fish – 500 g',
      'Tomato – 2',
      'Potato – 1',
      'Lemon – 1',
      'Mustard oil – 2 tbsp'
    ],

    masala: [
      'Turmeric',
      'Fenugreek seeds',
      'Green chilli',
      'Salt'
    ],

    preparation: [
      'Marinate the fish with turmeric and salt.',
      'Lightly fry the fish.',
      'Prepare a tomato-based broth.',
      'Add water and simmer.',
      'Add the fish.',
      'Finish with lemon juice.'
    ],

    serving:
      'Serve hot with steamed rice.',

    chefTip:
      'Add the souring ingredient gradually to maintain a balanced flavour.',

    nativeCaption:
      'মাছৰ টেঙা — অসমৰ সৰল ৰন্ধনশৈলীত লুকাই থকা সতেজ সোৱাদ।',

    englishCaption:
      'Masor Tenga — a refreshing flavour hidden in Assam’s simple cooking tradition.'
  };


  kharData: Recipe = {

    name: 'Khar',
    nativeName: 'খাৰ',
    state: 'Assam',
    language: 'Assamese',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '35 minutes',
    serves: 4,
    difficulty: 'Easy',

    description:
      'A distinctive Assamese preparation traditionally made using alkaline ingredients.',

    about:
      'Khar is a characteristic part of Assamese cuisine and is traditionally enjoyed as part of a larger meal.',

    story:
      'The preparation represents Assam’s unique culinary use of local ingredients and traditional alkaline cooking techniques.',

    ingredients: [
      'Raw papaya – 2 cups',
      'Khar solution – as required',
      'Potato – 1',
      'Green chilli – 2'
    ],

    masala: [
      'Mustard oil',
      'Green chilli',
      'Salt'
    ],

    preparation: [
      'Cut the vegetables into small pieces.',
      'Cook them until tender.',
      'Add the khar solution carefully.',
      'Simmer gently.',
      'Add green chilli and salt.',
      'Finish with a small amount of mustard oil.'
    ],

    serving:
      'Serve with steamed rice as part of a traditional Assamese meal.',

    chefTip:
      'Use the alkaline ingredient carefully to maintain the delicate flavour.',

    nativeCaption:
      'খাৰ — অসমৰ খাদ্য পৰম্পৰাৰ এক সুকীয়া সৰলতা।',

    englishCaption:
      'Khar — a distinctive simplicity rooted in Assam’s food tradition.'
  };


  // =========================================================
  // SIKKIM
  // =========================================================

  momosData: Recipe = {

    name: 'Momos',
    nativeName: 'मोमो',
    state: 'Sikkim',
    language: 'Nepali',
    category: 'Himalayan',
    type: 'Vegetarian',
    time: '50 minutes',
    serves: 4,
    difficulty: 'Medium',

    description:
      'Steamed Himalayan dumplings filled with vegetables and aromatic seasoning.',

    about:
      'Momos are deeply popular across the Himalayan region and are an important part of Sikkim’s food culture.',

    story:
      'The dish reflects the influence of Himalayan and Tibetan food traditions in Sikkim.',

    ingredients: [
      'Refined flour – 2 cups',
      'Cabbage – 1 cup',
      'Carrot – ½ cup',
      'Onion – 1',
      'Spring onion – ½ cup'
    ],

    masala: [
      'Ginger',
      'Garlic',
      'Black pepper',
      'Salt',
      'Soy sauce'
    ],

    preparation: [
      'Prepare a soft dough with flour.',
      'Chop and season the vegetables.',
      'Roll small dough circles.',
      'Fill them with the vegetable mixture.',
      'Shape the dumplings.',
      'Steam until cooked.'
    ],

    serving:
      'Serve hot with spicy tomato chutney.',

    chefTip:
      'Keep the dough thin but strong enough to hold the filling.',

    nativeCaption:
      'मोमो — सिक्किम की पहाड़ी हवा जैसा सुकून, हर निवाले में।',

    englishCaption:
      'Momos — the comforting calm of Sikkim’s mountain air in every bite.'
  };


  // =========================================================
  // NAGALAND
  // =========================================================

  smokedPorkData: Recipe = {

    name: 'Smoked Pork with Bamboo Shoot',
    nativeName: 'आखुनी के साथ स्मोक्ड पोर्क',
    state: 'Nagaland',
    language: 'Naga',
    category: 'Traditional',
    type: 'Non-Vegetarian',
    time: '90 minutes',
    serves: 4,
    difficulty: 'Medium',

    description:
      'A traditional Naga-style pork preparation combining smoky meat with bamboo shoot.',

    about:
      'Smoked pork and bamboo shoot are characteristic ingredients in several Naga food traditions.',

    story:
      'Smoking and preserving meat developed as practical traditional methods while also creating a distinctive flavour.',

    ingredients: [
      'Smoked pork – 500 g',
      'Bamboo shoot – 1 cup',
      'Tomato – 2',
      'Green chilli – 3'
    ],

    masala: [
      'Ginger',
      'Garlic',
      'Green chilli',
      'Salt'
    ],

    preparation: [
      'Cut the smoked pork into pieces.',
      'Cook the pork until tender.',
      'Add bamboo shoot.',
      'Add tomatoes and chillies.',
      'Simmer until the flavours combine.',
      'Adjust salt and serve hot.'
    ],

    serving:
      'Serve with steamed rice.',

    chefTip:
      'The smoky flavour should remain prominent without overpowering the bamboo shoot.',

    nativeCaption:
      'नागालैंड का स्मोक्ड पोर्क — धुएँ की खुशबू में बसी पहाड़ी रसोई की पहचान।',

    englishCaption:
      'Smoked Pork of Nagaland — the identity of a mountain kitchen carried in a smoky aroma.'
  };


  // =========================================================
  // ARUNACHAL PRADESH
  // =========================================================

  thukpaData: Recipe = {

    name: 'Thukpa',
    nativeName: 'थुकपा',
    state: 'Arunachal Pradesh',
    language: 'Tibetan',
    category: 'Himalayan',
    type: 'Vegetarian',
    time: '45 minutes',
    serves: 4,
    difficulty: 'Easy',

    description:
      'A warm Himalayan noodle soup prepared with vegetables and aromatic broth.',

    about:
      'Thukpa is a comforting noodle soup popular in the Himalayan regions of Arunachal Pradesh.',

    story:
      'Its warm broth and noodles make it especially suited to the cooler mountain climate.',

    ingredients: [
      'Noodles – 200 g',
      'Carrot – 1',
      'Cabbage – 1 cup',
      'Spring onion – ½ cup',
      'Vegetable stock – 4 cups'
    ],

    masala: [
      'Ginger',
      'Garlic',
      'Black pepper',
      'Soy sauce',
      'Salt'
    ],

    preparation: [
      'Prepare the vegetable broth.',
      'Add chopped vegetables.',
      'Cook until slightly tender.',
      'Add noodles.',
      'Season with spices and soy sauce.',
      'Simmer until the noodles are cooked.'
    ],

    serving:
      'Serve hot in a deep bowl with fresh spring onion.',

    chefTip:
      'Keep the broth light so the natural vegetable flavours remain noticeable.',

    nativeCaption:
      'थुकपा — अरुणाचल की ठंडी पहाड़ियों में परोसी गई गरमाहट।',

    englishCaption:
      'Thukpa — warmth served among the cool mountains of Arunachal Pradesh.'
  };


  // =========================================================
  // MIZORAM
  // =========================================================

  baiData: Recipe = {

    name: 'Bai',
    nativeName: 'Bai',
    state: 'Mizoram',
    language: 'Mizo',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '40 minutes',
    serves: 4,
    difficulty: 'Easy',

    description:
      'A simple traditional Mizo vegetable preparation made with fresh local ingredients.',

    about:
      'Bai is a traditional Mizo dish that focuses on vegetables and simple preparation.',

    story:
      'The dish reflects Mizoram’s preference for fresh ingredients and uncomplicated cooking.',

    ingredients: [
      'Mixed vegetables – 3 cups',
      'Green beans – 1 cup',
      'Potato – 1',
      'Leafy greens – 1 cup'
    ],

    masala: [
      'Ginger',
      'Green chilli',
      'Salt'
    ],

    preparation: [
      'Wash and cut the vegetables.',
      'Add them to a pot with water.',
      'Cook until tender.',
      'Add ginger and green chilli.',
      'Season with salt.',
      'Simmer briefly before serving.'
    ],

    serving:
      'Serve warm with steamed rice.',

    chefTip:
      'Keep the seasoning simple to preserve the natural vegetable flavours.',

    nativeCaption:
      'Bai — Mizo ৰান্ধনীঘৰৰ সৰলতা আৰু সতেজতাৰ এক উষ্ণ স্বাদ।',

    englishCaption:
      'Bai — a warm taste of simplicity and freshness from a Mizo kitchen.'
  };


  // =========================================================
  // TRIPURA
  // =========================================================

  muiBorokData: Recipe = {

    name: 'Mui Borok',
    nativeName: 'মুই বৰক',
    state: 'Tripura',
    language: 'Kokborok',
    category: 'Traditional',
    type: 'Non-Vegetarian',
    time: '50 minutes',
    serves: 4,
    difficulty: 'Medium',

    description:
      'A traditional Tripuri food style centered around local ingredients and distinctive flavours.',

    about:
      'Mui Borok represents the traditional food culture of the indigenous communities of Tripura.',

    story:
      'Tripuri cuisine makes extensive use of local vegetables, herbs, bamboo and fermented ingredients.',

    ingredients: [
      'Fish or local protein – 400 g',
      'Vegetables – 2 cups',
      'Bamboo shoot – ½ cup',
      'Green chilli – 3'
    ],

    masala: [
      'Ginger',
      'Garlic',
      'Green chilli',
      'Salt'
    ],

    preparation: [
      'Prepare the vegetables and protein.',
      'Cook them together with bamboo shoot.',
      'Add ginger, garlic and chilli.',
      'Simmer until tender.',
      'Adjust salt.',
      'Serve hot.'
    ],

    serving:
      'Traditionally enjoyed with steamed rice.',

    chefTip:
      'Fresh local ingredients are the key to the character of Tripuri cooking.',

    nativeCaption:
      'মুই বৰক — ত্ৰিপুৰাৰ মাটিৰ সোৱাদ আৰু পৰম্পৰাৰ এক সৰল প্ৰকাশ।',

    englishCaption:
      'Mui Borok — a simple expression of Tripura’s land, flavour and tradition.'
  };


  // =========================================================
  // MADHYA PRADESH
  // =========================================================

  pohaData: Recipe = {

    name: 'Poha',
    nativeName: 'पोहा',
    state: 'Madhya Pradesh',
    language: 'Hindi',
    category: 'Breakfast',
    type: 'Vegetarian',
    time: '20 minutes',
    serves: 2,
    difficulty: 'Easy',

    description:
      'A light flattened-rice breakfast prepared with onion, peanuts and aromatic seasoning.',

    about:
      'Poha is a popular everyday breakfast across Madhya Pradesh, particularly associated with Indore.',

    story:
      'Simple ingredients and quick preparation have made poha a familiar breakfast across central India.',

    ingredients: [
      'Flattened rice – 2 cups',
      'Onion – 1',
      'Peanuts – ½ cup',
      'Potato – 1',
      'Lemon – 1'
    ],

    masala: [
      'Mustard seeds',
      'Turmeric',
      'Green chilli',
      'Curry leaves',
      'Salt'
    ],

    preparation: [
      'Wash the poha and drain it.',
      'Prepare a tempering with mustard seeds.',
      'Add onion, chilli and peanuts.',
      'Add turmeric and potato.',
      'Mix in the poha.',
      'Finish with lemon juice and coriander.'
    ],

    serving:
      'Serve warm with sev, coriander and lemon.',

    chefTip:
      'Do not soak poha for too long; it should remain soft but separate.',

    nativeCaption:
      'पोहा — मध्य प्रदेश की सुबह का हल्का, सादा और अपनापन भरा स्वाद।',

    englishCaption:
      'Poha — the light, simple and comforting taste of a Madhya Pradesh morning.'
  };


  // =========================================================
  // CHHATTISGARH
  // =========================================================

  faraaData: Recipe = {  machhaBesaraData: Recipe = {

    name: 'Machha Besara',

    nativeName: 'ମାଛ ବେସର',

    state: 'Odisha',

    language: 'Odia',

    category: 'Traditional',

    type: 'Non-Vegetarian',

    time: '40 minutes',

    serves: 4,

    difficulty: 'Medium',

    description:
      'A traditional Odia fish curry prepared with mustard paste, spices and vegetables.',

    about:
      'Machha Besara is a classic Odia fish preparation known for its distinctive mustard flavour and light, aromatic gravy.',

    story:
      'Mustard-based preparations are an important part of traditional Odia cuisine. Machha Besara is commonly enjoyed with steamed rice as a comforting everyday meal.',

    ingredients: [

      'Fish pieces – 500 g',

      'Potato – 2',

      'Tomato – 1',

      'Mustard seeds – 2 tbsp',

      'Garlic – 5 cloves',

      'Turmeric powder – 1 tsp',

      'Water – as required',

      'Salt – to taste',

      'Mustard oil – 3 tbsp'

    ],

    masala: [

      'Cumin seeds – 1 tsp',

      'Red chilli powder – 1 tsp',

      'Green chilli – 2',

      'Pancha phutana – 1 tsp'

    ],

    preparation: [

      'Clean the fish pieces and marinate them with turmeric and salt.',

      'Make a smooth paste using mustard seeds, garlic and green chilli.',

      'Heat mustard oil in a pan and lightly fry the fish pieces. Remove and keep aside.',

      'Add pancha phutana and allow it to splutter.',

      'Add potatoes and sauté until they are lightly cooked.',

      'Add the mustard paste, turmeric and red chilli powder. Cook for a few minutes.',

      'Add water and simmer until the potatoes are cooked.',

      'Add the fried fish pieces and cook gently for another 8–10 minutes.',

      'Serve hot with steamed rice.'

    ],

    serving:
      'Serve hot with steamed rice.',

    chefTip:
      'Do not overcook the mustard paste, as excessive cooking can make the mustard taste bitter.',

    nativeCaption:
      'ମାଛ ବେସର — ଓଡ଼ିଆ ଘରର ପାରମ୍ପରିକ ସ୍ୱାଦ',

    englishCaption:
      'A traditional taste from an Odia kitchen.',

  },

    name: 'Faraa',
    nativeName: 'फरा',
    state: 'Chhattisgarh',
    language: 'Hindi',
    category: 'Traditional',
    type: 'Vegetarian',
    time: '40 minutes',
    serves: 4,
    difficulty: 'Medium',

    description:
      'A traditional steamed rice preparation with a soft and comforting texture.',

    about:
      'Faraa is a traditional Chhattisgarhi dish prepared primarily from rice flour.',

    story:
      'The dish reflects Chhattisgarh’s rice-based food traditions and preference for simple steamed preparations.',

    ingredients: [
      'Rice flour – 2 cups',
      'Water – as required',
      'Garlic – 4 cloves',
      'Green chilli – 2',
      'Coriander – handful'
    ],

    masala: [
      'Cumin',
      'Mustard seeds',
      'Green chilli',
      'Garlic',
      'Salt'
    ],

    preparation: [
      'Prepare a soft dough using rice flour.',
      'Shape the dough into small pieces.',
      'Steam until firm and cooked.',
      'Prepare a garlic and spice tempering.',
      'Add the steamed faraa.',
      'Toss gently with the tempering.'
    ],

    serving:
      'Serve warm with chutney or a light curry.',

    chefTip:
      'Steam the faraa gently so it remains soft rather than becoming dry.',

    nativeCaption:
      'फरा — छत्तीसगढ़ की चावल-आधारित परंपरा का सादा और सुकून भरा स्वाद।',

    englishCaption:
      'Faraa — the simple and comforting taste of Chhattisgarh’s rice-based tradition.'
  };

}