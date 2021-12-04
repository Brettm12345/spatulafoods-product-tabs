import React, {ReactElement} from 'react';

export interface NutritionItem {
  content: `${number}` | `${number}mg` | `${number}g`;
  dailyValue?: number;
}
export interface NutritionCategory {
  total: NutritionItem;
  breakdown: Record<string, NutritionItem>;
}

const formatIngredients = (...ingredients: string[]): string =>
  `[${ingredients.join(', ')}]`;

export type NutritionValue = NutritionCategory | NutritionItem;
export type Nutrition = Record<string, NutritionValue>;
export interface Product {
  name: string;
  cookingInstructions: ReactElement;
  nutrition: Nutrition;
  ingredients: string[];
}

export const isCategory = (x: NutritionValue): x is NutritionCategory =>
  'breakdown' in x;

type ID = number;

type Products = Record<ID, Product>;

export const products: Products = {
  [6966542565568]: {
    name: 'Spanish Saffron-Infused Seafood Paella with Chicken and Chorizo',
    cookingInstructions: (
      <ol>
        <li>
          In a large non-stick pan, add the paella rice, seafood, and vegetables
          with <b>½ cup water</b>.
        </li>
        <li>
          Cook over <b>medium high heat</b>, stirring continually until warmed
          through, roughly <b>8-10 min</b>.
        </li>
        <li>Plate the paella and enjoy!</li>
      </ol>
    ),
    nutrition: {
      Calories: {
        content: '400',
      },
      'Total Fat': {
        total: {
          content: '15g',
          dailyValue: 20,
        },
        breakdown: {
          'Saturated Fat': {
            content: '3g',
            dailyValue: 16,
          },
          'Trans Fat': {
            content: '0g',
          },
        },
      },
      Cholesterol: {
        content: '105mg',
        dailyValue: 36,
      },
      Sodium: {
        content: '660mg',
        dailyValue: 29,
      },
      'Total Carbohydrates': {
        total: {
          content: '42g',
          dailyValue: 15,
        },
        breakdown: {
          'Dietary Fiber': {
            content: '2g',
            dailyValue: 7,
          },
          'Total Sugars': {
            content: '3g',
          },
        },
      },
      Protein: {
        content: '21g',
        dailyValue: 42,
      },
      Calcium: {
        content: '70mg',
        dailyValue: 6,
      },
      Iron: {
        content: '2.7mg',
        dailyValue: 15,
      },
      Potassium: {
        content: '510mg',
        dailyValue: 10,
      },
    },
    ingredients: [
      'Chicken Broth',
      'Shrimp Peeled Tail On (18-20 Size)',
      'Green Beans IQF',
      'Spanish Rice',
      'Onion Yellow',
      'Chicken Thigh Boneless Skinless',
      'Chorizo',
      'Calamari Rings',
      'Mussels Precooked',
      'Tomato Canned San Marzano',
      'Wine',
      `White Cooking ${formatIngredients('Wine', 'Salt', 'Sulphites')}`,
      'Olive Oil',
      'Red Bell Pepper',
      'Yellow Bell Pepper',
      'Garlic Fresh',
      'Parsley Fresh',
      'Canola Oil',
      'Smoked Paprika',
      'Kosher Salt',
      'Bay Leaf',
      'Black Pepper Ground',
      'Saffron',
    ],
  },
  [6966534602944]: {
    name: 'Wild Mushroom Truffled Risotto and Parmigiano Reggiano',
    cookingInstructions: (
      <ol>
        <li>
          In a large non-stick pan, add the risotto, wild mushroom mix, and{' '}
          <b>¾ cup water</b>.
        </li>
        <li>
          Cook over <b>medium high heat</b>, stirring continually until creamy
          and thickened, roughly <b>7-8 min</b>.
        </li>
        <li>Garnish with the parmesan petals and enjoy!</li>
      </ol>
    ),
    nutrition: {
      Calories: {
        content: '930',
      },
      'Total Fat': {
        total: {
          content: '42g',
          dailyValue: 54,
        },
        breakdown: {
          'Saturated Fat': {
            content: '19g',
            dailyValue: 97,
          },
          'Trans Fat': {
            content: '0g',
          },
        },
      },
      Cholesterol: {
        content: '80mg',
        dailyValue: 26,
      },
      Sodium: {
        content: '1220mg',
        dailyValue: 53,
      },
      'Total Carbohydrates': {
        total: {
          content: '97g',
          dailyValue: 35,
        },
        breakdown: {
          'Dietary Fiber': {
            content: '2g',
            dailyValue: 7,
          },
          'Total Sugars': {
            content: '4g',
          },
        },
      },
      Protein: {
        content: '28g',
        dailyValue: 56,
      },
      Calcium: {
        content: '670mg',
        dailyValue: 50,
      },
      Iron: {
        content: '1.8mg',
        dailyValue: 10,
      },
      Potassium: {
        content: '320mg',
        dailyValue: 6,
      },
    },
    ingredients: [
      'Water',
      'Arborio Rice',
      'Wine',
      `White Cooking ${formatIngredients('Wine', 'Salt', 'Sulphates')}`,
      'Milk Homo',
      'Cheese Grana Padano Grated',
      'Shallot Fresh',
      'Parmesan Reggiano',
      'Cream',
      'Butter Unsalted',
      'Truffle Oil',
      'Kosher Salt',
      'Black Pepper Ground',
      'Nutmeg Ground',
      'Mushroom Whole White',
      'Dry Parsley Flake',
      'Tarragon',
      'Chives Fresh',
      'Thyme Fresh',
      'Mushroom Sliced White',
      'Mushroom Shiitake',
      'Mushroom King Oyster',
      'Olive Oil Extra-Virgin',
      `Mushroom Seasoning ${formatIngredients(
        'Mushroom Powder',
        'Salt',
        'Mushroom Extract'
      )}`,
      'Garlic Granulated',
    ],
  },
  [6966527918272]: {
    name: 'Slow Braised Beef Bolognese with Rigatoni and Parmigiano Reggiano',
    cookingInstructions: (
      <ol>
        <li>
          In a large non-stick pan, add the bolognese sauce with <b>1/3 cup</b>{' '}
          water.
        </li>
        <li>
          Cook over <b>medium high heat</b>, stirring often until warmed
          through, roughly <b>3-4 min</b>.
        </li>
        <li>
          Add the rigatoni and <b>¼ cup of water</b>. Continue cooking for an
          additional <b>4-5 min</b>, stirring often until the noodles are warmed
          through and the sauce begins to coat the noodles.
        </li>
        <li>Garnish with the parmesan petals and enjoy!</li>
      </ol>
    ),
    nutrition: {
      Calories: {
        content: '670',
      },
      'Total Fat': {
        total: {
          content: '30g',
          dailyValue: 38,
        },
        breakdown: {
          'Saturated Fat': {
            content: '11g',
            dailyValue: 53,
          },
          'Trans Fat': {
            content: '0.5g',
          },
        },
      },
      Cholesterol: {
        content: '75mg',
        dailyValue: 25,
      },
      Sodium: {
        content: '660mg',
        dailyValue: 29,
      },
      'Total Carbohydrates': {
        total: {
          content: '65g',
          dailyValue: 23,
        },
        breakdown: {
          'Dietary Fiber': {
            content: '6g',
            dailyValue: 20,
          },
          'Total Sugars': {
            content: '11g',
          },
        },
      },
      Protein: {
        content: '29g',
        dailyValue: 59,
      },
      Calcium: {
        content: '200mg',
        dailyValue: 15,
      },
      Iron: {
        content: '5.2mg',
        dailyValue: 30,
      },
      Potassium: {
        content: '1040mg',
        dailyValue: 20,
      },
    },
    ingredients: [
      'Ground Beef Lean',
      'Tomato',
      'San Marzano Crushed',
      'Rigatoni',
      'Milk Homo',
      'Beef Broth',
      'Wine Red',
      'Onion Yellow',
      'Pancetta',
      'Carrots',
      'Heavy Cream',
      'Celery',
      'Tomato Paste',
      'Olive Oil Extra-Virgin',
      'Parmesan Reggiano (Petals For Garnish)**',
      'Canola Oil',
      'Cheese Grana Padano Grated',
      'Garlic Granulated',
      'Parsley Fresh Italian',
      'Oregano Dry',
      'Sage Dry',
      'Bay Leaves Dry',
      'Basil Dry',
      'Mushroom Seasoning',
      'Black Pepper Ground',
    ],
  },
  [6966554099904]: {
    name: 'Braised Beef Bourguignon with Pearl Onions and Pomme Purée',
    cookingInstructions: (
      <ol>
        <li>
          In a large non-stick pan, add the beef bourguignon with <b>1/3 cup</b>{' '}
          of water.
        </li>
        <li>
          Cook over <b>medium high heat</b> until warmed through and slightly
          thickened, roughly <b>6-7 min</b>
        </li>
        <li>
          Meanwhile, in a second non-stick pan, add the pomme puree and cook
          over <b>medium heat</b>, stirring often until warmed through, roughly{' '}
          <b>4-5 min</b>.
        </li>
        <li>Serve the beef bourguignon with the pomme puree and enjoy!</li>
      </ol>
    ),
    nutrition: {
      'Total Fat': {
        total: {
          content: '36g',
          dailyValue: 46,
        },
        breakdown: {
          'Saturated fat': {
            content: '14g',
            dailyValue: 71,
          },
          'Trans fat': {
            content: '0g',
          },
        },
      },
      Cholesterol: {
        content: '100mg',
        dailyValue: 34,
      },
      Sodium: {
        content: '650mg',
        dailyValue: 28,
      },
      'Total Carbohydrates': {
        total: {
          content: '32g',
          dailyValue: 12,
        },
        breakdown: {
          'Dietary Fiber': {
            content: '5g',
            dailyValue: 16,
          },
          'Total Sugars': {
            content: '6g',
          },
        },
      },
      Protein: {
        content: '23g',
        dailyValue: 46,
      },
      Calcium: {
        content: '90mg',
        dailyValue: 8,
      },
      Iron: {
        content: '4.9mg',
        dailyValue: 25,
      },
      Potassium: {
        content: '1040mg',
        dailyValue: 20,
      },
    },
    ingredients: [
      'Beef Broth',
      'Potatoes',
      'Yukon',
      'Beef Chuck',
      'Wine Red Carrots',
      'Onions Pearl IQF',
      'Heavy Cream',
      'Onion Yellow',
      'White Button Mushrooms',
      'Canola Oil',
      'Butter Unsalted',
      'Bacon Double Smoked',
      'Flower AP',
      'Tomato Paste',
      'Rosemary Fresh',
      'Garlic Fresh',
      'Garlic Granulated Thyme Dry',
      'Parsley Fresh Italian',
      'Black Pepper Ground',
      'Bay Leaves Dry',
      'Bay Leaf',
      'Kosher Salt',
    ],
  },
  [6966538076352]: {
    name: 'Singapore Black Pepper Udon with Shrimp and Gai Lan',
    cookingInstructions: (
      <ol>
        <li>
          In a large non-stick pan, pour in the contents of the shrimp and
          vegetables pouch. Add both packs of noodles on top and add{' '}
          <b>1/2 cup</b> of water.
        </li>
        <li>
          Cook over <b>medium high heat</b>, until the steam from the vegetables
          begins to thaw the udon noodles, roughly <b>3-4 min</b>.
        </li>
        <li>
          Once the udon noodles begin to thaw, cook for an additional{' '}
          <b>5-6 min</b>, stirring often to coat the noodles and warm through.
        </li>
        <li>Garnish with the sesame seeds and enjoy!</li>
      </ol>
    ),
    nutrition: {
      Calories: {
        content: '440',
      },
      'Total Fat': {
        total: {
          content: '17g',
          dailyValue: 22,
        },
        breakdown: {
          'Saturated Fat': {
            content: '9g',
            dailyValue: 46,
          },
          'Trans Fat': {
            content: '0',
          },
        },
      },
      Cholesterol: {
        content: '155mg',
        dailyValue: 38,
      },
      Sodium: {
        content: '1440mg',
        dailyValue: 63,
      },
      'Total Carbohydrate': {
        total: {
          content: '60g',
          dailyValue: 22,
        },
        breakdown: {
          'Dietary Fiber': {
            content: '5g',
            dailyValue: 16,
          },
          'Total Sugars': {
            content: '28g',
          },
        },
      },
      Protein: {
        content: '15g',
        dailyValue: 31,
      },
      Calcium: {
        content: '70mg',
        dailyValue: 6,
      },
      Iron: {
        content: '0.8mg',
        dailyValue: 4,
      },
      Potassium: {
        content: '330mg',
        dailyValue: 6,
      },
    },
    ingredients: [
      'Udon Noodles',
      `Frozen ${formatIngredients(
        'Wheat Flower',
        'Water',
        'Modified Tapioca Starch',
        'Propylene Glycol',
        'Alginate',
        'Potassium Carbonate'
      )}`,
      'Shrimp Peeled Tail-On (18-20 Size)',
      'Water',
      'Honey',
      'Gailan Leaf',
      'Gailan Stem',
      'Butter Unsalted',
      'Red Bell Pepper',
      `Soy Sauce (Yasama) ${formatIngredients(
        'Water',
        'Soy Beans',
        'Wheat',
        'Salt',
        'Brewing Starter (Aspergillus Sojae)'
      )}`,
      'Scallion',
      `Shao Hsing Wine ${formatIngredients(
        'Water',
        'Rice',
        'Wheat',
        'Salt',
        'Caramel'
      )}`,
      'Ginger Fresh',
      'Garlic Fresh',
      `Oyster Sauce ${formatIngredients(
        'Water',
        'Sugar',
        'Salt',
        'Modified Corn Starch',
        'Oyster Extract',
        'Monosodium Glutamate',
        'Caramel Color',
        'Artificial Flavor',
        'Lactic Acid',
        'Disodium Inosinate',
        'Disodium Guanylate'
      )}`,
      'Canola Oil',
      'Instant Coffee Dark Roast',
      'Black Pepper Ground',
      'White Pepper Ground',
    ],
  },
  [6966548365504]: {
    name: 'Pan Seared Tilapia with Roasted White Wine Tomatoes and Herbed Couscous',
    cookingInstructions: (
      <ol>
        <li>
          In a large non-stick pan, add the couscous with <b>1/4 cup</b> water.
          Cook over <b>medium low heat</b>, continually stirring until the
          couscous is warmed through, roughly <b>3-4 min</b>.
        </li>
        <li>
          In a different large non-stick pan, first add the tilapia and then the
          tomatoes along with <b>1/4 cup</b> water.
        </li>
        <li>
          Cook over <b>medium high heat</b> for <b>5-6 min</b>, stirring often
          until the sauce has thickened and the fish is warmed through.
        </li>
        <li>
          Serve the tilapia, white wine sauce and tomatoes over the couscous and
          Enjoy!
        </li>
      </ol>
    ),
    nutrition: {
      Calories: {
        content: '400',
      },
      'Total Fat': {
        total: {
          content: '17g',
          dailyValue: 22,
        },
        breakdown: {
          'Saturated Fat': {
            content: '6g',
            dailyValue: 29,
          },
          'Trans Fat': {
            content: '0.5g',
          },
        },
      },
      Cholesterol: {
        content: '65mg',
        dailyValue: 22,
      },
      Sodium: {
        content: '530mg',
        dailyValue: 23,
      },
      'Total Carbohydrates': {
        total: {
          content: '35g',
          dailyValue: 13,
        },
        breakdown: {
          'Dietary Fiber': {
            content: '3g',
            dailyValue: 11,
          },
          'Total Sugars': {
            content: '1g',
          },
        },
      },
      Protein: {
        content: '27g',
        dailyValue: 53,
      },
      Calcium: {
        content: '50mg',
        dailyValue: 4,
      },
      Iron: {
        content: '2.3mg',
        dailyValue: 15,
      },
      Potassium: {
        content: '670mg',
        dailyValue: 15,
      },
    },
    ingredients: [
      'Chicken Broth',
      'Tilapia',
      'Fillets',
      'Cherry Tomatoes',
      'White Wine Cooking',
      'Couscous',
      'Butter Unsalted',
      'Canola Oil',
      'Lemon Juice',
      'Garlic Fresh',
      'Tarragon Fresh',
      'Parsley Fresh Italian',
      'Garlic Granulated',
      'Kosher Salt',
      'Black Pepper Cracked',
      'Mushroom Seasoning',
      'Smoked Paprika',
      'Basil Dry',
    ],
  },
};
