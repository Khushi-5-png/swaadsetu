import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Recipe {
  name: string;
  odiaName: string;
  state: string;
  category: string;
  type: string;
  time: string;
  serves: string;
  difficulty: string;
  description: string;
  about: string;
  story: string;
  ingredients: string[];
  masala: string[];
  preparation: string[];
  serving: string;
  chefTip: string;
  odiaMessage: string;
}

@Component({
  selector: 'app-recipe-details',
  imports: [UpperCasePipe],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css'
})
export class RecipeDetails {

  recipe = '';

  recipeData: Recipe = {
    name: 'Dalma',
    odiaName: 'ଡାଲମା',
    state: 'Odisha',
    category: 'Traditional Cuisine',
    type: 'Vegetarian',
    time: '40 min',
    serves: '4',
    difficulty: 'Easy',

    description:
      'Dalma is a traditional Odia dish made with lentils, vegetables and aromatic spices. It is commonly enjoyed with rice.',

    about:
      'Dalma is a comforting Odia preparation where lentils are cooked together with seasonal vegetables and traditional spices.',

    story:
      'Dalma reflects the simple and wholesome character of traditional Odia cooking. Different households may use different seasonal vegetables and spice combinations.',

    ingredients: [
      'Toor dal – 1 cup',
      'Potato – 1 medium',
      'Pumpkin – 1 cup',
      'Raw papaya – 1 cup',
      'Raw banana – 1',
      'Brinjal – 1 small',
      'Tomato – 1'
    ],

    masala: [
      'Turmeric powder – ½ teaspoon',
      'Roasted cumin powder – 1 teaspoon',
      'Red chilli powder – ½ teaspoon',
      'Ginger paste – 1 teaspoon',
      'Pancha Phutana – 1 teaspoon',
      'Salt – as required',
      'Cooking oil – 1–2 tablespoons'
    ],

    preparation: [
      'Wash the toor dal thoroughly and cook it until soft.',
      'Wash and cut the vegetables into medium-sized pieces.',
      'Cook the vegetables with turmeric and salt until tender.',
      'Add the cooked dal to the vegetables and mix well.',
      'Add ginger paste, roasted cumin powder and red chilli powder.',
      'Heat oil and add pancha phutana for tempering.',
      'Add the tempering to the dal and vegetable mixture.',
      'Simmer for a few minutes so the flavours combine.',
      'Serve hot with steamed rice.'
    ],

    serving:
      'Dalma is traditionally served hot with steamed rice and simple Odia accompaniments.',

    chefTip:
      'For a richer traditional flavour, lightly roast cumin seeds and dry red chillies, grind them into a powder and add a small amount just before serving.',

    odiaMessage:
      'ଓଡ଼ିଆ ଘରର ସରଳତା ଓ ସ୍ୱାଦରେ ଡାଲମାର ଏକ ନିଆରା ପରିଚୟ ରହିଛି।'
  };

  pakhalaData: Recipe = {
    name: 'Pakhala Bhata',
    odiaName: 'ପଖାଳ ଭାତ',
    state: 'Odisha',
    category: 'Traditional Cuisine',
    type: 'Vegetarian',
    time: '15 min + soaking',
    serves: '2',
    difficulty: 'Easy',

    description:
      'Pakhala Bhata is a traditional Odia fermented rice dish made by soaking cooked rice in water and allowing it to develop a naturally tangy flavour.',

    about:
      'Pakhala Bhata is one of the most loved traditional foods of Odisha. It is especially popular during the hot summer months because it is light, refreshing and cooling.',

    story:
      'Pakhala is deeply connected with everyday Odia food culture. Families often enjoy it with simple accompaniments such as fried vegetables, green chillies, saga bhaja, badi or fish.',

    ingredients: [
      'Cooked rice – 2 cups',
      'Water – 2 to 3 cups',
      'Curd – 2 tablespoons',
      'Salt – as required'
    ],

    masala: [
      'Roasted cumin powder – ½ teaspoon',
      'Green chilli – 1 or 2',
      'Fresh coriander – a small amount',
      'Ginger – finely chopped, optional'
    ],

    preparation: [
      'Place freshly cooked rice in a clean bowl and allow it to cool.',
      'Add water and gently mix the rice.',
      'Add curd and salt and mix well.',
      'Cover the bowl and allow the rice to rest for several hours or overnight for a stronger fermented flavour.',
      'Before serving, add roasted cumin powder and chopped green chilli.',
      'Serve chilled or at room temperature with traditional Odia side dishes.'
    ],

    serving:
      'Pakhala Bhata is traditionally served with fried vegetables, saga bhaja, badi, green chilli and other simple Odia accompaniments.',

    chefTip:
      'For a more traditional fermented flavour, prepare the pakhala a few hours in advance and let it rest overnight in a cool place.',

    odiaMessage:
      'ପଖାଳ ଭାତ ଓଡ଼ିଆ ଘରର ପରମ୍ପରା, ସରଳତା ଓ ଆପଣାପଣିଆ ସ୍ୱାଦର ଏକ ସୁନ୍ଦର ପରିଚୟ।'
  };

