import fs from 'fs';
import path from 'path';

const recipesPath = path.resolve('data/recipes.json');
let recipes = JSON.parse(fs.readFileSync(recipesPath, 'utf8'));

// 1. Fix aloo paratha image to a real stuffed flatbread/paratha image
recipes = recipes.map(r => {
  if (r.slug === 'aloo-paratha') {
    r.image = "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80";
  }
  return r;
});

// 2. New Dessert & Drink recipes
const newRecipes = [
  {
    "id": "mango-lassi",
    "slug": "mango-lassi",
    "title": "Chilled Sweet Mango Lassi",
    "category": "Drinks & Beverages",
    "prepTime": "10 mins",
    "cookTime": "0 mins",
    "totalTime": "10 mins",
    "servings": "3",
    "difficulty": "Easy",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "Creamy, smooth, and refreshing sweet mango yogurt drink infused with fragrant green cardamom and crushed pistachios.",
    "longDescription": "Chef Bubble's Chilled Sweet Mango Lassi is the ultimate refreshing beverage for hot summer afternoons and spice-rich dinner feasts. Made by blending sweet Chaunsa or Alphonso mango pulp with thick whole-milk yogurt, chilled milk, sugar, and crushed green cardamom. Served in tall chilled glasses topped with slivered pistachios and a pinch of saffron threads.",
    "ingredients": [
      "2 cups sweet ripe mango pulp or fresh mango cubes",
      "1.5 cups thick plain Greek or whole-milk yogurt (dahi)",
      "1/2 cup chilled whole milk",
      "3 tbsp sugar or honey (adjust to taste)",
      "1/4 tsp crushed green cardamom powder",
      "6-8 crushed ice cubes",
      "1 tbsp slivered pistachios and almonds for garnish",
      "A pinch of saffron threads (optional)"
    ],
    "instructions": [
      "In a high-speed blender, add ripe mango pulp, thick yogurt, chilled milk, sugar, and cardamom powder.",
      "Add crushed ice cubes and blend on high speed for 60 seconds until completely smooth, thick, and frothy.",
      "Taste and adjust sweetness or milk thickness according to preference.",
      "Pour into tall chilled glass tumblers.",
      "Garnish with slivered pistachios, chopped almonds, and a pinch of saffron threads before serving immediately."
    ],
    "chefTips": "Use ripe, fragrant sweet mangoes like Chaunsa, Sindhari, or Alphonso for the richest natural yellow color and aroma without needing artificial flavorings.",
    "servingSuggestions": "Serve icy cold alongside spicy Biryani, Karahi, or as a cooling afternoon refresher.",
    "storageInstructions": "Best enjoyed immediately. Can be stored in a sealed glass jar in the refrigerator for up to 24 hours. Shake vigorously before serving.",
    "nutrition": {
      "calories": "210 kcal",
      "protein": "6g",
      "carbs": "36g",
      "fat": "5g",
      "fiber": "2g"
    },
    "faqs": [
      {
        "question": "Can I use canned mango pulp?",
        "answer": "Yes! Alphonso or Kesar canned mango pulp works fantastically well when fresh mangoes are out of season."
      },
      {
        "question": "How can I make a dairy-free vegan version?",
        "answer": "Substitute milk and yogurt with coconut milk and thick coconut yogurt or oat milk."
      }
    ],
    "related": [
      "mint-lemonade-margarita",
      "zafrani-karak-chai",
      "mango-dessert"
    ]
  },
  {
    "id": "zafrani-karak-chai",
    "slug": "zafrani-karak-chai",
    "title": "Dhaba-Style Zafrani Karak Chai",
    "category": "Drinks & Beverages",
    "prepTime": "5 mins",
    "cookTime": "12 mins",
    "totalTime": "17 mins",
    "servings": "4 Cups",
    "difficulty": "Easy",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "Strong, rich, aromatic milk tea slow-boiled with cardamom, cinnamon, crushed ginger, and luxurious saffron threads.",
    "longDescription": "Nothing brings people together like a steaming hot pot of Dhaba-Style Zafrani Karak Chai. Chef Bubble's signature recipe slow-boils strong black tea leaves with whole spices—green cardamom pods, cinnamon bark, and freshly bruised ginger root—in a mixture of water and full-cream evaporated milk. Infused with pure saffron threads, this tea boasts a rich amber tint, velvety mouthfeel, and an invigorating aroma.",
    "ingredients": [
      "2 cups water",
      "2 cups full-cream milk (or evaporated milk)",
      "3 tbsp strong black tea leaves (Danedar / Tapal)",
      "4 green cardamom pods, lightly crushed",
      "1 small piece cinnamon stick",
      "1/2 inch fresh ginger, crushed",
      " Pinch of saffron threads (zafran)",
      "2-3 tbsp sugar (adjust to taste)"
    ],
    "instructions": [
      "In a saucepan, bring water to a rolling boil with crushed cardamom, cinnamon stick, crushed ginger, and saffron threads.",
      "Boil for 3 minutes until spices release their fragrance into the water.",
      "Add black tea leaves and simmer on low heat for 3 minutes until tea extracts deeply.",
      "Pour in full-cream milk and sugar. Bring to a boil on medium flame.",
      "When tea rises to the top, reduce heat and pour high using a ladle repeatedly ('phainta') for 3-4 minutes to create a frothy texture.",
      "Strain through a tea sieve directly into clay cups (matka) or mugs. Serve piping hot!"
    ],
    "chefTips": "Ladling the tea up and down ('phainta') while simmering incorporates air, creating a velvety micro-foam and enhancing the rich karak tea taste.",
    "servingSuggestions": "Serve piping hot alongside crispy Aloo Paratha, Samosas, or buttery Bakery Biscuits.",
    "storageInstructions": "Tea is best served fresh. Leftovers can be kept in a thermos flask for up to 3 hours.",
    "nutrition": {
      "calories": "110 kcal",
      "protein": "4g",
      "carbs": "14g",
      "fat": "4g",
      "fiber": "0g"
    },
    "faqs": [
      {
        "question": "What makes tea 'Karak'?",
        "answer": "'Karak' means strong and intense. Boiling black tea leaves longer with full-cream milk creates a thick, strong brew."
      },
      {
        "question": "Can I skip saffron?",
        "answer": "Yes, cardamom and ginger alone create a wonderful aromatic chai, though saffron adds a regal aroma."
      }
    ],
    "related": [
      "mango-lassi",
      "aloo-paratha",
      "chicken-samosa"
    ]
  },
  {
    "id": "mint-lemonade-margarita",
    "slug": "mint-lemonade-margarita",
    "title": "Pakistani Mint Lemonade (Mint Margarita)",
    "category": "Drinks & Beverages",
    "prepTime": "8 mins",
    "cookTime": "0 mins",
    "totalTime": "8 mins",
    "servings": "2",
    "difficulty": "Easy",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "The iconic Pakistani restaurant slushie made with fresh mint, lemon juice, black salt, sugar syrup, and fizzy soda blended with crushed ice.",
    "longDescription": "If you have ever dined at a Pakistani restaurant or cafe, you know the instant magic of a frosty green Mint Margarita! Chef Bubble's recipe blends fresh fragrant garden mint leaves, freshly squeezed lemon juice, black salt (kala namak), sugar syrup, ice cubes, and a splash of lemon-lime soda into a zesty ice slushie that wakes up all your senses.",
    "ingredients": [
      "1 cup fresh mint leaves (spearmint)",
      "4 tbsp freshly squeezed lemon juice",
      "1/2 tsp black salt (kala namak)",
      "3 tbsp sugar or simple syrup",
      "1.5 cups crushed ice",
      "1 cup chilled 7Up, Sprite, or sparkling soda water",
      "Lemon wheels and mint sprigs for garnish"
    ],
    "instructions": [
      "Rinse fresh mint leaves thoroughly in cold water.",
      "In a blender, combine mint leaves, lemon juice, black salt, sugar, and half of the crushed ice.",
      "Blend on high speed until mint is finely pulverized into an emerald green liquid.",
      "Add remaining crushed ice and 7Up/soda. Pulse briefly for 5 seconds to create a frosty slush texture.",
      "Pour immediately into sugar-rimmed glasses.",
      "Garnish with a lemon wheel and fresh mint sprig."
    ],
    "chefTips": "Black salt (kala namak) is the secret ingredient! It provides that signature savory tang unique to South Asian summer coolers.",
    "servingSuggestions": "Serve immediately while icy alongside grilled BBQ chicken tikka, burgers, or pizza.",
    "storageInstructions": "Must be served immediately as ice melts and mint settles upon standing.",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "0.5g",
      "carbs": "24g",
      "fat": "0g",
      "fiber": "1g"
    },
    "faqs": [
      {
        "question": "Does this drink contain alcohol?",
        "answer": "No! Despite being called 'Mint Margarita' in Pakistani cafes, it is a 100% non-alcoholic virgin mint lemonade."
      },
      {
        "question": "Can I use regular salt instead of black salt?",
        "answer": "Regular sea salt works, but black salt adds an unmatched authentic depth of flavor."
      }
    ],
    "related": [
      "mango-lassi",
      "chicken-tikka",
      "zinger-burger"
    ]
  },
  {
    "id": "shahi-tukda",
    "slug": "shahi-tukda",
    "title": "Royal Mughlai Shahi Tukda",
    "category": "Desserts",
    "prepTime": "15 mins",
    "cookTime": "25 mins",
    "totalTime": "40 mins",
    "servings": "6",
    "difficulty": "Medium",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "Golden ghee-fried bread triangles soaked in warm saffron sugar syrup and topped with thick condensed cardamom rabri milk and nuts.",
    "longDescription": "Shahi Tukda, translating to 'Royal Slice', originated in the royal kitchens of the Mughal Empire. Chef Bubble's recipe turns humble white bread into a majestic dessert. Crustless bread slices are trimmed into crisp triangles, fried in pure desi ghee until deep golden brown, dipped in cardamom-saffron sugar syrup, and drenched under velvety rabri milk cooked with khoya and silver leaves.",
    "ingredients": [
      "6 white bread slices, crusts removed and cut diagonally into triangles",
      "1/2 cup desi ghee for shallow frying",
      "1 cup sugar and 3/4 cup water (for sugar syrup)",
      "4 green cardamom pods",
      "Pinch of saffron threads",
      "3 cups full-cream milk",
      "1/2 cup condensed milk or khoya",
      "2 tbsp chopped pistachios, almonds, and cashews",
      "Edible silver leaf (chandi ka waraq) for decoration"
    ],
    "instructions": [
      "Prepare Sugar Syrup: Boil sugar, water, crushed cardamom, and saffron in a saucepan for 6-8 minutes until it reaches 1-string consistency. Keep warm.",
      "Prepare Rabri Milk: In a heavy pan, simmer 3 cups full-cream milk and condensed milk on medium flame, stirring constantly until reduced by half to a thick Rabri. Cool slightly.",
      "Fry Bread: Heat ghee in a shallow pan. Fry bread triangles on medium heat until crispy and golden brown on both sides. Drain on paper towels.",
      "Dip: Immediately dip fried bread triangles into warm sugar syrup for 20 seconds per side so they absorb sweetness without becoming soggy.",
      "Assemble: Arrange syrup-coated bread on a broad serving platter. Pour thick saffron rabri generously over the slices.",
      "Garnish with chopped pistachios, almonds, and edible silver leaf. Serve warm or chilled!"
    ],
    "chefTips": "Fry the bread on medium heat in pure ghee rather than oil for that genuine royal buttery crunch.",
    "servingSuggestions": "Serve as a showstopper dessert after Eid feasts, weddings, or family dinner parties.",
    "storageInstructions": "Best eaten freshly assembled. Rabri milk and sugar syrup can be prepared 1 day in advance.",
    "nutrition": {
      "calories": "380 kcal",
      "protein": "8g",
      "carbs": "52g",
      "fat": "16g",
      "fiber": "1.5g"
    },
    "faqs": [
      {
        "question": "Can I bake the bread instead of frying in ghee?",
        "answer": "You can brush bread with ghee and bake at 200°C for 10 minutes, though traditional ghee frying yields superior flavor."
      },
      {
        "question": "Should Shahi Tukda be served hot or cold?",
        "answer": "It can be enjoyed either warm or chilled from the fridge according to personal delight!"
      }
    ],
    "related": [
      "gulab-jamun",
      "kheer",
      "soft-rasmalai"
    ]
  },
  {
    "id": "soft-rasmalai",
    "slug": "soft-rasmalai",
    "title": "Soft Halwai-Style Milk Rasmalai",
    "category": "Desserts",
    "prepTime": "20 mins",
    "cookTime": "30 mins",
    "totalTime": "50 mins",
    "servings": "6",
    "difficulty": "Medium",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "Melt-in-mouth cottage cheese patties simmered in light sugar syrup and steeped in chilled saffron-pistachio cardamom milk.",
    "longDescription": "Rasmalai is a legendary South Asian sweet dessert consisting of soft, spongy chhena (fresh cottage cheese) discs cooked in sugar syrup, then soaked in sweet, fragrant saffron and cardamom flavored milk (ras). Chef Bubble shares the foolproof technique to ensure your rasmalai patties remain pillowy soft and never rubbery.",
    "ingredients": [
      "1 liter full-fat milk (for chhena)",
      "2 tbsp lemon juice or vinegar diluted in 2 tbsp water",
      "1 tsp cornstarch",
      "1.5 cups sugar and 4 cups water (for cooking syrup)",
      "3 cups full-cream milk (for rabri Ras)",
      "1/2 cup sugar (for milk)",
      "1/2 tsp crushed green cardamom powder",
      "Pinch of saffron threads soaked in 2 tbsp warm milk",
      "2 tbsp pistachios and almonds, finely crushed"
    ],
    "instructions": [
      "Make Chhena: Boil 1 liter milk. Turn off heat, add diluted lemon juice gradually until milk curdles completely. Strain through cheesecloth and rinse with cold water.",
      "Knead Patties: Squeeze out excess water. Knead chhena smoothly with palms for 8 minutes until non-sticky. Add cornstarch and shape into 10 smooth flat discs without cracks.",
      "Cook Patties: Boil 1.5 cups sugar and 4 cups water in a wide deep pan. Drop chhena discs in boiling syrup, cover with lid, and cook on high heat for 15 minutes until expanded.",
      "Prepare Ras Milk: Simmer 3 cups milk with 1/2 cup sugar, cardamom, and saffron milk for 12 minutes until slightly thickened.",
      "Soak & Chill: Gently squeeze sugar syrup out of cooked patties using two spoons. Place patties into warm saffron milk. Refrigerate for at least 4 hours before serving chilled garnished with pistachios."
    ],
    "chefTips": "Rinsing the curdled chhena with cold water removes lemon acidity completely and stops the cooking process so patties stay super tender.",
    "servingSuggestions": "Serve chilled in individual dessert bowls sprinkled with crushed nuts.",
    "storageInstructions": "Keep covered in the refrigerator for up to 4 days.",
    "nutrition": {
      "calories": "260 kcal",
      "protein": "9g",
      "carbs": "34g",
      "fat": "10g",
      "fiber": "0.5g"
    },
    "faqs": [
      {
        "question": "Why did my Rasmalai patties become hard?",
        "answer": "Hard patties happen if chhena is over-kneaded or cooked in syrup that isn't boiling at high heat."
      },
      {
        "question": "Can I use milk powder to make instant Rasmalai?",
        "answer": "Yes! Milk powder dough with egg and baking powder is a popular quick alternative."
      }
    ],
    "related": [
      "shahi-tukda",
      "kheer",
      "gulab-jamun"
    ]
  },
  {
    "id": "royal-falooda",
    "slug": "royal-falooda",
    "title": "Special Layered Royal Falooda",
    "category": "Desserts",
    "prepTime": "15 mins",
    "cookTime": "10 mins",
    "totalTime": "25 mins",
    "servings": "2 Glasses",
    "difficulty": "Easy",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "Rich, extravagant dessert drink stacked with rose syrup, basil seeds, cornstarch vermicelli, cold sweet milk, and topped with kulfa ice cream.",
    "longDescription": "Royal Falooda is the ultimate celebration in a glass! Combining vibrant red rose syrup, soaked basil seeds (tukh malanga), soft cornstarch falooda noodles, chilled sweetened milk, and crowned with a scoop of creamy Kulfa ice cream, toasted nuts, and a sweet cherry. Chef Bubble brings this street-food classic straight into your kitchen.",
    "ingredients": [
      "4 tbsp sweet rose syrup (Rooh Afza)",
      "2 tbsp basil seeds (tukh malanga), soaked in 1 cup warm water for 15 mins",
      "1/2 cup cooked falooda vermicelli noodles",
      "1.5 cups chilled full-cream milk sweetened with 2 tbsp sugar",
      "2 scoops Kulfa or Vanilla ice cream",
      "2 tbsp chopped pistachios and almonds",
      "2 maraschino cherries for topping"
    ],
    "instructions": [
      "Soak basil seeds in warm water for 15 minutes until fully swollen and gelatinous.",
      "Boil falooda vermicelli according to package instructions, drain, and chill in cold water.",
      "Assembly: Take two tall sundae glasses. Add 2 tbsp rose syrup to the bottom of each glass.",
      "Layer 2 tablespoons soaked basil seeds over the rose syrup.",
      "Add a generous layer of chilled falooda vermicelli.",
      "Slowly pour chilled sweetened milk over a spoon so layers remain distinct.",
      "Top each glass with a big scoop of Kulfa ice cream.",
      "Drizzle extra rose syrup over the ice cream and garnish generously with crushed pistachios, almonds, and a cherry!"
    ],
    "chefTips": "Serve with both a long dessert spoon for the ice cream & noodles and a thick straw for drinking the sweet rose milk!",
    "servingSuggestions": "Serve chilled immediately after dinner on hot summer evenings.",
    "storageInstructions": "Assemble right before serving. Soaked basil seeds and falooda noodles can be stored in the fridge for up to 2 days.",
    "nutrition": {
      "calories": "340 kcal",
      "protein": "7g",
      "carbs": "56g",
      "fat": "10g",
      "fiber": "3g"
    },
    "faqs": [
      {
        "question": "What are basil seeds (tukh malanga)?",
        "answer": "They are black seeds from sweet basil that swell into gel-coated pearls when soaked in water, providing cooling digestive benefits."
      },
      {
        "question": "Can I use regular wheat vermicelli?",
        "answer": "Thin cornstarch or arrowroot falooda noodles are best, but thin cooked wheat seviyan works as a substitute."
      }
    ],
    "related": [
      "mango-lassi",
      "mango-dessert",
      "shahi-tukda"
    ]
  }
];

// Combine existing and new recipes, avoiding duplicate slugs
const existingSlugs = new Set(recipes.map(r => r.slug));
newRecipes.forEach(nr => {
  if (!existingSlugs.has(nr.slug)) {
    recipes.push(nr);
  }
});

fs.writeFileSync(recipesPath, JSON.stringify(recipes, null, 2), 'utf8');
console.log(`Successfully updated recipes. Total recipes now: ${recipes.length}`);
