import type {FC} from 'react';
import type {Product} from '../data/products';
import {CookingInstructions} from './CookingInstructions';
import {NutritionInfo} from './NutritionInfo';
import {Ingredients} from './Ingredients';

type Sections = Record<string, FC<Product>>;
export const sections: Sections = {
  'Cooking Instructions': CookingInstructions,
  'Nutrition Info': NutritionInfo,
  Ingredients: Ingredients,
};