  dahiPakhalaData: Recipe = {
    name: 'Dahi Pakhala',
    odiaName: 'ଦହି ପଖାଳ',
    state: 'Odisha',
    category: 'Traditional Cuisine',
    type: 'Vegetarian',
    time: '15 min + soaking',
    serves: '2',
    difficulty: 'Easy',

    description:
      'Dahi Pakhala is a refreshing Odia preparation made with cooked rice, water and curd, creating a creamy and mildly tangy traditional meal.',

    about:
      'Dahi Pakhala is a variation of Pakhala Bhata where curd adds a smooth, cooling and mildly sour flavour to the fermented rice.',

    story:
      'Dahi Pakhala is enjoyed as a simple traditional meal in Odisha, especially during warm weather. It is often paired with fried vegetables, saga bhaja, badi and green chillies.',

    ingredients: [
      'Cooked rice – 2 cups',
      'Water – 2 cups',
      'Fresh curd – ½ cup',
      'Salt – as required'
    ],

    masala: [
      'Roasted cumin powder – ½ teaspoon',
      'Green chilli – 1 or 2',
      'Fresh coriander – a small amount',
      'Ginger – finely chopped, optional'
    ],

    preparation: [
      'Allow freshly cooked rice to cool completely.',
      'Place the rice in a clean bowl and add water.',
      'Add fresh curd and gently mix everything together.',
      'Add salt according to taste.',
      'Allow the mixture to rest for a few hours for the flavours to develop.',
      'Add roasted cumin powder and chopped green chilli before serving.',
      'Serve chilled or at room temperature with traditional Odia accompaniments.'
    ],

    serving:
      'Dahi Pakhala is traditionally served with fried vegetables, saga bhaja, badi, green chilli and other simple Odia side dishes.',

    chefTip:
      'Use fresh curd for a smooth and refreshing taste. Adjust the amount of water according to how thin or thick you prefer the pakhala.',

    odiaMessage:
      'ଦହି ପଖାଳ ଓଡ଼ିଆ ଖାଦ୍ୟ ପରମ୍ପରାର ଏକ ସରଳ, ଶୀତଳ ଓ ସୁସ୍ୱାଦୁ ପରିଚୟ।'
  };

  masorTengaData: Recipe = {
    name: 'Masor Tenga',
    odiaName: 'মাছৰ টেঙা',
    state: 'Assam',
    category: 'Traditional Assamese Cuisine',
    type: 'Non-Vegetarian',
    time: '35 min',
    serves: '4',
    difficulty: 'Easy',

    description:
      'Masor Tenga is a traditional Assamese light and tangy fish curry prepared with fish and souring ingredients.',

    about:
      'Masor Tenga is a well-known Assamese fish preparation valued for its light texture and refreshing sour flavour. It is commonly enjoyed with steamed rice.',

    story:
      'Masor Tenga reflects the simple and balanced character of Assamese home cooking. Different households may use ingredients such as tomato, elephant apple or other local souring ingredients.',

    ingredients: [
      'Fresh fish – 500 g',
      'Tomato – 2 medium',
      'Potato – 1 medium',
      'Mustard oil – 2 tablespoons',
      'Water – as required',
      'Salt – as required'
    ],

    masala: [
      'Turmeric powder – ½ teaspoon',
      'Green chilli – 2',
      'Ginger paste – 1 teaspoon',
      'Cumin powder – ½ teaspoon',
      'Fresh coriander – a small amount'
    ],

    preparation: [
      'Clean the fish pieces and season them with salt and turmeric.',
      'Heat mustard oil in a pan and lightly fry the fish pieces.',
      'Remove the fish and keep it aside.',
      'In the same pan, add ginger paste and sliced tomatoes.',
      'Cook until the tomatoes become soft.',
      'Add turmeric, cumin powder and green chillies.',
      'Add water and bring the curry to a gentle boil.',
      'Add the fried fish pieces and cook for several minutes.',
      'Adjust the salt and sourness according to taste.',
      'Garnish with fresh coriander and serve hot with rice.'
    ],

    serving:
      'Masor Tenga is traditionally served with steamed rice as a light and refreshing Assamese meal.',

    chefTip:
      'The defining character of Masor Tenga is its gentle sourness, so add the souring ingredient gradually and adjust it according to taste.',

    odiaMessage:
      'অসমীয়া খাদ্য পৰম্পৰাৰ সৰলতা আৰু টেঙা সোৱাদৰ এক সুন্দৰ পৰিচয় হৈছে মাছৰ টেঙা।'
  };

