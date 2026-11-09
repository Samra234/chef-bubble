import fs from 'fs';
import path from 'path';

const recipesPath = path.resolve('data/recipes.json');
const recipes = JSON.parse(fs.readFileSync(recipesPath, 'utf8'));

const newRecipes = [
  {
    "id": "seekh-kabab",
    "slug": "seekh-kabab",
    "title": "Authentic Pakistani Beef Seekh Kabab",
    "category": "Beef & Mutton",
    "prepTime": "25 mins",
    "cookTime": "15 mins",
    "totalTime": "40 mins",
    "servings": "4",
    "difficulty": "Medium",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "Juicy, melt-in-the-mouth Pakistani seekh kababs made from spiced minced beef, roasted cumin, fresh mint, and charcoal smoke.",
    "longDescription": "Chef Bubble's authentic Pakistani Beef Seekh Kababs are seasoned to perfection with roasted coriander, cumin, garam masala, finely grated onions, ginger-garlic paste, and fresh garden herbs. A touch of roasted besan ensures an ultra-juicy, non-crumbly texture, while a glowing charcoal infusion gives that signature highway dhaba barbecue finish right in your home kitchen.",
    "ingredients": [
      "500g minced beef (80/20 meat-to-fat ratio, fine mince)",
      "1 large onion, grated and water completely squeezed out",
      "1.5 tbsp ginger paste and 1.5 tbsp garlic paste",
      "3-4 fresh green chilies, finely minced",
      "1/4 cup fresh mint leaves, finely chopped",
      "1/4 cup fresh cilantro (coriander), finely chopped",
      "1 tbsp roasted crushed coriander seeds",
      "1 tsp roasted crushed cumin powder",
      "1 tsp red chili flakes",
      "1 tsp garam masala powder",
      "1/2 tsp chaat masala",
      "1 tsp salt (to taste)",
      "1.5 tbsp roasted gram flour (besan)",
      "1 tbsp melted desi ghee or butter",
      "1 small piece of natural charcoal for smoky dhungar"
    ],
    "instructions": [
      "Ensure the minced beef is chilled and free of excess water. Squeeze out all liquid from the grated onion using a clean cheesecloth.",
      "In a wide mixing bowl, combine the beef mince, squeezed onion, ginger-garlic paste, green chilies, mint, and cilantro.",
      "Add roasted coriander, cumin, red chili flakes, garam masala, chaat masala, salt, roasted besan, and melted ghee.",
      "Knead the mixture vigorously with your hands for 8-10 minutes until fibrous, tacky, and well emulsified.",
      "Place a small foil cup in the center. Heat charcoal until red hot, place in foil, drizzle a few drops of oil, and immediately cover with a tight lid for 5 minutes.",
      "Lightly oil or wet hands. Take an orange-sized portion of mince and mold evenly onto flat metal skewers, pressing slight finger ridges along the length.",
      "Preheat a cast-iron skillet or grill pan with 2 tbsp oil over medium-high heat. Place skewers and cook for 10-12 minutes, turning every 2-3 minutes until golden browned and juicy.",
      "Brush with melted butter, sprinkle with chaat masala, and slide carefully off skewers onto a serving platter."
    ],
    "chefTips": "Never skip squeezing out all moisture from the onions! Moisture in the onion is the primary reason seekh kababs crack or slip off skewers.",
    "servingSuggestions": "Serve hot with mint-coriander yogurt raita, lemon wedges, pickled onion rings, and piping hot butter naan or parathas.",
    "storageInstructions": "Raw shaped kababs can be flash-frozen on a baking sheet, then bagged and stored for up to 1 month. Thaw in the fridge before grilling.",
    "nutrition": {
      "calories": "340 kcal",
      "protein": "29g",
      "carbs": "6g",
      "fat": "22g",
      "fiber": "1g"
    },
    "faqs": [
      {
        "question": "Can I use minced chicken or mutton instead of beef?",
        "answer": "Yes, mutton mince or chicken thigh mince works wonderfully. Adjust cooking time to 8-10 minutes for chicken."
      },
      {
        "question": "How do I prevent kababs from drying out?",
        "answer": "Using 15-20% fat in the mince and not overcooking ensures juicy, succulent kababs every single time."
      }
    ],
    "related": [
      "chapli-kabab",
      "chicken-tikka",
      "beef-biryani"
    ]
  },
  {
    "id": "chapli-kabab",
    "slug": "chapli-kabab",
    "title": "Traditional Peshawari Chapli Kabab",
    "category": "Pakistani Recipes",
    "prepTime": "20 mins",
    "cookTime": "15 mins",
    "totalTime": "35 mins",
    "servings": "4",
    "difficulty": "Medium",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "Crispy on the outside, succulent on the inside, authentic Peshawari beef patties loaded with anardana, coarsely ground spices, and fresh tomatoes.",
    "longDescription": "Hailing from the historic street food markets of Peshawar, Chapli Kabab is celebrated across Pakistan for its distinct crispy lacy edges and juicy spiced interior. Coarsely ground beef is seasoned with tangy dried pomegranate seeds (anardana), cracked coriander seeds, maize flour (makki ka atta), and scrambled eggs for unbeatable tenderness. Each kabab is topped with a fresh tomato slice and pan-fried to deep golden perfection.",
    "ingredients": [
      "500g coarsely ground beef mince (80/20 meat-to-fat ratio)",
      "1/2 cup makki ka atta (fine maize flour / cornmeal)",
      "1 egg, soft-scrambled in 1 tsp ghee",
      "1 egg, raw and lightly beaten",
      "1 large onion, finely chopped",
      "2 medium tomatoes (1 finely diced, 1 sliced into thin rounds)",
      "2 tbsp dried pomegranate seeds (anardana), coarsely crushed",
      "2 tbsp whole coriander seeds, coarsely cracked",
      "1 tbsp cumin seeds, lightly roasted and crushed",
      "1 tbsp ginger-garlic paste",
      "3-4 green chilies, finely chopped",
      "1 tsp red chili flakes",
      "1/2 tsp ajwain (carom seeds)",
      "1 tsp salt (to taste)",
      "1/2 cup fresh cilantro, finely chopped",
      "Ghee or cooking oil for shallow frying"
    ],
    "instructions": [
      "In a wide mixing platter (parath), place the coarse beef mince.",
      "Add the crushed anardana, cracked coriander seeds, roasted cumin, chili flakes, ajwain, salt, and ginger-garlic paste.",
      "Add the chopped onion, diced tomato, minced green chilies, chopped cilantro, soft scrambled egg, raw beaten egg, and maize flour.",
      "Knead the mixture thoroughly with the heel of your hand for 6-8 minutes until well blended and pliable. Let rest for 15 minutes.",
      "Heat 1/2 inch of oil or ghee in a wide flat tawa or skillet over medium-high heat.",
      "Moisten hands with water. Take a baseball-sized portion of mince, flatten between palms into a large thin patty (approx 5 inches wide), and press a tomato slice firmly into the center.",
      "Carefully slide the patty into hot oil. Fry for 4-5 minutes on the first side until deep brown and crispy-edged, then gently flip and fry for 3-4 minutes on the reverse side.",
      "Drain on paper towels and dust with chaat masala before serving immediately."
    ],
    "chefTips": "Cracking the whole coriander seeds and anardana coarsely rather than grinding into powder provides the signature crunchy texture and bursts of tartness in every bite.",
    "servingSuggestions": "Serve piping hot with fresh tandoori naan, sliced raw onions, lemon wedges, and green mint-tamarind chutney.",
    "storageInstructions": "Mix can be prepared and refrigerated up to 24 hours in advance. Always fry fresh just before dining for the crispiest texture.",
    "nutrition": {
      "calories": "380 kcal",
      "protein": "27g",
      "carbs": "14g",
      "fat": "24g",
      "fiber": "2g"
    },
    "faqs": [
      {
        "question": "What is anardana and can I substitute it?",
        "answer": "Anardana is dried wild pomegranate seed. If unavailable, substitute with 1 tsp amchur (dry mango powder) or an extra squeeze of fresh lemon juice."
      },
      {
        "question": "Why do traditional Peshawari recipes include scrambled egg?",
        "answer": "The scrambled egg retains pockets of moisture inside the mince during high-heat shallow frying, preventing the kabab from becoming tough."
      }
    ],
    "related": [
      "seekh-kabab",
      "beef-keema",
      "chicken-karahi"
    ]
  },
  {
    "id": "chicken-malai-boti",
    "slug": "chicken-malai-boti",
    "title": "Creamy Restaurant-Style Chicken Malai Boti",
    "category": "Chicken Recipes",
    "prepTime": "20 mins",
    "cookTime": "15 mins",
    "totalTime": "35 mins",
    "servings": "4",
    "difficulty": "Easy",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "Velvety tender chicken boneless cubes marinated in rich dairy cream, hung curd, white pepper, and green chilies, grilled to melt-in-mouth perfection.",
    "longDescription": "Chicken Malai Boti is beloved for its mild, luxurious flavor and velvety tenderness that literally melts on the tongue. Boneless chicken pieces are marinated in a silky blend of heavy cream (malai), thick yogurt, fresh lemon juice, crushed green cardamom, and white pepper. Charred gently on a skillet, grill, or skewers, each bite delivers smoky aroma and creamy, savory satisfaction.",
    "ingredients": [
      "600g boneless chicken breast or thighs, cut into 1.5-inch cubes",
      "1/2 cup fresh heavy cream (malai)",
      "1/2 cup thick Greek yogurt or hung curd",
      "1.5 tbsp ginger paste and 1.5 tbsp garlic paste",
      "2 tbsp fresh lemon juice",
      "4 green chilies blended with 1 tbsp cilantro into a fine paste",
      "1 tsp freshly ground white pepper powder",
      "1/2 tsp black pepper powder",
      "1/2 tsp green cardamom powder",
      "1 tsp roasted cumin powder",
      "1 tbsp cornstarch or roasted gram flour",
      "1 tsp salt (to taste)",
      "2 tbsp melted butter for basting"
    ],
    "instructions": [
      "Pat the chicken cubes thoroughly dry with paper towels. Toss with lemon juice, 1 tbsp ginger-garlic paste, and 1/2 tsp salt; let sit for 15 minutes.",
      "In a separate bowl, whisk together the heavy cream, thick yogurt, green chili paste, remaining ginger-garlic paste, white pepper, black pepper, cardamom powder, cumin, cornstarch, and salt until smooth.",
      "Add the chicken into the cream marinade and mix well to coat all pieces evenly. Cover and marinate in the refrigerator for at least 2 hours (or overnight).",
      "Thread the marinated chicken cubes onto soaked wooden skewers or metal skewers.",
      "Heat a grill pan, heavy skillet, or barbecue over medium-high heat with 1 tbsp oil.",
      "Cook the skewers for 10-12 minutes, turning every 2-3 minutes and basting generously with melted butter until cooked through and lightly charred at edges.",
      "Optionally give a 2-minute charcoal smoke (dhungar) before serving warm with a lemon wedge."
    ],
    "chefTips": "Using white pepper and green chili paste preserves the beautiful light creamy color of the dish while delivering rich warmth without darkening the sauce.",
    "servingSuggestions": "Serve piping hot with butter garlic parathas, roghni naan, fresh onion rings, and a cool mint dip.",
    "storageInstructions": "Marinated raw chicken keeps for up to 48 hours in the fridge. Cooked boti can be stored in an airtight container for up to 3 days.",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "35g",
      "carbs": "5g",
      "fat": "22g",
      "fiber": "1g"
    },
    "faqs": [
      {
        "question": "Can I make this in an oven or air fryer?",
        "answer": "Yes! Bake at 200°C (400°F) for 15 minutes, or air fry at 190°C (375°F) for 10-12 minutes, basting with butter halfway."
      },
      {
        "question": "How do I ensure chicken breast stays juicy?",
        "answer": "The heavy cream and yogurt marinade acts as a natural tenderizer, sealing in natural juices so the breast stays tender."
      }
    ],
    "related": [
      "chicken-tikka",
      "butter-chicken",
      "oven-baked-bbq-chicken"
    ]
  },
  {
    "id": "lahori-chana-chaat",
    "slug": "lahori-chana-chaat",
    "title": "Street-Style Lahori Chana Chaat",
    "category": "Fast Food",
    "prepTime": "15 mins",
    "cookTime": "10 mins",
    "totalTime": "25 mins",
    "servings": "4",
    "difficulty": "Easy",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "Tangy, spicy, and crunchy Pakistani street-style chickpea chaat tossed with boiled potatoes, onions, mint chutney, sweet tamarind, and crispy papdi.",
    "longDescription": "Chef Bubble's Lahori Chana Chaat delivers the vibrant, mouthwatering street-food experience of Anarkali Bazaar right to your table. Plump boiled chickpeas and tender potato cubes are tossed with diced onions, tomatoes, and spicy green chilies. Layered with velvety spiced yogurt, tangy imli (tamarind) chutney, fresh mint-coriander sauce, and topped with crunchy crushed papdi.",
    "ingredients": [
      "2 cups boiled white chickpeas (kabuli chana)",
      "1 large potato, boiled, peeled, and cubed",
      "1 medium red onion, finely diced",
      "2 medium tomatoes, deseeded and chopped",
      "2-3 green chilies, finely minced",
      "1/4 cup fresh cilantro, finely chopped",
      "2 tbsp fresh mint leaves, chopped",
      "1/2 cup sweet tamarind & date chutney (imli chutney)",
      "1/3 cup spicy mint-coriander green chutney",
      "1/2 cup thick yogurt, whisked with a pinch of salt & roasted cumin",
      "1.5 tbsp Chef Bubble special chaat masala",
      "1 tsp roasted cumin powder",
      "1/2 tsp black salt (kala namak)",
      "1 cup crispy fried papdi, lightly crushed"
    ],
    "instructions": [
      "In a large salad mixing bowl, add the boiled chickpeas and diced boiled potatoes.",
      "Add the diced onions, tomatoes, minced green chilies, cilantro, and mint leaves.",
      "Sprinkle chaat masala, roasted cumin powder, and black salt evenly over the mixture. Toss gently to combine.",
      "Add half of the sweet tamarind chutney and half of the green mint chutney; mix thoroughly.",
      "Transfer to individual bowls or a wide serving platter.",
      "Drizzle whisked yogurt across the top in ribbons, followed by the remaining tamarind and mint chutneys.",
      "Garnish with a generous handful of crushed crispy papdi and an extra pinch of chaat masala immediately before serving."
    ],
    "chefTips": "Add the papdi and chutneys right when serving so the papdi remains super crispy and provides that irresistible crunch.",
    "servingSuggestions": "Serve as a crowd-pleasing teatime snack, Ramadan Iftar centerpiece, or festive party appetizer.",
    "storageInstructions": "Keep the chickpea-potato mixture and chutneys refrigerated separately for up to 3 days. Assemble just before eating.",
    "nutrition": {
      "calories": "280 kcal",
      "protein": "10g",
      "carbs": "48g",
      "fat": "6g",
      "fiber": "8g"
    },
    "faqs": [
      {
        "question": "Can I use canned chickpeas?",
        "answer": "Yes, canned chickpeas work great! Simply rinse and drain them thoroughly under cold water before tossing."
      },
      {
        "question": "Can I make this vegan?",
        "answer": "Yes, simply omit the yogurt topping or substitute with dairy-free coconut or almond yogurt."
      }
    ],
    "related": [
      "chicken-samosa",
      "vegetable-spring-rolls",
      "daal-chawal"
    ]
  },
  {
    "id": "gajar-ka-halwa",
    "slug": "gajar-ka-halwa",
    "title": "Shahi Gajar Ka Halwa (Carrot Halwa)",
    "category": "Desserts",
    "prepTime": "20 mins",
    "cookTime": "40 mins",
    "totalTime": "60 mins",
    "servings": "6",
    "difficulty": "Medium",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "A royal winter dessert crafted with sweet red carrots slow-simmered in whole milk, roasted in pure desi ghee, and enriched with khoya and toasted nuts.",
    "longDescription": "Shahi Gajar Ka Halwa is the crown jewel of Pakistani and North Indian winter celebrations. Fresh, sweet red carrots are freshly grated and slow-cooked in rich whole milk until soft and caramelized. Roasted in aromatic desi ghee with green cardamom pods, sweetened with pure sugar, and folded with rich crumbles of fresh khoya (mawa) and golden toasted almonds, pistachios, and cashews.",
    "ingredients": [
      "1 kg fresh sweet red carrots, peeled and grated",
      "1 liter full-fat whole milk",
      "1/2 cup pure desi ghee",
      "3/4 cup granulated sugar (adjust to taste)",
      "150g fresh khoya (mawa / milk solids), crumbled",
      "6-7 green cardamom pods, crushed",
      "2 tbsp slivered almonds",
      "2 tbsp sliced pistachios",
      "1 tbsp golden cashews",
      "Edible silver leaf (chandi ka varq, optional garnish)"
    ],
    "instructions": [
      "In a heavy-bottomed kadai or wide pot, combine the grated carrots and whole milk over medium-high heat.",
      "Bring to a boil, then reduce heat to medium. Simmer uncovered, stirring occasionally, until all the milk has evaporated and carrots are tender (approx 25-30 minutes).",
      "Add pure desi ghee and crushed green cardamom pods to the carrots.",
      "Roast (bhunno) the carrots in the ghee on medium heat for 10-12 minutes, stirring continuously, until the halwa turns a deep glistening ruby-red and ghee separates at the edges.",
      "Add the sugar; the halwa will loosen as sugar melts. Continue to cook for another 8-10 minutes until glossy and thick.",
      "Fold in half of the crumbled khoya and toasted nuts (almonds, pistachios, and cashews). Cook for 2 more minutes.",
      "Transfer to a royal serving bowl, garnish with remaining crumbled khoya, slivered nuts, and optional silver leaf. Serve warm."
    ],
    "chefTips": "Grate carrots on the medium-coarse side of a box grater. Avoid food processors that puree the carrots, as long grated strands provide the authentic chewy halwa texture.",
    "servingSuggestions": "Serve piping hot after a rich dinner, optionally accompanied by a scoop of creamy vanilla bean ice cream.",
    "storageInstructions": "Refrigerate in an airtight container for up to 7 days. Reheat gently in a skillet with a teaspoon of milk or ghee.",
    "nutrition": {
      "calories": "390 kcal",
      "protein": "8g",
      "carbs": "46g",
      "fat": "20g",
      "fiber": "4g"
    },
    "faqs": [
      {
        "question": "Can I substitute khoya if it is unavailable?",
        "answer": "Yes! You can substitute khoya with 1/2 cup of full-cream milk powder or 1/2 cup of sweetened condensed milk (reduce added sugar accordingly)."
      },
      {
        "question": "What type of carrots work best?",
        "answer": "Juicy winter red Delhi carrots provide the most vibrant ruby color and natural sweetness. Orange carrots can also be used."
      }
    ],
    "related": [
      "gulab-jamun",
      "kheer",
      "shahi-tukda"
    ]
  }
];

// Append non-duplicate recipes
let addedCount = 0;
for (const nr of newRecipes) {
  if (!recipes.some(r => r.slug === nr.slug)) {
    recipes.push(nr);
    addedCount++;
  }
}

fs.writeFileSync(recipesPath, JSON.stringify(recipes, null, 2), 'utf8');
console.log(`Successfully added ${addedCount} new recipes! Total recipes now: ${recipes.length}`);
