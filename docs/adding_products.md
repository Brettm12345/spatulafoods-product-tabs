# Adding products

## Getting started

To get started make sure you have `git`, `yarn` and `Node.JS` installed on your system

Fork the repository and clone it to your local machine

```shell
git clone git@github.com:YOUR_USERNAME/spatulafoods-product-tabs
cd spatulafoods-product-tabs
yarn install
git branch PRODUCT_NAME
git checkout PRODUCT_NAME
```

## Adding new products

Products are located in [`src/direflow-components/spatulafoods-product-tabs/data/products.tsx`](../src/direflow-components/spatulafoods-product-tabs/data/products.tsx)

Here is the type definition of a product

```typescript
export interface Product {
  name: string;
  cookingInstructions: ReactElement;
  servingSize: `${number}g`;
  contains: string[];
  nutrition: Nutrition;
  ingredients: string[];
}
```

Nutrition Info is the most complex

```typescript
export interface NutritionItem {
  content: `${number}` | `${number}mg` | `${number}g`;
  dailyValue?: number;
}
export interface NutritionCategory {
  total: NutritionItem;
  breakdown: Record<string, NutritionItem>;
}

export type NutritionValue = NutritionCategory | NutritionItem;

export type Nutrition = Record<string, NutritionValue>;
```

Here is an example nutrition info

```typescript
const nutrition = {
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
}
```

Products are arranged into a record with their shopify product id as the key

### Finding your product id

To find the product id go to the shopify admin panel and locate your product. Your url should look something like this `https://spatula-foods.myshopify.com/admin/products/6966554099904` the number at the end is your product id.

Use the product id as the key of the object and create all the required properties for each item.

### Submitting your work

```shell
git add .
git commit -am "Added new product"
git push
```

Next go on github and make a pull request to this repository.

Once your pull request is merged change this line in `template--product.liquid` updating the version tag after the `@` with the new version found in [`package.json`](../package.json)

```html
  <script src="https://cdn.jsdelivr.net/npm/spatulafoods-product-tabs@1.0.27/build/direflowBundle.min.js"></script>
```