  kharData: Recipe = {
    name: 'Khar',
    odiaName: 'খাৰ',
    state: 'Assam',
    category: 'Traditional Assamese Cuisine',
    type: 'Vegetarian',
    time: '30 min',
    serves: '4',
    difficulty: 'Easy',

    description:
      'Khar is a traditional Assamese preparation known for its distinctive alkaline flavour and simple combination of vegetables and raw papaya.',

    about:
      'Khar is an important part of traditional Assamese cuisine. It is commonly prepared using raw papaya and an alkaline ingredient traditionally made from filtered ash water.',

    story:
      'Khar represents the unique cooking traditions of Assam, where simple local ingredients are transformed into dishes with distinctive flavours and textures.',

    ingredients: [
      'Raw papaya – 2 cups',
      'Khar water – 2 tablespoons',
      'Water – 2 cups',
      'Mustard oil – 1 tablespoon',
      'Salt – as required'
    ],

    masala: [
      'Turmeric powder – ¼ teaspoon',
      'Green chilli – 2',
      'Ginger paste – 1 teaspoon',
      'Mustard seeds – ½ teaspoon',
      'Fresh coriander – a small amount'
    ],

    preparation: [
      'Peel and cut the raw papaya into medium-sized pieces.',
      'Wash the papaya pieces thoroughly.',
      'Heat mustard oil in a pan.',
      'Add mustard seeds and green chillies.',
      'Add ginger paste and cook briefly.',
      'Add the raw papaya pieces and mix well.',
      'Add water and cook until the papaya becomes tender.',
      'Add the traditional khar water and mix gently.',
      'Simmer for a few minutes so the flavours combine.',
      'Adjust the salt and serve warm with steamed rice.'
    ],

    serving:
      'Khar is traditionally served with steamed rice as part of a simple Assamese meal.',

    chefTip:
      'Khar has a distinctive alkaline taste, so the amount of khar water should be adjusted carefully according to the desired flavour.',

    odiaMessage:
      'অসমীয়া খাদ্য পৰম্পৰাৰ এক অনন্য আৰু পৰম্পৰাগত সোৱাদৰ পৰিচয় হৈছে খাৰ।'
  };

