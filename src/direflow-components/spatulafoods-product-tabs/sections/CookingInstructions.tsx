import {FC} from 'react';
import {Product} from '../data/products';

export const CookingInstructions: FC<Product> = ({cookingInstructions}) => (
  <div className="prose prose-lg md:prose-xl mx-auto px-4 md:px-0">
    {cookingInstructions}
  </div>
);
