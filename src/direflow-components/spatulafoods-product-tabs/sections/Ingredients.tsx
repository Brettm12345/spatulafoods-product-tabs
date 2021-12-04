import React, {FC} from 'react';
import {Product} from '../data/products';

export const Ingredients: FC<Product> = ({ingredients}) => (
  <ul className="col-gap-8 column-count-3 min-w-full list-none space-y-2">
    {ingredients.map(ingredient => (
      <li key={ingredient} className="text-sm md:text-base">
        {ingredient}
      </li>
    ))}
  </ul>
);