  sarsonSaagData: Recipe = {
    name: 'Sarson da Saag',
    odiaName: 'सरसों दा साग',
    state: 'Punjab',
    category: 'Traditional Punjabi Cuisine',
    type: 'Vegetarian',
    time: '50 min',
    serves: '4',
    difficulty: 'Medium',

    description:
      'Sarson da Saag is a traditional Punjabi preparation made from mustard greens and other leafy vegetables, cooked with aromatic spices.',

    about:
      'Sarson da Saag is one of the most recognizable dishes of Punjabi cuisine. It is traditionally prepared by slow-cooking mustard greens with other seasonal greens and spices.',

    story:
      'Sarson da Saag is closely associated with Punjabi winter food traditions and is commonly enjoyed as a hearty homemade meal with makki di roti.',

    ingredients: [
      'Mustard greens – 500 g',
      'Spinach – 250 g',
      'Bathua greens – 150 g',
      'Onion – 1 medium',
      'Tomato – 1 medium',
      'Ginger – 1 teaspoon',
      'Garlic – 4 cloves'
    ],

    masala: [
      'Turmeric powder – ½ teaspoon',
      'Red chilli powder – ½ teaspoon',
      'Garam masala – ½ teaspoon',
      'Green chilli – 1 or 2',
      'Salt – as required',
      'Ghee or butter – 1 tablespoon'
    ],

    preparation: [
      'Wash the mustard greens, spinach and bathua thoroughly.',
      'Chop all the greens into smaller pieces.',
      'Cook the greens with a little water until they become soft.',
      'Allow the cooked greens to cool slightly and blend them into a coarse paste.',
      'Heat ghee or butter in a pan.',
      'Add chopped onion, ginger and garlic and cook until lightly golden.',
      'Add chopped tomato and cook until soft.',
      'Add turmeric, red chilli powder and salt.',
      'Add the blended greens and mix everything together.',
      'Simmer on low heat for 15–20 minutes.',
      'Add garam masala and adjust the seasoning before serving.'
    ],

    serving:
      'Sarson da Saag is traditionally served hot with makki di roti, butter or ghee and simple Punjabi accompaniments.',

    chefTip:
      'Slow cooking the greens allows their flavours to develop. A small amount of ghee or butter added before serving gives the dish a richer traditional taste.',

    odiaMessage:
      'ପଞ୍ଜାବୀ ଖାଦ୍ୟ ପରମ୍ପରାର ସରଳତା, ଗାଢ଼ ସ୍ୱାଦ ଓ ଘରୋଇ ଆତ୍ମୀୟତାର ଏକ ପରିଚୟ ହେଉଛି ସରସୋଁ ଦା ସାଗ।'
  };

  dalBaatiChurmaData: Recipe = {
    name: 'Dal Baati Churma',
    odiaName: 'दाल बाटी चूरमा',
    state: 'Rajasthan',
    category: 'Traditional Rajasthani Cuisine',
    type: 'Vegetarian',
    time: '1 hr 15 min',
    serves: '4',
    difficulty: 'Medium',

    description:
      'Dal Baati Churma is a traditional Rajasthani meal combining baked wheat baati, flavorful dal and sweet churma.',

    about:
      'Dal Baati Churma is a classic dish of Rajasthan made with three distinct elements: baati, a baked wheat preparation; dal, a lentil curry; and churma, a sweet preparation made from crushed baati.',

    story:
      'The dish reflects the rich culinary traditions of Rajasthan, where hearty ingredients and long-lasting preparations developed alongside the region’s dry climate and royal food culture.',

    ingredients: [
      'Wheat flour – 2 cups',
      'Semolina – 2 tablespoons',
      'Toor dal – ½ cup',
      'Moong dal – ½ cup',
      'Chana dal – ½ cup',
      'Ghee – 4 tablespoons',
      'Jaggery or sugar – ½ cup',
      'Water – as required',
      'Salt – as required'
    ],

    masala: [
      'Turmeric powder – ½ teaspoon',
      'Red chilli powder – ½ teaspoon',
      'Cumin seeds – 1 teaspoon',
      'Coriander powder – 1 teaspoon',
      'Garam masala – ½ teaspoon',
      'Ginger – 1 teaspoon',
      'Green chilli – 1 or 2'
    ],

    preparation: [
      'Combine wheat flour, semolina, salt and a little ghee to prepare the baati dough.',
      'Add water gradually and knead into a firm dough.',
      'Divide the dough into equal portions and shape them into round balls.',
      'Bake the baati until golden and cooked through.',
      'Wash the different dals and pressure cook them with turmeric and salt until soft.',
      'Prepare a tempering with ghee, cumin seeds, ginger, green chilli and spices.',
      'Add the tempering to the cooked dal and simmer for a few minutes.',
      'For churma, crush some cooked baati into coarse crumbs.',
      'Mix the crumbs with ghee and jaggery or sugar.',
      'Serve the baati with hot dal and sweet churma, topped with ghee.'
    ],

    serving:
      'Dal Baati Churma is traditionally served hot with generous amounts of ghee, dal and sweet churma.',

    chefTip:
      'Dip the hot baati in ghee before serving. The combination of crisp baati, flavorful dal and sweet churma creates the traditional balance of textures and flavours.',

    odiaMessage:
      'ରାଜସ୍ଥାନୀ ଖାଦ୍ୟ ପରମ୍ପରାର ସମୃଦ୍ଧ ସ୍ୱାଦ ଓ ଆତିଥ୍ୟର ଏକ ପ୍ରସିଦ୍ଧ ପରିଚୟ ହେଉଛି ଦାଲ ବାଟି ଚୂର୍ମା।'
  };

  macherJholData: Recipe = {
    name: 'Macher Jhol',
    odiaName: 'মাছের ঝোল',
    state: 'West Bengal',
    category: 'Traditional Bengali Cuisine',
    type: 'Non-Vegetarian',
    time: '40 min',
    serves: '4',
    difficulty: 'Easy',

    description:
      'Macher Jhol is a traditional Bengali fish curry made with fresh fish, potatoes and light aromatic spices.',

    about:
      'Macher Jhol is a simple and comforting Bengali fish preparation. It is usually light, mildly spiced and commonly served with steamed rice.',

    story:
      'The dish represents the everyday style of Bengali home cooking, where fresh fish, seasonal vegetables and simple spices are combined to create a comforting meal.',

    ingredients: [
      'Fresh fish – 500 g',
      'Potatoes – 2 medium',
      'Tomato – 1 medium',
      'Mustard oil – 3 tablespoons',
      'Water – as required',
      'Salt – as required'
    ],

    masala: [
      'Turmeric powder – 1 teaspoon',
      'Red chilli powder – ½ teaspoon',
      'Cumin powder – 1 teaspoon',
      'Ginger paste – 1 teaspoon',
      'Cumin seeds – ½ teaspoon',
      'Green chilli – 2'
    ],

    preparation: [
      'Clean the fish pieces and season them with salt and turmeric.',
      'Heat mustard oil in a pan and lightly fry the fish pieces until golden.',
      'Remove the fish and keep it aside.',
      'Cut the potatoes into medium-sized pieces and lightly fry them in the same pan.',
      'Add cumin seeds and ginger paste to the pan.',
      'Add chopped tomato, turmeric, chilli powder and cumin powder.',
      'Cook until the tomato becomes soft and the spices are fragrant.',
      'Add water and bring the curry to a gentle boil.',
      'Add the fried potatoes and cook until they become tender.',
      'Add the fried fish pieces and simmer for a few minutes.',
      'Add green chillies and adjust the salt.',
      'Serve hot with steamed rice.'
    ],

    serving:
      'Macher Jhol is traditionally served hot with steamed white rice.',

    chefTip:
      'Use fresh fish and mustard oil for a more traditional Bengali flavour. Keep the gravy light rather than making it too thick.',

    odiaMessage:
      'ବଙ୍ଗୀୟ ଖାଦ୍ୟ ପରମ୍ପରାର ସରଳତା ଓ ସ୍ୱାଦର ଏକ ପରିଚିତ ଉଦାହରଣ ହେଉଛି ମାଛେର ଝୋଲ।'
  };

  dhuskaData: Recipe = {
    name: 'Dhuska',
    odiaName: 'ଧୁସ୍କା',
    state: 'Jharkhand',
    category: 'Traditional Jharkhand Cuisine',
    type: 'Vegetarian',
    time: '45 min',
    serves: '4',
    difficulty: 'Easy',

    description:
      'Dhuska is a popular Jharkhand dish made from fermented rice and lentils, shaped into small fritters and fried until golden.',

    about:
      'Dhuska is a traditional Jharkhand preparation made primarily from rice and lentils. It is crispy outside, soft inside and commonly enjoyed with a spicy potato or vegetable curry.',

    story:
      'Dhuska is part of the traditional food culture of Jharkhand and is commonly prepared during festivals, family occasions and everyday meals.',

    ingredients: [
      'Rice – 1 cup',
      'Chana dal – ½ cup',
      'Urad dal – ¼ cup',
      'Green chilli – 2',
      'Ginger – 1 teaspoon',
      'Water – as required',
      'Salt – as required',
      'Cooking oil – for frying'
    ],

    masala: [
      'Cumin seeds – 1 teaspoon',
      'Turmeric powder – ¼ teaspoon',
      'Red chilli powder – ½ teaspoon',
      'Coriander leaves – a small amount',
      'Asafoetida – a pinch'
    ],

    preparation: [
      'Wash the rice, chana dal and urad dal thoroughly.',
      'Soak them in water for several hours.',
      'Drain the water and grind the soaked ingredients into a slightly coarse batter.',
      'Add ginger, green chilli, cumin seeds, turmeric, salt and coriander leaves.',
      'Allow the batter to rest for a few hours for fermentation.',
      'Heat oil in a deep pan over medium heat.',
      'Take small portions of batter and carefully drop them into the hot oil.',
      'Fry until the dhuska becomes golden and crisp on the outside.',
      'Remove and drain on a kitchen towel.',
      'Serve hot with potato curry or another spicy vegetable preparation.'
    ],

    serving:
      'Dhuska is traditionally served hot with spicy potato curry or vegetable curry.',

    chefTip:
      'Keep the batter slightly thick so the dhuska holds its shape while frying. Fermenting the batter also gives it a better texture and flavour.',

    odiaMessage:
      'ଝାରଖଣ୍ଡର ପାରମ୍ପରିକ ଖାଦ୍ୟ ସଂସ୍କୃତିର ଏକ ସରଳ ଓ ସ୍ୱାଦିଷ୍ଟ ପରିଚୟ ହେଉଛି ଧୁସ୍କା।'
  };

  pongalData: Recipe = {
    name: 'Pongal',
    odiaName: 'பொங்கல்',
    state: 'Tamil Nadu',
    category: 'Traditional Tamil Cuisine',
    type: 'Vegetarian',
    time: '35 min',
    serves: '4',
    difficulty: 'Easy',

    description:
      'Pongal is a traditional South Indian rice and lentil dish cooked with ghee, pepper, cumin and aromatic spices.',

    about:
      'Pongal is a comforting Tamil dish made by cooking rice and moong dal together until soft and creamy. It is commonly enjoyed as breakfast or as part of festive meals.',

    story:
      'Pongal is closely associated with Tamil food culture and the harvest festival of the same name. Its simple ingredients and comforting texture make it a popular traditional dish.',

    ingredients: [
      'Rice – 1 cup',
      'Moong dal – ½ cup',
      'Ghee – 2 tablespoons',
      'Water – 4 cups',
      'Cashews – 10',
      'Ginger – 1 teaspoon',
      'Salt – as required'
    ],

    masala: [
      'Black pepper – 1 teaspoon',
      'Cumin seeds – 1 teaspoon',
      'Curry leaves – a few',
      'Green chilli – 1',
      'Asafoetida – a pinch'
    ],

    preparation: [
      'Wash the rice and moong dal thoroughly.',
      'Lightly roast the moong dal until it becomes aromatic.',
      'Add rice and roasted dal to a pressure cooker.',
      'Add water and salt and cook until soft and creamy.',
      'Heat ghee in a separate pan.',
      'Add cumin seeds, black pepper, curry leaves, green chilli and asafoetida.',
      'Add cashews and fry until lightly golden.',
      'Pour the tempering over the cooked rice and dal.',
      'Mix everything thoroughly and simmer for a few minutes.',
      'Serve hot with chutney or sambar.'
    ],

    serving:
      'Pongal is traditionally served hot with coconut chutney, sambar and a little extra ghee.',

    chefTip:
      'For creamy Pongal, cook the rice and dal until they become very soft. Freshly ground pepper and cumin give the dish a stronger traditional aroma.',

    odiaMessage:
      'ତାମିଲ ଖାଦ୍ୟ ପରମ୍ପରାର ସରଳତା ଓ ସୁଗନ୍ଧିତ ସ୍ୱାଦର ଏକ ପରିଚିତ ଉଦାହରଣ ହେଉଛି ପୋଙ୍ଗଲ।'
  };

  avialData: Recipe = {
    name: 'Avial',
    odiaName: 'അവിയൽ',
    state: 'Kerala',
    category: 'Traditional Kerala Cuisine',
    type: 'Vegetarian',
    time: '40 min',
    serves: '4',
    difficulty: 'Easy',

    description:
      'Avial is a traditional Kerala preparation made with mixed vegetables, coconut and curd, gently cooked with aromatic spices.',

    about:
      'Avial is a classic Kerala dish made using a variety of seasonal vegetables. It has a mild, creamy and coconut-rich flavour and is commonly served with rice.',

    story:
      'Avial is an important part of Kerala food traditions and is commonly associated with festive meals and the traditional Sadya served on banana leaves.',

    ingredients: [
      'Raw banana – 1',
      'Carrot – 1',
      'Drumstick – 1',
      'Ash gourd – 1 cup',
      'Beans – ½ cup',
      'Yam – 1 cup',
      'Curd – ½ cup',
      'Grated coconut – 1 cup'
    ],

    masala: [
      'Green chilli – 2',
      'Cumin seeds – 1 teaspoon',
      'Turmeric powder – ¼ teaspoon',
      'Curry leaves – a few',
      'Coconut oil – 1 tablespoon',
      'Salt – as required'
    ],

    preparation: [
      'Wash, peel and cut the vegetables into long, even pieces.',
      'Cook the vegetables with turmeric, salt and a little water.',
      'Grind grated coconut, green chilli and cumin seeds into a coarse paste.',
      'Add the coconut mixture to the cooked vegetables.',
      'Mix gently and cook for a few minutes.',
      'Lower the heat and add beaten curd.',
      'Mix carefully without boiling the curd.',
      'Add fresh curry leaves and coconut oil.',
      'Allow the flavours to combine for a few minutes.',
      'Serve warm with steamed rice.'
    ],

    serving:
      'Avial is traditionally served with steamed rice and is an important part of the Kerala Sadya.',

    chefTip:
      'Do not overcook the vegetables. They should remain slightly firm so the dish keeps its traditional texture.',

    odiaMessage:
      'କେରଳର ପାରମ୍ପରିକ ଖାଦ୍ୟ ସଂସ୍କୃତିର ସରଳତା ଓ ନଡ଼ିଆର ସୁଗନ୍ଧର ଏକ ସୁନ୍ଦର ପରିଚୟ ହେଉଛି ଅଭିୟଲ।'
  };

  bisiBeleBathData: Recipe = {
    name: 'Bisi Bele Bath',
    odiaName: 'ಬಿಸಿ ಬೇಳೆ ಬಾತ್',
    state: 'Karnataka',
    category: 'Traditional Karnataka Cuisine',
    type: 'Vegetarian',
    time: '50 min',
    serves: '4',
    difficulty: 'Medium',

    description:
      'Bisi Bele Bath is a traditional Karnataka rice and lentil dish prepared with vegetables, tamarind and aromatic spices.',

    about:
      'Bisi Bele Bath is a wholesome one-pot meal made with rice, lentils and vegetables. Its distinctive flavour comes from roasted spices and tamarind.',

    story:
      'The dish is deeply associated with Karnataka cuisine and is commonly served at homes, restaurants and traditional meals across the state.',

    ingredients: [
      'Rice – 1 cup',
      'Toor dal – ½ cup',
      'Carrot – 1',
      'Beans – ½ cup',
      'Potato – 1',
      'Peas – ½ cup',
      'Tamarind – 1 tablespoon',
      'Water – as required',
      'Salt – as required'
    ],

    masala: [
      'Bisi Bele Bath powder – 2 tablespoons',
      'Turmeric powder – ½ teaspoon',
      'Mustard seeds – 1 teaspoon',
      'Cumin seeds – ½ teaspoon',
      'Curry leaves – a few',
      'Dry red chilli – 2',
      'Ghee – 1 tablespoon'
    ],

    preparation: [
      'Wash the rice and toor dal thoroughly.',
      'Cut the vegetables into small pieces.',
      'Cook the rice and dal together until soft.',
      'Cook the vegetables separately until tender.',
      'Prepare tamarind water and keep it aside.',
      'Prepare the tempering with ghee, mustard seeds, cumin seeds, dry red chilli and curry leaves.',
      'Add the cooked vegetables and tamarind water.',
      'Add turmeric and Bisi Bele Bath powder and mix well.',
      'Add the cooked rice and dal to the mixture.',
      'Add water as needed and simmer until soft.',
      'Adjust salt and serve hot.'
    ],

    serving:
      'Bisi Bele Bath is traditionally served hot with boondi, papad, pickle or a little ghee.',

    chefTip:
      'Cook the rice and dal until very soft for the traditional texture. Add tamarind gradually to balance the spicy and tangy flavours.',

    odiaMessage:
      'କର୍ଣ୍ଣାଟକର ପାରମ୍ପରିକ ଖାଦ୍ୟର ସୁଗନ୍ଧିତ ମସଲା ଓ ସମୃଦ୍ଧ ସ୍ୱାଦର ଏକ ପରିଚିତ ପରିଚୟ ହେଉଛି ବିସି ବେଲେ ବାଥ।'
  };

  misalPavData: Recipe = {
    name: 'Misal Pav',
    odiaName: 'मिसळ पाव',
    state: 'Maharashtra',
    category: 'Traditional Maharashtrian Cuisine',
    type: 'Vegetarian',
    time: '45 min',
    serves: '4',
    difficulty: 'Medium',

    description:
      'Misal Pav is a popular Maharashtrian dish made with spicy sprouted lentils, flavorful gravy, farsan and soft pav.',

    about:
      'Misal Pav is a well-known street food and breakfast dish from Maharashtra. It combines a spicy sprouted-lentil curry with crunchy farsan, onions, coriander and pav.',

    story:
      'Misal has become an important part of Maharashtra’s food culture, with different regions preparing it with their own level of spice and style.',

    ingredients: [
      'Mixed sprouts – 2 cups',
      'Onion – 1 large',
      'Tomato – 2 medium',
      'Potato – 1 medium',
      'Pav – 8',
      'Farsan – 1 cup',
      'Water – as required',
      'Salt – as required'
    ],

    masala: [
      'Misal masala – 2 tablespoons',
      'Red chilli powder – 1 teaspoon',
      'Turmeric powder – ½ teaspoon',
      'Cumin seeds – 1 teaspoon',
      'Mustard seeds – ½ teaspoon',
      'Ginger-garlic paste – 1 teaspoon',
      'Coriander leaves – a small amount'
    ],

    preparation: [
      'Wash the mixed sprouts and cook them until tender.',
      'Heat oil in a pan and add mustard seeds and cumin seeds.',
      'Add chopped onion and cook until lightly golden.',
      'Add ginger-garlic paste and cook for a minute.',
      'Add chopped tomatoes and cook until soft.',
      'Add turmeric, red chilli powder and misal masala.',
      'Add the cooked sprouts and potato.',
      'Add water and simmer the mixture until the gravy becomes flavorful.',
      'Adjust salt and spice according to taste.',
      'Serve the misal topped with farsan, chopped onion and coriander.',
      'Serve hot with pav.'
    ],

    serving:
      'Misal Pav is traditionally served hot with pav, farsan, chopped onions, coriander and lemon.',

    chefTip:
      'For authentic flavour, keep the gravy spicy and serve the farsan separately or add it just before eating so it remains crunchy.',

    odiaMessage:
      'ମହାରାଷ୍ଟ୍ରର ଲୋକପ୍ରିୟ ଓ ମସଲାଦାର ଖାଦ୍ୟ ପରମ୍ପରାର ଏକ ପରିଚିତ ପରିଚୟ ହେଉଛି ମିସଲ ପାଉ।'
  };

  constructor(private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {

      this.recipe = params['recipe'] || '';

      if (this.recipe === 'Pakhala Bhata') {
        this.recipeData = this.pakhalaData;

      } else if (this.recipe === 'Dahi Pakhala') {
        this.recipeData = this.dahiPakhalaData;

      } else if (this.recipe === 'Masor Tenga') {
        this.recipeData = this.masorTengaData;

      } else if (this.recipe === 'Khar') {
        this.recipeData = this.kharData;

      } else if (this.recipe === 'Sarson da Saag') {
        this.recipeData = this.sarsonSaagData;

      } else if (this.recipe === 'Dal Baati Churma') {
        this.recipeData = this.dalBaatiChurmaData;

      } else if (this.recipe === 'Macher Jhol') {
        this.recipeData = this.macherJholData;

      } else if (this.recipe === 'Dhuska') {
        this.recipeData = this.dhuskaData;

      } else if (this.recipe === 'Pongal') {
        this.recipeData = this.pongalData;

      } else if (this.recipe === 'Avial') {
        this.recipeData = this.avialData;

      } else if (this.recipe === 'Bisi Bele Bath') {
        this.recipeData = this.bisiBeleBathData;

      } else if (this.recipe === 'Misal Pav') {
        this.recipeData = this.misalPavData;
      }

    });

  }

}